import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomHeader from '../../component/CustomHeader';
import Colors from '../../Theme/Colors';
import BackButton from '../../component/BackButton';
import CareReceiverEditForm from '../../component/CareReceiverEditForm';
import Button from '../../component/Button';
import useRestAPI from '../../api/api';
import {Formik} from 'formik';
import {Dropdown} from 'react-native-element-dropdown';
import {Tooltip} from 'react-native-elements';
import VectorIcon from '../../component/VectorIcon';
import {launchImageLibrary} from 'react-native-image-picker';

const CareReceiverProfileEdit = ({navigation}) => {
  const [careReciverProfile, setCareReciverProfile] = useState(null);
  const {getCareReceiver, uploadImage, addCareReceiver, getCarePlanQuestions} =
    useRestAPI();
  const [isLoading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let data = await getCareReceiver();
    if (!data) {
      setCareReciverProfile({});
    } else {
      setCareReciverProfile(data[0]);
    }
    console.log('Care Reciver:', data);
  };

  // if (response.assets && response.assets.length > 0) {
  //   const data = {
  //     uri: response.assets[0].uri,
  //     type: response.assets[0].type,
  //     name: response.assets[0].fileName,
  //   };
  //   imageResponse(data);
  // }

  const imagePicker = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        maxWidth: 300,
        maxHeight: 300,
      });
      console.log(result);
      setSelectedImage(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <StatusBar barStyle="default" />
      <CustomHeader
        title="PREM SEVA"
        subTitle="Supporting your caregiving"
        logo="ios-menu-outline"
        drawerOnPress={() => navigation.openDrawer('BottomStack')}
      />
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {!careReciverProfile ? (
            <ActivityIndicator size="large" color={Colors.black} />
          ) : (
            <Formik
              initialValues={{
                name: careReciverProfile?.cr_name,
                displayName: careReciverProfile?.cr_ProfileCreator,
                age: careReciverProfile?.cr_age,
                gender: careReciverProfile?.cr_gender,
                relationship: careReciverProfile?.cr_relationship,
                //form
                allergies: careReciverProfile?.cr_allergies,
                favoriteFood: careReciverProfile?.cr_favFood,
                tvProgram: careReciverProfile?.cr_favTV,
                hobbies: careReciverProfile?.cr_hobbies,
                aids: careReciverProfile?.cr_hearing,
                spectacles: careReciverProfile?.cr_spectacles,
                diagnoses: careReciverProfile?.cr_diagnoses,
              }}
              onSubmit={async values => {
                try {
                  let imageData = {
                    uri: selectedImage?.assets[0]?.uri,
                    type: selectedImage?.assets[0]?.type,
                    name: selectedImage?.assets[0]?.fileName,
                  };
                  console.log(imageData);
                  const formData = new FormData();
                  formData.append('file', imageData);
                  const path = await uploadImage(formData);

                  if (!careReciverProfile?.image && !path.url) {
                    alert('Upload image');
                  } else {
                    const data = {
                      ...values,
                      image: path.url ? path.url : careReciverProfile?.image,
                    };
                    let status = await addCareReceiver({values: data});

                    let questionStatus = await getCarePlanQuestions();
                    console.log(questionStatus, 'dfhsdjfjhk');
                    if (!questionStatus) {
                      navigation.navigate('QuationsScreen');
                    } else {
                      if (status) {
                        alert('User updated successfully!');
                        navigation.navigate('CareReceiverProfile');
                      } else {
                        alert('Something went wrong!');
                      }
                    }
                  }
                } catch {
                  alert('Something went wrong!');
                }
              }}>
              {({
                handleChange,
                handleSubmit,
                setFieldTouched,
                values,
                setFieldValue,
              }) => (
                <>
                  <View style={styles.topView}>
                    <BackButton backPress={() => navigation.goBack(' ')} />
                    <TouchableOpacity
                      style={styles.addImageButton}
                      onPress={() => imagePicker()}>
                      {!isLoading ? (
                        <Image
                          source={{
                            uri: !selectedImage
                              ? `http://54.177.16.157:3030/${careReciverProfile?.image}`
                              : selectedImage?.assets[0]?.uri,
                          }}
                          defaultSource={require('../../images/addimage.png')}
                          style={styles.addImage}
                        />
                      ) : (
                        <ActivityIndicator size="large" color={Colors.black} />
                      )}
                    </TouchableOpacity>
                  </View>
                  <View>
                    <View style={styles.headerTitleMainView}>
                      <Text style={styles.headerTitle}>
                        Care receiver’s profile
                      </Text>
                      <Tooltip
                        popover={
                          <Text style={{color: Colors.white, fontSize: 18}}>
                            Care receiver’s is the person who will recive care
                            form Care giver.
                          </Text>
                        }
                        overlayColor="rgba(0, 0, 0, 0.2)"
                        width={300}
                        height={100}
                        backgroundColor={Colors.black}>
                        <VectorIcon
                          family={'AntDesign'}
                          name="infocirlceo"
                          color={Colors.black}
                          size={15}
                        />
                      </Tooltip>
                    </View>
                    <TextInput
                      placeholder="Name"
                      style={styles.textInput}
                      placeholderTextColor={Colors.grey}
                      value={values.name}
                      onChangeText={handleChange('name')}
                      onBlur={() => setFieldTouched('name')}
                    />
                    <TextInput
                      placeholder="Likes to be called .."
                      style={styles.textInput}
                      placeholderTextColor={Colors.grey}
                      value={values.displayName}
                      onChangeText={handleChange('displayName')}
                      onBlur={() => setFieldTouched('displayName')}
                    />
                    <TextInput
                      placeholder="Age"
                      style={styles.textInput}
                      placeholderTextColor={Colors.grey}
                      value={values.age}
                      keyboardType="numeric"
                      onChangeText={handleChange('age')}
                      onBlur={() => setFieldTouched('age')}
                    />

                    <Dropdown
                      style={styles.textInput}
                      itemTextStyle={{color: Colors.black}}
                      placeholderStyle={styles.placeholderStyle}
                      selectedTextStyle={styles.selectedTextStyle}
                      iconStyle={styles.iconStyle}
                      placeholder="Gender"
                      data={[
                        {label: 'Male', value: 'male'},
                        {label: 'Female', value: 'female'},
                      ]}
                      maxHeight={300}
                      labelField="label"
                      valueField="value"
                      value={values.gender}
                      onBlur={() => setFieldTouched('gender')}
                      onChange={item => {
                        setFieldValue('gender', item.value);
                      }}
                    />
                  </View>
                  <View style={styles.line1}></View>
                  <CareReceiverEditForm
                    handleChange={handleChange}
                    setFieldTouched={setFieldTouched}
                    values={values}
                    setFieldValue={setFieldValue}
                  />
                  <Button
                    title="Submit"
                    onPress={handleSubmit}
                    // onPress={() => navigation.navigate('CareReceiverProfile')}
                  />
                </>
              )}
            </Formik>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default CareReceiverProfileEdit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingBottom: 20,
  },
  topView: {
    backgroundColor: Colors.lightPrimary,
    paddingHorizontal: 20,
  },
  addImageButton: {
    alignSelf: 'center',
  },
  addImage: {
    width: 160,
    height: 160,
    borderRadius: 100,
    borderColor: Colors.white,
    marginBottom: 20,
    borderWidth: 4,
  },
  headerTitleMainView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    alignSelf: 'center',
  },
  headerTitle: {
    // textAlign: 'center',
    paddingVertical: 20,
    fontSize: 18,
    color: Colors.black,
  },
  textInput: {
    borderBottomWidth: 0.5,
    width: 200,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 18,
    marginTop: Platform.OS === 'ios' ? 20 : 10,
    paddingHorizontal: 10,
    paddingBottom: Platform.OS === 'ios' ? 5 : 5,
  },
  line1: {
    borderBottomWidth: 1,
    marginTop: 40,
    borderColor: Colors.darkPrimary,
  },
});
