import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import React from 'react';
import Button from './Button';

const WelcomeScreen = props => {
  return (
    <ImageBackground
      source={require('./src/background.jpg')}
      style={{
        width: '100%',
        heigh: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          flex: 1,
          marginTop: '50%',
          width: '100%',
          height: '100%',
          backgroundColor: '#EDF2FF',
          borderTopLeftRadius: 120,
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              marginBottom: 30,
              width: '80%',
            }}>
            <Text
              style={{
                fontSize: 45,
                fontWeight: '400',
              }}>
              HALLO!
            </Text>
            <Text
              style={{
                fontSize: 15,
                letterSpacing: 2,
              }}>
              Selamat datang di Plantsku
            </Text>
            <Text
              style={{
                fontSize: 15,
                letterSpacing: 1.5,
              }}>
              aplikasi jual beli tanaman hias
            </Text>
            <View
              style={{
                marginTop: 20,
              }}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('SignInScreen')}
                style={{
                  marginBottom: 20,
                }}>
                <Button text={'SIGN IN'} border={'#616161'} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('SignUpScreen')}>
                <Button text={'SIGN UP'} border={''} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;
