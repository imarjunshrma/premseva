import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Colors from '../Theme/Colors';

const DropdownComponent = ({
  value,
  onBlur,
  options,
  touched,
  errors,
  name,
  setFieldValue,
  placeholder,
}) => {
  return (
    <View>
      <Dropdown
        style={styles.dropdown}
        itemTextStyle={{color: Colors.black}}
        placeholderStyle={styles.placeholderStyle}
        placeholder={placeholder}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        data={options}
        maxHeight={300}
        labelField="label"
        valueField="value"
        value={value}
        onBlur={onBlur}
        onChange={item => {
          setFieldValue(name, item.value);
        }}
      />
      {touched && errors && (
        <Text style={{fontSize: 12, color: '#FF0D10'}}>{errors}</Text>
      )}
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.black,
    paddingHorizontal: 20,
    paddingVertical: Platform.OS === 'ios' ? 8 : 7,
    marginBottom: Platform.OS === 'ios' ? 25 : 20,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
    color: Colors.darkGrey,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: Colors.black,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
