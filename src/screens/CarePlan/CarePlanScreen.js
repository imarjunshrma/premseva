import React, {useContext, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomHeader from '../../component/CustomHeader';
import Colors from '../../Theme/Colors';
import BackButton from '../../component/BackButton';
import VectorIcon from '../../component/VectorIcon';
import PlansCard from '../../component/PlansCard';
import useRestAPI from '../../api/api';
import {AuthContext} from '../../context/AuthContextProvider';
import {Capitalize} from '../../utility/utils';
import {useIsFocused} from '@react-navigation/native';

const CarePlanScreen = ({navigation}) => {
  const {getCarePlanQuestions, sendPrintMail, getCareReceiver} = useRestAPI();
  const isFocus = useIsFocused();
  const {currentUser} = useContext(AuthContext);
  const [carePlans, setCarePlans] = useState({});
  const [care, getCare] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [TableData, setTableData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getCarePlanQuestions();
      let status = data?.error ? false : true;
      console.log(status);

      if (status) {
        const filter = Object.keys(data).filter(value => data[value] !== null);
        console.log(filter);
        setCarePlans(data);
        setTableData(filter);
        setLoading(true);
      }
      const value = await getCareReceiver();
      if (value?.status) {
        console.log(value[0]);
        getCare(value[0]);
        setLoading(false);
      } else {
        console.log(data.error);
        setLoading(false);
      }
    };

    getData();
  }, [currentUser, isFocus]);

  const filteredCarePlans = Object.keys(carePlans)
    .filter(value => carePlans[value] !== null)
    .map((value, index) => (
      <>
        <PlansCard
          key={index}
          CarePlans={carePlans}
          que={value}
          value={value}
          navigation={navigation}
        />
      </>
    ));
  if (isLoading) {
    return <ActivityIndicator size="large" color={Colors.black} />;
  }

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
          <>
            <View style={styles.topView}>
              <BackButton backPress={() => navigation.navigate('Home')} />
              <Text style={styles.headerUseName}> {care?.cr_name}</Text>
            </View>
            <View style={styles.profileImageView}>
              <Image
                source={{
                  uri: `http://54.177.16.157:3030/${care?.image}`,
                }}
                style={styles.profileImage}
              />
              <Text style={styles.headerUseAge}>
                {care?.cr_age} Years old • {Capitalize(care?.cr_gender)}
              </Text>
            </View>
            <View style={styles.headerCareplanView}>
              <Text style={styles.carePlanText}>Care Plan</Text>
              <View style={styles.carePlanIcon}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('QuationsScreen')}>
                  <VectorIcon
                    family={'Feather'}
                    name="edit-3"
                    color={Colors.darkGrey}
                    size={23}
                    style={styles.icon}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    sendPrintMail();
                  }}>
                  <VectorIcon
                    family={'Ionicons'}
                    name="print"
                    color={Colors.darkGrey}
                    size={23}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </>

          {Object.keys(carePlans).filter(
            value => carePlans[value] !== null,
          )[1] !== 'status' ? (
            filteredCarePlans
          ) : (
            <>
              <div>Care Plan Does not exist</div>
            </>
          )}
        </ScrollView>
      </View>
    </>
  );
};

export default CarePlanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  topView: {
    backgroundColor: Colors.lightPrimary,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  headerUseName: {
    fontSize: 22,
    textAlign: 'right',
    paddingTop: 70,
    paddingBottom: 10,
    fontWeight: 'bold',
    color: Colors.black,
  },
  profileImage: {
    width: 130,
    height: 130,
    marginTop: -60,
    marginRight: 50,
    borderRadius: 999,
    borderWidth: 4,
    borderColor: Colors.white,
  },
  profileImageView: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  headerUseAge: {
    fontSize: 16,
    paddingTop: 5,
    textAlign: 'center',
    color: Colors.black,
  },
  headerCareplanView: {
    flexDirection: 'row',
    paddingTop: 20,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 35,
  },
  carePlanText: {
    fontSize: 21,
    color: Colors.black,
    fontWeight: '600',
  },
  carePlanIcon: {
    flexDirection: 'row',
  },
  icon: {
    paddingRight: 20,
  },
});
