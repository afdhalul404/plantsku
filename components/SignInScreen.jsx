import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import Input from './Input';
import Button from './Button';

export default function SignInScreen(props) {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

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
              <Input placeholder={'Email'} />
            </View>
            <View style={{marginBottom: 20}}>
              <Input placeholder={'Password'} />
            </View>
            <TouchableOpacity
              // onPress={() =>
              //   (email == 'saya') & (password == 'saya')
              //     ? props.navigation.navigate('BerandaScreen')
              //     : alert('cobalagi')}
              onPress={() => props.navigation.navigate('BerandaScreen')}>
              <Button text={'SIGN IN'} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginTop: 25,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity>
                <Text>
                  Belum punya akun?{' '}
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate('SignUpScreen')}>
                    <Text>Buat akun</Text>
                  </TouchableOpacity>
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
