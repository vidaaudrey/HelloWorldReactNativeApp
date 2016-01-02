/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Text,
  View,
  Component,
  NavigatorIOS
} = React;

var Main = require('./app/components/Main')
var styles = require('./app/theme/styles')

class HelloWorldReactNativeApp extends Component {
  render() {
    return (
      <NavigatorIOS style={ styles.container } initialRoute={{ title: 'Github Notetaker', component: Main}} />
    );
  }
}

AppRegistry.registerComponent('HelloWorldReactNativeApp', () => HelloWorldReactNativeApp);
