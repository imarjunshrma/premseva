import {View, Text} from 'react-native';
import React from 'react';

export default function ErroMessage({touched, errors}) {
  return (
    <View>
      {touched && errors && (
        <Text style={{fontSize: 12, color: '#FF0D10'}}>{errors}</Text>
      )}
    </View>
  );
}
