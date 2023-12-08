import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import VectorIcon from './VectorIcon';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const BackButton = props => {
  return (
    <TouchableOpacity style={styles.backButton} onPress={props.backPress}>
      <VectorIcon
        family={'Ionicons'}
        name="arrow-back"
        color={Colors.darkGrey}
        size={28}
      />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
  },
  backText: {
    color: Colors.black,
    fontSize: 17,
  },
});
