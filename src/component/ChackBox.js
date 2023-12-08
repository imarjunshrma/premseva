import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import {StyleSheet} from 'react-native';

const ChackBox = () => {
  isChecked = false;
  checkBoxChanged = () => {
    alert('changed');
  };

  getCheckedStatus = () => {
    this.isChecked != this.isChecked;
    return this.isChecked;
  };
  return <CheckBox disabled={false} value={true} />;
};

export default ChackBox;

const styles = StyleSheet.create({});
