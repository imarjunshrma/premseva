import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../Theme/Colors';

const SplaceScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('DrawerStack');
  }, 1000);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image source={require('../../images/applogo.png')} style={styles.logo} />
      <Text style={styles.text}>Prem seva</Text>
      <Text style={styles.text2}>Supporting your caregiving</Text>
    </View>
  );
};

export default SplaceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  logo: {
    width: 160,
    height: 160,
  },
  text: {
    fontSize: 25,
    fontWeight: '600',
    color: Colors.black,
  },
  text2: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.black,
  },
});
