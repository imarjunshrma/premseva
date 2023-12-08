import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Colors from '../Theme/Colors';
import {Dropdown} from 'react-native-element-dropdown';

const CareReceiverEditForm = props => {
  return (
    <View style={styles.editFaromMainView}>
      <TableRow
        title={'Allergies'}
        placeholder={'Allergies'}
        values={props.values}
        name="allergies"
        handleChange={props.handleChange}
        setFieldTouched={props.setFieldTouched}
      />
      <TableRow
        title={'Favorite Food'}
        placeholder={'Favorite Food'}
        values={props.values}
        name="favoriteFood"
        handleChange={props.handleChange}
        setFieldTouched={props.setFieldTouched}
      />
      <TableRow
        title={'TV Program'}
        placeholder={'TV Program'}
        values={props.values}
        name="tvProgram"
        handleChange={props.handleChange}
        setFieldTouched={props.setFieldTouched}
      />
      <TableRow
        title={'Hobbies'}
        placeholder={'Hobbies'}
        values={props.values}
        name="hobbies"
        handleChange={props.handleChange}
        setFieldTouched={props.setFieldTouched}
      />

      <TableRowDropdown
        title={'Hearing Aids'}
        placeholder={'Aids'}
        values={props.values}
        name="aids"
        handleChange={props.handleChange}
        setFieldTouched={props.setFieldTouched}
        setFieldValue={props.setFieldValue}
        data={[
          {label: 'Yes', value: 1},
          {label: 'No', value: 0},
        ]}
      />
      <TableRowDropdown
        title={'Spectacles'}
        placeholder={'Spectacles'}
        values={props.values}
        name="spectacles"
        handleChange={props.handleChange}
        setFieldTouched={props.setFieldTouched}
        setFieldValue={props.setFieldValue}
        data={[
          {label: 'Yes', value: 1},
          {label: 'No', value: 0},
        ]}
      />
      <TableRow
        title={'Diagnoses'}
        placeholder={'Diagnoses'}
        values={props.values}
        name="diagnoses"
        handleChange={props.handleChange}
        setFieldTouched={props.setFieldTouched}
      />

      <TableRowDropdown
        title={'Relationship'}
        placeholder={'Relationship'}
        values={props.values}
        name="relationship"
        handleChange={props.handleChange}
        setFieldTouched={props.setFieldTouched}
        setFieldValue={props.setFieldValue}
        data={[
          {label: 'Family', value: 'family'},
          {label: 'Friend', value: 'friend'},
          {label: 'Professional', value: 'professional'},
          {label: 'Other', value: 'other'},
        ]}
      />
    </View>
  );
};

export default CareReceiverEditForm;

const styles = StyleSheet.create({
  editFaromMainView: {
    marginTop: 40,
    backgroundColor: Colors.white,
    flexDirection: 'column',

    paddingVertical: 30,
    marginHorizontal: 20,
    borderRadius: 10,

    shadowOffset: {width: -2, height: 4},
    shadowColor: '#171717',
    shadowOpacity: 0.1,
    shadowRadius: 9,
  },
  tableRowMainView: {
    display: 'flex',
    flexDirection: 'row',
    gap: 50,
    justifyContent: 'space-evenly',
    width: '80%',
    alignSelf: 'center',
  },
  formkeyTextView: {
    flex: 1,
  },
  formkeyText: {
    fontSize: 15,
    color: Colors.darkGrey,
  },
  line: {
    borderRightWidth: 0.5,
    height: 35,
    borderColor: Colors.grey,
  },
  valueView: {
    flex: 1,
  },
  textInput: {
    fontWeight: '600',
    borderBottomWidth: 0.5,
    textAlign: 'center',
    paddingBottom: 5,
  },
  dropdown: {
    width: 100,
    alignSelf: 'flex-end',
  },
});

const TableRow = props => {
  return (
    <View style={styles.tableRowMainView}>
      <View style={styles.formkeyTextView}>
        <Text style={styles.formkeyText}>{props.title}</Text>
      </View>
      <View style={styles.line}></View>
      <View style={styles.valueView}>
        <TextInput
          placeholder={props.placeholder}
          placeholderTextColor={Colors.darkGrey}
          value={props.values?.[props.name]}
          onChangeText={props.handleChange(props.name)}
          onBlur={() => props.setFieldTouched(props.name)}
          style={styles.textInput}
        />
      </View>
    </View>
  );
};

const TableRowDropdown = props => {
  return (
    <View style={styles.tableRowMainView}>
      <View style={styles.formkeyTextView}>
        <Text style={styles.formkeyText}>{props.title}</Text>
      </View>
      <View style={styles.line}></View>
      <View style={styles.valueView}>
        <Dropdown
          dropdownPosition="top"
          itemTextStyle={{color: Colors.black}}
          placeholderStyle={{
            color: Colors.darkGrey,
            paddingLeft: 20,
          }}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          placeholder="select"
          data={props.data}
          maxHeight={400}
          labelField="label"
          valueField="value"
          onChange={item => {
            props.setFieldValue(props.name, item.value);
          }}
          placeholderTextColor={Colors.darkGrey}
          value={props.values?.[props.name]}
          onBlur={() => props.setFieldTouched(props.name)}
          style={[styles.textInput, styles.dropdown]}
        />
      </View>
    </View>
  );
};
