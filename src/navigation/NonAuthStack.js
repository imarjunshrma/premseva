import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CareReceiverProfile from '../screens/Profile/CareReceiverProfile';
import CareCategoriesSheet from '../screens/CareSheet/CareCategoriesSheet';
import CareCategoriesVideo from '../screens/CareVideo/CareCategoriesVideo';
import QuationsScreen from '../screens/CarePlan/Quations/QuationsScreen';
import BookmarkCategoriesVideo from '../screens/Bookmark/BookmarkCategoriesVideo';
import CaregiverProfileEdit from '../screens/Profile/CaregiverProfileEdit';
import CareReceiverProfileEdit from '../screens/Profile/CareReceiverProfileEdit';
import CaregiverProfile from '../screens/Profile/CaregiverProfile';
import BottomStack from './BottomStack';
import FeedBackScreen from '../screens/NonAuthScreens/FeedBackScreen';
import BookmarkCareSheet from '../screens/Bookmark/BookmarkCareSheet';
import BookmarkCareVideo from '../screens/Bookmark/BookmarkCareVideo';
import ForgotPasswordScreen from '../screens/AuthScreens/ForgotPasswordScreen';

const Stack = createStackNavigator();
const NonAuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="BottomStack">
      <Stack.Screen
        name="BottomStack"
        component={BottomStack}
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
      <Stack.Screen
        name="CaregiverProfile"
        component={CaregiverProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FeedBackScreen"
        component={FeedBackScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BookmarkCareSheet"
        component={BookmarkCareSheet}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BookmarkCareVideo"
        component={BookmarkCareVideo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default NonAuthStack;
