import {Text, View} from 'react-native';
import React from 'react';

export default function (props) {
  return (
    <View
      style={{
        borderColor: props.text == 'SIGN IN' ? 'green' : '#616161',
        backgroundColor: props.text == 'SIGN IN' ? 'green' : '616161',
        borderWidth: 2,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
      }}>
      <Text
        style={{
          color: props.text == 'SIGN IN' ? '#EDF2FF' : '616161',
          fontWeight: '600',
          paddingVertical: 10,
        }}>
        {props.text}
      </Text>
    </View>
  );
}
