import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplaceScreen from '../screens/AuthScreens/SplaceScreen';
// import NonAuthStack from '../navigation/NonAuthStack';
import DrawerStack from './DrawerStack';

const Stack = createNativeStackNavigator();
const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplaceScreen"
        screenOptions={{
          animation: 'none',
        }}>
        <Stack.Screen
          name="SplaceScreen"
          component={SplaceScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DrawerStack"
          component={DrawerStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
