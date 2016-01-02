var React = require('react-native');
var {
  Component, Text, View, StyleSheet, TextInput, TouchableHighlight, ActivityIndicatorIOS
} = React

var styles = require('../theme/styles')

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
        username: '', 
        isLoading: false,
        error: false 
    }
  }

  handleChange(e){
    this.setState({
        username: e.nativeEvent.text
    })
  }

  handleSubmit(e){
    this.setState({
        isLoading: true
    })
    console.log('submiting', this.state.username)
  }

  render() {
    return (
      <View style={ styles.mainContainer }>
            <Text style={ styles.title }> Search for a github user</Text>
            <TextInput 
                style={ styles.searchInput }
                value={this.state.username}
                onChange={this.handleChange.bind(this)} />
            <TouchableHighlight 
                style={styles.button}
                onPress={this.handleSubmit.bind(this)}
                underlayColor="white" >
                <Text style={styles.buttonText}> Search </Text>
            </TouchableHighlight>
        </View>
    )
  }
}

module.exports = Main
