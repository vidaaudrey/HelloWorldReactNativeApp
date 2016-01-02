'use strict';

import React, {
  AppRegistry,
  Text,
  View,
  Component,
  NavigatorIOS
}
from 'react-native'


import Main from './app/components/Main'
import styles from './app/theme/styles'

class HelloWorldReactNativeApp extends Component {
  render() {
    return (
      <NavigatorIOS style={ styles.container } initialRoute={{ title: 'Github Notetaker', component: Main}} />
    );
  }
}

AppRegistry.registerComponent('HelloWorldReactNativeApp', () => HelloWorldReactNativeApp);
