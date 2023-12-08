import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomHeader from '../../component/CustomHeader';
import Colors from '../../Theme/Colors';
import BackButton from '../../component/BackButton';
import Button from '../../component/Button';
import CareReceiverProfileForm from '../../component/CareReceiverProfileForm';
import VectorIcon from '../../component/VectorIcon';
import useRestAPI from '../../api/api';
import {Tooltip} from 'react-native-elements';
import {Capitalize} from '../../utility/utils';

const CareReceiverProfile = ({navigation}) => {
  const [careReciverProfile, setCareReciverProfile] = useState({});
  const {getCareReceiver} = useRestAPI();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let data = await getCareReceiver();
    setCareReciverProfile(data[0]);
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
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.topView}>
            <View style={styles.topIconView}>
              <BackButton backPress={() => navigation.goBack(' ')} />
              <TouchableOpacity
                onPress={() => navigation.navigate('CareReceiverProfileEdit')}>
                <VectorIcon
                  family={'Feather'}
                  name="edit"
                  color={Colors.black}
                  size={20}
                  style={{paddingTop: 20}}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.addImageButton}>
              <Image
                source={{
                  uri: `http://54.177.16.157:3030/${careReciverProfile?.image}`,
                }}
                style={styles.addImage}
              />
            </TouchableOpacity>
          </View>
          <View>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <Text style={styles.headerTitle}>Care receiver’s profile</Text>
              <TouchableOpacity style={{alignSelf: 'center'}}>
                <Tooltip
                  popover={
                    <Text style={{color: Colors.white, fontSize: 18}}>
                      Care receiver’s is the person who will recive care form
                      Care giver.
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
              </TouchableOpacity>
            </View>
            <Text style={styles.useName}>
              {careReciverProfile?.cr_name} ({careReciverProfile?.cr_nicname})
            </Text>
            <Text style={styles.useMiniDedale}>
              {careReciverProfile?.cr_age} Years old • {''}
              {Capitalize(careReciverProfile?.cr_gender)}
            </Text>
          </View>
          <View style={styles.line1}></View>
          <CareReceiverProfileForm careReciverProfile={careReciverProfile} />
          <Button
            title="Go to Care Plan"
            onPress={() => navigation.navigate('Care Plan')}
          />
        </ScrollView>
      </View>
    </>
  );
};

export default CareReceiverProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingBottom: 20,
  },
  topIconView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  headerTitle: {
    textAlign: 'center',
    paddingVertical: 20,
    fontSize: 18,
    color: Colors.black,
    paddingRight: 5,
  },
  useName: {
    fontSize: 23,
    textAlign: 'center',
    paddingTop: 15,
    color: Colors.black,
    fontWeight: '500',
  },
  useMiniDedale: {
    textAlign: 'center',
    fontSize: 16,
    paddingTop: 6,
    color: Colors.darkGrey,
  },
  line1: {
    borderBottomWidth: 1,
    marginTop: 40,
    borderColor: Colors.darkPrimary,
  },
});
