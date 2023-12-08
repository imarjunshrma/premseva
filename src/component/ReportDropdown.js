import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import VectorIcon from './VectorIcon';
import Colors from '../Theme/Colors';

const data = [
  {label: 'Today', value: '1'},
  {label: 'Week', value: '2'},
  {label: 'Month', value: '3'},
];

const ReportDropdown = props => {
  const {selectedValue} = props;
  const [value, setValue] = useState(1);

  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value && (
          <VectorIcon
            family={'Ionicons'}
            name="ios-checkmark"
            color={Colors.black}
            size={20}
          />
        )}
      </View>
    );
  };

  return (
    <Dropdown
      style={styles.dropdown}
      data={data}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Today"
      value={value}
      onChange={item => {
        setValue(item.value);
        selectedValue(item.label);
      }}
      renderItem={renderItem}
    />
  );
};

export default ReportDropdown;

const styles = StyleSheet.create({
  dropdown: {
    width: 100,
    marginTop: 10,
    backgroundColor: Colors.white,
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 7,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    alignSelf: 'flex-end',
  },
  item: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
    color: Colors.black,
  },
  placeholderStyle: {
    fontSize: 16,
    color: Colors.black,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: Colors.black,
  },
});
