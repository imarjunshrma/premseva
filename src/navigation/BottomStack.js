import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import VectorIcon from '../component/VectorIcon';
import Colors from '../Theme/Colors';
import HomeScreen from '../screens/NonAuthScreens/HomeScreen';
import CareSheetsScreen from '../screens/CareSheet/CareSheetsScreen';
import CareVideoScreen from '../screens/CareVideo/CareVideoScreen';
import CarePlanScreen from '../screens/CarePlan/CarePlanScreen';
import {AuthContext} from '../context/AuthContextProvider';
import DeviceInfo from 'react-native-device-info';
import {Image, Platform} from 'react-native';

const Tab = createBottomTabNavigator();
const BottomStack = () => {
  const {currentUser} = useContext(AuthContext);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#0566B1',
          height: 55 + (Platform.OS == 'ios' && DeviceInfo.hasNotch() ? 34 : 5),
        },
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.white,
        tabBarLabelStyle: {
          fontSize: 14,
          paddingBottom: 5,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, size}) => {
            return <Image source={require('../images/home.png')} />;
          },
        }}
      />
      <Tab.Screen
        name="Care Sheets"
        component={CareSheetsScreen}
        options={{
          tabBarIcon: ({focused, size}) => {
            return <Image source={require('../images/sheet.png')} />;
          },
        }}
      />
      <Tab.Screen
        name="Care Videos"
        component={CareVideoScreen}
        options={{
          tabBarIcon: ({focused, size}) => {
            return (
              <VectorIcon
                family={'Ionicons'}
                name="play-outline"
                color={focused ? Colors.primary : Colors.white}
                size={size}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Care Plan"
        component={CarePlanScreen}
        options={{
          tabBarIcon: ({focused, size}) => {
            return <Image source={require('../images/user.png')} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomStack;
