import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../Theme/Colors';
import VectorIcon from '../component/VectorIcon';

const VideoCategories = (props) => {
  return (
    <TouchableOpacity
      style={styles.cardMainView}
      onPress={props.careSheetPress}>
      <Image source={props.image} />
      <View style={styles.textView}>
        <Text style={styles.text}>{props.title}</Text>
        <VectorIcon
          family={props.iconFamily}
          name={props.iconName}
          color={props.iconColor}
          size={props.iconSize}
        />
      </View>
    </TouchableOpacity>
  );
};

export default VideoCategories;

const styles = StyleSheet.create({
  cardMainView: {
    flexDirection: 'row',
    elevation: 5,
    shadowOffset: {width: -2, height: 4},
    shadowColor: '#171717',
    shadowOpacity: 0.1,
    shadowRadius: 7,
    marginVertical: 14,
  },
  textView: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    flexDirection: 'row',
    backgroundColor: Colors.white,
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
  },
});
