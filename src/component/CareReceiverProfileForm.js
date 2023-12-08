import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../Theme/Colors';
import {Capitalize} from '../utility/utils';

const CareReceiverProfileForm = ({careReciverProfile}) => {
  return (
    <View style={styles.editFaromMainView}>
      <View>
        <TableRow
          title={'Allergies'}
          value={careReciverProfile?.cr_allergies}
        />
        <TableRow
          title={'Favourite food'}
          value={careReciverProfile?.cr_favFood}
        />
        <TableRow title={'TV program'} value={careReciverProfile?.cr_favTV} />
        <TableRow title={'Hobbies'} value={careReciverProfile?.cr_hobbies} />
        <TableRow
          title={'Hearing Aids'}
          value={careReciverProfile?.cr_hearing}
        />
        <TableRow
          title={'Spectacles'}
          value={careReciverProfile?.cr_spectacles}
        />
        <TableRow
          title={'Diagnoses'}
          value={careReciverProfile?.cr_diagnoses}
        />
        <TableRow
          title={'Relationship'}
          value={Capitalize(careReciverProfile?.cr_relationship)}
        />
      </View>
    </View>
  );
};

export default CareReceiverProfileForm;

const styles = StyleSheet.create({
  editFaromMainView: {
    marginTop: 40,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 30,
    borderRadius: 10,

    shadowOffset: {width: -2, height: 4},
    shadowColor: '#171717',
    shadowOpacity: 0.1,
    shadowRadius: 9,
    marginHorizontal: 20,
  },
  text: {
    color: Colors.black,
    fontSize: 16,
    paddingTop: 23,
  },
  text1: {
    color: Colors.black,
    fontSize: 16,
    paddingTop: 23,
    width: 100,
  },
  text2: {
    color: Colors.black,
    fontSize: 16,
    paddingVertical: 30,
    width: 100,
  },
  line2: {
    borderColor: Colors.darkGrey,
    borderLeftWidth: 0.5,
    height: 500,
  },
  detels: {
    fontSize: 15,
    paddingHorizontal: 5,
    marginLeft: 10,
    paddingBottom: 4,
    paddingVertical: 23,
    color: Colors.black,
  },
  detels1: {
    fontSize: 15,
    paddingHorizontal: 5,
    marginLeft: 10,
    paddingBottom: 4,
    paddingVertical: 40,
    color: Colors.black,
  },
  detels2: {
    fontSize: 15,
    paddingHorizontal: 5,
    marginLeft: 10,
    paddingBottom: 4,
    paddingVertical: 20,
    color: Colors.black,
  },
  formView: {
    display: 'flex',
    flexDirection: 'row',
    gap: 50,
    justifyContent: 'space-evenly',
    width: '80%',
    alignSelf: 'center',
  },
  formKeyView: {
    width: 100,
  },
  formKeyText: {
    fontSize: 16,
    paddingVertical: 5,
  },
  formlineView: {
    borderRightWidth: 0.5,
    height: 35,
    borderColor: Colors.grey,
  },
  formValueView: {
    width: 100,
  },
  formValueText: {
    fontWeight: 'bold',
  },
});

const TableRow = ({title, value}) => {
  return (
    <View style={styles.formView}>
      <View style={styles.formKeyView}>
        <Text style={styles.formKeyText}>{title}</Text>
      </View>
      <View style={styles.formlineView}></View>
      <View style={styles.formValueView}>
        <Text style={styles.formValueText}>{value}</Text>
      </View>
    </View>
  );
};
