import {View, Image} from 'react-native';
import React, {Component} from 'react';

import {StackActions} from '@react-navigation/native';

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(StackActions.replace('WelcomeScreen'));
    }, 3000);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#EDF2FF',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={require('./src/logo.png')} />
      </View>
    );
  }
}
