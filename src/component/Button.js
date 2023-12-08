import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Colors from '../Theme/Colors';

const Button = props => {
  return (
    <TouchableOpacity style={styles.loginButton} onPress={props.onPress}>
      <Text style={styles.loginButtonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: Colors.darkPrimary,
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 40,
  },
  loginButtonText: {
    color: Colors.white,
    paddingVertical: 20,
    paddingHorizontal: 80,
    fontSize: 20,
  },
});
