import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import Input from './Input';
import Button from './Button';

export default function SignInScreen(props) {
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  return (
    <ImageBackground
      source={require('./src/background.jpg')}
      style={{
        height: 999,
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
        <View style={{marginTop: 30, alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: '#00B528',
            }}>
            SIGN IN
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            flex: 1,
          }}>
          <View
            style={{
              marginTop: 50,
              width: '80%',
              height: '35%',
            }}>
            <View style={{marginBottom: 20}}>
              <Input placeholder={'Email'} value={() => setPassword1()} />
            </View>
            <View style={{marginBottom: 20}}>
              <Input placeholder={'Password'} />
            </View>
            <View style={{marginBottom: 20}}>
              <Input
                placeholder={'Konfirmasi Password'}
                value={() => setPassword2()}
              />
            </View>
            <TouchableOpacity
              onPress={() =>
                password1 == password2
                  ? props.navigation.navigate('BerandaScreen')
                  : alert('Masukan Email & Password yang valid')
              }>
              <Button text={'SIGN UP'} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginTop: 25,
                justifyContent: 'center',
                alignItems: 'center',
              }}></TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
