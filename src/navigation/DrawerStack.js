import React, {useContext} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../component/CustomDrawer';
import VectorIcon from '../component/VectorIcon';
import Colors from '../Theme/Colors';
import CareReceiverProfile from '../screens/Profile/CareReceiverProfile';
import FeedBackScreen from '../screens/NonAuthScreens/FeedBackScreen';
import BookmarkCareSheet from '../screens/Bookmark/BookmarkCareSheet';
import BookmarkCareVideo from '../screens/Bookmark/BookmarkCareVideo';
import CaregiverProfile from '../screens/Profile/CaregiverProfile';
import {AuthContext} from '../context/AuthContextProvider';
import CreateAccount from '../screens/AuthScreens/CreateAccount';
import LoginScreen from '../screens/AuthScreens/LoginScreen';
import NonAuthStack from './NonAuthStack';
import SecNonAuthStack from './SecNonAuthStack';
import ForgotPasswordScreen from '../screens/AuthScreens/ForgotPasswordScreen';
import BookmarkCategoriesSheet from '../screens/Bookmark/BookmarkCategoriesSheet';
import AboutCareSheet from '../screens/CareSheet/AboutCareSheet';
import BookmarkCategoriesVideo from '../screens/Bookmark/BookmarkCategoriesVideo';
import HomeScreen from '../screens/NonAuthScreens/HomeScreen';

const Drawer = createDrawerNavigator();
const DrawerStack = () => {
  const {currentUser} = useContext(AuthContext);
  console.log(currentUser);
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerPosition: 'right',
        headerShown: false,
        drawerActiveTintColor: Colors.darkPrimary,
        drawerInactiveTintColor: Colors.black,
        drawerActiveBackgroundColor: Colors.primary,
        drawerLabelStyle: {
          fontSize: 18,
        },
      }}>
      {currentUser ? (
        <>
          <Drawer.Screen
            name="Home2"
            component={NonAuthStack}
            options={{
              drawerIcon: ({focused}) => (
                <VectorIcon
                  family={'AntDesign'}
                  name="home"
                  color={focused ? Colors.darkPrimary : Colors.black}
                  size={26}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="FeedBackScreen"
            component={FeedBackScreen}
            options={{
              drawerIcon: ({focused}) => (
                <VectorIcon
                  family={'AntDesign'}
                  name="home"
                  color={focused ? Colors.darkPrimary : Colors.black}
                  size={26}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="CaregiverProfile"
            component={CaregiverProfile}
            options={{
              drawerIcon: ({focused}) => (
                <VectorIcon
                  family={'MaterialCommunityIcons'}
                  name="google-spreadsheet"
                  color={focused ? Colors.darkPrimary : Colors.black}
                  size={26}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="CareReceiverProfile"
            component={CareReceiverProfile}
            options={{
              drawerIcon: ({focused}) => (
                <VectorIcon
                  family={'Ionicons'}
                  name="ios-clipboard-outline"
                  color={focused ? Colors.darkPrimary : Colors.black}
                  size={26}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="BookmarkCareSheet"
            component={BookmarkCareSheet}
            options={{
              drawerIcon: ({focused}) => (
                <VectorIcon
                  family={'Ionicons'}
                  name="person-outline"
                  color={focused ? Colors.darkPrimary : Colors.black}
                  size={26}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="BookmarkCareVideo"
            component={BookmarkCareVideo}
            options={{
              drawerIcon: ({focused}) => (
                <VectorIcon
                  family={'AntDesign'}
                  name="idcard"
                  color={focused ? Colors.darkPrimary : Colors.black}
                  size={26}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="BookmarkCategoriesSheet"
            component={BookmarkCategoriesSheet}
            options={{
              drawerIcon: ({focused}) => (
                <VectorIcon
                  family={'AntDesign'}
                  name="idcard"
                  color={focused ? Colors.darkPrimary : Colors.black}
                  size={26}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="AboutCareSheet"
            component={AboutCareSheet}
            options={{
              drawerIcon: ({focused}) => (
                <VectorIcon
                  family={'AntDesign'}
                  name="idcard"
                  color={focused ? Colors.darkPrimary : Colors.black}
                  size={26}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="BookmarkCategoriesVideo"
            component={BookmarkCategoriesVideo}
            options={{
              drawerIcon: ({focused}) => (
                <VectorIcon
                  family={'AntDesign'}
                  name="idcard"
                  color={focused ? Colors.darkPrimary : Colors.black}
                  size={26}
                />
              ),
            }}
          />
        </>
      ) : (
        <>
          <Drawer.Screen
            name="Home2"
            component={SecNonAuthStack}
            options={{
              drawerIcon: ({focused}) => (
                <VectorIcon
                  family={'AntDesign'}
                  name="home"
                  color={focused ? Colors.darkPrimary : Colors.black}
                  size={26}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Login"
            component={LoginScreen}
            options={{
              drawerIcon: ({focused}) => (
                <VectorIcon
                  family={'AntDesign'}
                  name="login"
                  color={focused ? Colors.darkPrimary : Colors.black}
                  size={26}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="CreateAccount"
            component={CreateAccount}
            options={{
              drawerIcon: ({focused}) => (
                <VectorIcon
                  family={'AntDesign'}
                  name="profile"
                  color={focused ? Colors.darkPrimary : Colors.black}
                  size={26}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="ForgotPasswordScreen"
            component={ForgotPasswordScreen}
            options={{
              drawerIcon: ({focused}) => (
                <VectorIcon
                  family={'AntDesign'}
                  name="profile"
                  color={focused ? Colors.darkPrimary : Colors.black}
                  size={26}
                />
              ),
            }}
          />
        </>
      )}
    </Drawer.Navigator>
  );
};

export default DrawerStack;
