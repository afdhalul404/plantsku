import {TextInput, View, Text} from 'react-native';
import React from 'react';

const Input = props => {
  return (
    <View>
      <TextInput
        placeholder={props.placeholder}
        value={props.value}
        style={{
          borderWidth: 2,
          height: 45,
          borderRadius: 50,
          borderColor: '#616161',
          color: 'black',
          paddingHorizontal: 20,
        }}></TextInput>
    </View>
  );
};

export default Input;
