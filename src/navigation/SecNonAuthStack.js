import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/AuthScreens/LoginScreen';
import CreateAccount from '../screens/AuthScreens/CreateAccount';
import HomeScreen from '../screens/NonAuthScreens/HomeScreen';
import CaregiverProfileEdit from '../screens/Profile/CaregiverProfileEdit';
import CareReceiverProfileEdit from '../screens/Profile/CareReceiverProfileEdit';
import CareReceiverProfile from '../screens/Profile/CareReceiverProfile';
import CareCategoriesSheet from '../screens/CareSheet/CareCategoriesSheet';
import CareCategoriesVideo from '../screens/CareVideo/CareCategoriesVideo';
import QuationsScreen from '../screens/CarePlan/Quations/QuationsScreen';
import BookmarkCategoriesVideo from '../screens/Bookmark/BookmarkCategoriesVideo';
import CaregiverProfile from '../screens/Profile/CaregiverProfile';
import SettingScreen from '../screens/NonAuthScreens/SettingScreen';
import FeedBackScreen from '../screens/NonAuthScreens/FeedBackScreen';

const Stack = createStackNavigator();
const SecNonAuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Setting"
        component={SettingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FeedBackScreen"
        component={FeedBackScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CaregiverProfileEdit"
        component={CaregiverProfileEdit}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CareReceiverProfileEdit"
        component={CareReceiverProfileEdit}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CareReceiverProfile"
        component={CareReceiverProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CareCategoriesSheet"
        component={CareCategoriesSheet}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CareCategoriesVideo"
        component={CareCategoriesVideo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="QuationsScreen"
        component={QuationsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BookmarkCategoriesVideo"
        component={BookmarkCategoriesVideo}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="BookmarkCategoriesSheet"
        component={BookmarkCategoriesSheet}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="CaregiverProfile"
        component={CaregiverProfile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default SecNonAuthStack;
