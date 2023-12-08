import {
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
import VectorIcon from '../../component/VectorIcon';
import useRestAPI from '../../api/api';
import {Tooltip} from 'react-native-elements';
import {Capitalize} from '../../utility/utils';
import Button from '../../component/Button';

const CaregiverProfile = ({navigation}) => {
  const [careProfile, setCareProfile] = useState({});
  const {getCareGiver} = useRestAPI();
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    let data = await getCareGiver();

    setCareProfile(data[0]);
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
        <View style={styles.headerView}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
            }}>
            <BackButton backPress={() => navigation.goBack(' ')} />
            <Text style={styles.headerText}>Caregiver’s profile</Text>
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
          <TouchableOpacity
            onPress={() => navigation.navigate('CaregiverProfileEdit')}>
            <VectorIcon
              family={'AntDesign'}
              name="edit"
              color={Colors.darkGrey}
              size={24}
            />
          </TouchableOpacity>
        </View>
        <View style={{marginVertical: 40}}>
          <TableRow title={'Name'} value={careProfile?.cg_name} />
          <TableRow title={'Age'} value={careProfile?.cg_age} />
          <TableRow
            title={'Gender'}
            value={Capitalize(careProfile?.cg_gender)}
          />
          <TableRow
            title={'Relationship'}
            value={Capitalize(careProfile?.cg_relationship)}
          />
          <Button
            title="Next"
            onPress={() => navigation.navigate('CareReceiverProfile')}
          />
        </View>
      </View>
    </>
  );
};

export default CaregiverProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  headerText: {
    fontSize: 20,
    color: Colors.black,
  },
  profile: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  line: {
    borderLeftWidth: 1,
    height: 20,
  },
  formMainView: {
    display: 'flex',
    flexDirection: 'row',
    gap: 50,
    justifyContent: 'space-evenly',
    width: '80%',
    alignSelf: 'center',
  },
  formkeyView: {
    flex: 1,
  },
  formLine: {
    borderRightWidth: 0.5,
    height: 35,
    borderColor: Colors.grey,
  },
  formValueView: {
    flex: 1,
  },
  formValueText: {
    fontWeight: 'bold',
    color: Colors.black,
  },
  formkeyText: {
    fontSize: 14,
    color: Colors.black,
  },
});

const TableRow = ({title, value}) => {
  return (
    <View style={styles.formMainView}>
      <View style={styles.formkeyView}>
        <Text style={styles.formkeyText}>{title}</Text>
      </View>
      <View style={styles.formLine}></View>
      <View style={styles.formValueView}>
        <Text style={styles.formValueText}>{value}</Text>
      </View>
    </View>
  );
};
