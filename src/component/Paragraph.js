import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../Theme/Colors';

const Paragraph = props => {
  return (
    <>
      <View style={styles.aboutPremMainView}>
        <Text style={styles.aboutPremTitle}>{props.title}</Text>
        <Text style={styles.aboutPremPeragraph}>{props.paragraph}</Text>
        <Text style={styles.aboutPremPeragraph2}>{props.paragraph2}</Text>
      </View>
    </>
  );
};

export default Paragraph;

const styles = StyleSheet.create({
  aboutPremMainView: {
    marginTop: 40,
    paddingHorizontal: 20,
  },
  aboutPremTitle: {
    color: Colors.darkPrimary,
    fontSize: 25,
    textAlign: 'center',
    paddingBottom: 20,
    fontWeight: '700',
  },
  aboutPremPeragraph: {
    color: Colors.black,
    fontSize: 20,
    textAlign: 'center',
  },
  aboutPremPeragraph2: {
    color: Colors.black,
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 15,
  },
});
