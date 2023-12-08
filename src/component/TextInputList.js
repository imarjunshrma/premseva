import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Colors from '../Theme/Colors';
import VectorIcon from './VectorIcon';

const TextInputList = props => {
  const {value, onChangeText} = props;
  return (
    <View style={styles.textInputView}>
      <TextInput
        placeholder={props.place}
        style={styles.textInput}
        value={value}
        onChangeText={i => onChangeText(i)}
        placeholderTextColor={Colors.darkGrey}
        keyboardType={props.keyboardType}
      />
      <TouchableOpacity>
        <VectorIcon
          family={props.iconType}
          name={props.iconName}
          color={props.iconColor}
          size={props.iconSize}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TextInputList;

const styles = StyleSheet.create({
  textInputView: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.black,
    marginBottom: Platform.OS === 'ios' ? 25 : 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    paddingVertical: Platform.OS === 'ios' ? 15 : 7,
    paddingHorizontal: 20,
    color: Colors.black,
    fontSize: 16,
  },
  icon: {
    paddingRight: 10,
  },
});
