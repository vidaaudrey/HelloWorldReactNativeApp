import React, {
  Component, Text, View, StyleSheet, TextInput, TouchableHighlight, ActivityIndicatorIOS
}
from 'react-native'
import styles from '../theme/styles'
import apiGithub from '../utils/apiGithub'
import Dashboard from './Dashboard'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      isLoading: false,
      error: false
    }
  }

  handleChange(e) {
    this.setState({
      username: e.nativeEvent.text
    })
  }

  handleSubmit(e) {
    this.setState({
      isLoading: true
    })
    apiGithub.getBio(this.state.username)
      .then((res) => {
        console.log(res);
        if (res.message === 'Not Found') {
          this.setState({
            error: 'User not found',
            isLoading: false
          })
        } else {
          this.props.navigator.push({
            title: res.name || 'select an option',
            component: Dashboard,
            passProps: {
              bio: res
            }
          })
          this.setState({
            isLoading: false,
            error: false,
            username: ''
          })
        }
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

// export default = Main
module.exports = Main
