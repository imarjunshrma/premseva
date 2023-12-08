import {KeyboardAvoidingView, StatusBar, StyleSheet, Text} from 'react-native';
import React from 'react';
import CustomHeader from '../../component/CustomHeader';
import Colors from '../../Theme/Colors';
import {ScrollView} from 'react-native-gesture-handler';
import FeedBackTExtInput from '../../component/FeedBackTExtInput';

const FeedBackScreen = ({navigation}) => {
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.headerText}>Feed Back Form</Text>
          <FeedBackTExtInput />
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default FeedBackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 22,
    paddingVertical: 30,
    color: Colors.black,
  },
  loginButton: {
    backgroundColor: Colors.darkPrimary,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 40,
  },
  loginButtonText: {
    color: Colors.white,
    paddingVertical: 20,
    fontSize: 20,
    textAlign: 'center',
  },
});
