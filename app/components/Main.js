var React = require('react-native');
var {
  Component, Text, View, StyleSheet
} = React

var styles = require('../theme/styles')

class Main extends Component {
  render() {
    return (
        <View style={ styles.mainContainer }>
            <Text>Hello, this is the main page </Text>
        </View>
    )
  }
}

module.exports = Main
