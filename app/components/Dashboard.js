import React, {
  Component, Text, View, StyleSheet, TextInput, TouchableHighlight, ActivityIndicatorIOS
}

from 'react-native'
import styles from '../theme/styles'

class Dashboard extends Component {
  render() {
    return (
      <View style={ styles.mainContainer }>
           <Text>Dashboard, {this.props.bio.login}</Text>      
        </View>
    )
  }
}
module.exports = Dashboard
