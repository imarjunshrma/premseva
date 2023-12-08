import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Colors from '../Theme/Colors';

const DATA = [
  {
    id: '1',
    date: '02/05/2023',
    job: 'Job Title-A',
    time: '09:00 AM-02:00 PM',
    totalHours: '7 Hours',
  },
];
const Table = () => {
  return (
    <View>
      <Image source={require('../images/screen.png')} style={styles.screen} />
    </View>
  );
};

export default Table;

const styles = StyleSheet.create({
  tableHeaderTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginBottom: 25,
  },
  headerTitle: {
    color: Colors.black,
  },
  line: {
    borderWidth: 1,
    borderColor: Colors.black,
  },
  tableMainView: {
    flexDirection: 'row',
    marginTop: 5,
    width: '100%',
  },
  sevenHoursView: {
    backgroundColor: Colors.black,
    justifyContent: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    marginLeft: 40,
  },
  sevenHoursText: {
    color: Colors.white,
    paddingHorizontal: 5,
    paddingVertical: 3,
  },
  screen: {
    width: '100%',
    height: 230,
  },
  bottomTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomText: {
    paddingTop: 20,
    color: Colors.black,
  },
  text: {
    color: Colors.black,
    paddingLeft: 5,
    fontSize: 12,
  },
  text2: {
    color: Colors.black,
    paddingLeft: 10,
    fontSize: 12,
  },
  text3: {
    color: Colors.black,
    paddingLeft: 10,
    fontSize: 12,
  },
});
