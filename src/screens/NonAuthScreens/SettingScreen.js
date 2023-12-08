import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomHeader from '../../component/CustomHeader';
import DrawerDropdown from '../../component/DrawerProfile';

const SettingScreen = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="default" />
      <CustomHeader
        title="PREM SEVA"
        subTitle="Supporting your caregiving"
        logo="ios-menu-outline"
        drawerOnPress={() => navigation.openDrawer('BottomStack')}
      />
      <DrawerDropdown />
    </>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({});
