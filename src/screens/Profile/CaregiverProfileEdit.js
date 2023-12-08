import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomHeader from '../../component/CustomHeader';
import Colors from '../../Theme/Colors';
import TextInputList from '../../component/TextInputList';
import JobDropdown from '../../component/JobDropdown';
import BackButton from '../../component/BackButton';
import {Formik} from 'formik';
import * as Yup from 'yup';
import useRestAPI from '../../api/api';
import ErroMessage from '../../component/ErroMessage';
import {Tooltip} from 'react-native-elements';
import VectorIcon from '../../component/VectorIcon';

const CaregiverProfileEdit = ({navigation}) => {
  const [careProfile, setCareProfile] = useState(null);
  const {getCareGiver, addCareGiver, getCareReceiver} = useRestAPI();
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    let data = await getCareGiver();
    console.log(data);
    if (!data.status) {
      setCareProfile({});
    } else {
      setCareProfile(data[0]);
    }
    console.log('Care Giver:', data);
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
        <ScrollView>
          <View>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <BackButton backPress={() => navigation.goBack(' ')} />
              <Text style={styles.headerTitle}>Caregiver’s profile</Text>
              <Tooltip
                popover={
                  <Text style={{color: Colors.white, fontSize: 18}}>
                    Care Giver is the person who will take care of the Care
                    Receiver
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
          </View>

          {!careProfile ? (
            <ActivityIndicator size="large" color={Colors.black} />
          ) : (
            <Formik
              initialValues={{
                name: careProfile?.cg_name,
                age: careProfile?.cg_age,
                gender: careProfile?.cg_gender,
                relationship: careProfile?.cg_relationship,
              }}
              validationSchema={Yup.object({
                name: Yup.string().required('Name  is required'),
                age: Yup.number()
                  .min('18', 'Age should be greater than 18 ')
                  .required('Age is required'),
                gender: Yup.string().required('Gender is required'),
                relationship: Yup.string().required('Relationship is required'),
              })}
              onSubmit={async values => {
                console.log(values);
                let data = await addCareGiver({values});
                let status = await getCareReceiver();
                if (!status?.status) {
                  navigation.navigate('CareReceiverProfileEdit');
                } else {
                  if (data) {
                    navigation.navigate('CaregiverProfile');
                  }
                }
              }}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                setFieldTouched,
                values,
                touched,
                errors,
                setFieldValue,
              }) => (
                <View>
                  <View>
                    <View>
                      <View style={styles.textInputView}>
                        <TextInputList
                          value={values.name}
                          onChangeText={handleChange('name')}
                          onBlur={() => setFieldTouched('name')}
                          place="Enter name"
                          style={styles.textInput}
                        />
                        <ErroMessage
                          touched={touched.name}
                          errors={errors.name}
                        />

                        <TextInputList
                          value={values.age}
                          onChangeText={handleChange('age')}
                          onBlur={() => setFieldTouched('age')}
                          place="Enter Age"
                          keyboardType="numeric"
                          style={styles.textInput}
                        />
                        <ErroMessage
                          touched={touched.age}
                          errors={errors.age}
                        />
                      </View>
                      <JobDropdown
                        options={[
                          {label: 'Male', value: 'male'},
                          {label: 'Female', value: 'female'},
                        ]}
                        value={values.gender}
                        onBlur={() => setFieldTouched('gender')}
                        name="gender"
                        touched={touched.gender}
                        errors={errors.gender}
                        setFieldValue={setFieldValue}
                        placeholder="Gender"
                      />
                      <JobDropdown
                        options={[
                          {label: 'Family', value: 'family'},
                          {label: 'Friend', value: 'friend'},
                          {label: 'Professional', value: 'professional'},
                          {label: 'Other', value: 'other'},
                        ]}
                        value={values.relationship}
                        onBlur={() => setFieldTouched('relationship')}
                        name="relationship"
                        touched={touched.relationship}
                        errors={errors.relationship}
                        setFieldValue={setFieldValue}
                        placeholder="Relationship"
                      />
                    </View>
                  </View>
                  <TouchableOpacity
                    style={styles.loginButton}
                    onPress={
                      handleSubmit
                      // () => navigation.navigate('CaregiverProfile'))
                    }>
                    <Text style={styles.loginButtonText}>Submit</Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default CaregiverProfileEdit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 30,
  },
  headerTitle: {
    fontSize: 18,
    paddingVertical: 30,
    color: Colors.black,
  },
  forgortText: {
    textAlign: 'right',
    color: Colors.grey,
  },
  loginButton: {
    backgroundColor: Colors.darkPrimary,
    borderRadius: 10,
    marginVertical: 30,
    alignItems: 'center',
    height: 65,
    justifyContent: 'center',
  },
  loginButtonText: {
    color: Colors.white,
    fontSize: 22,
  },
  DontAccountView: {
    marginTop: 40,
  },
  DontAccountText: {
    textAlign: 'center',
    fontSize: 17,
    color: Colors.black,
  },
  registerButton: {
    alignSelf: 'center',
  },
  registerText: {
    textAlign: 'center',
    fontSize: 17,
    color: Colors.darkPrimary,
    paddingTop: 10,
  },
  chackBoxView: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  chackBoxText: {
    paddingLeft: 20,
  },
});
