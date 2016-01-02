import React, {
  Component, Text, Image, View, StyleSheet, TextInput, TouchableHighlight, ActivityIndicatorIOS
}
from 'react-native'
import Profile from './Profile'
import apiGithub from '../utils/apiGithub'
import apiFirebase from '../utils/apiFirebase'
import Repos from './Repos'
import Notes from './Notes'

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
})

class Dashboard extends Component {
  makeBackground(btn) {
    var obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    }
    if (btn === 0) {
      obj.backgroundColor = '#48BBEC';
    } else if (btn === 1) {
      obj.backgroundColor = '#E77AAE';
    } else {
      obj.backgroundColor = '#758BF4';
    }
    return obj;
  }
  goToProfile() {
    this.props.navigator.push({
      component: Profile,
      title: 'Profile Page',
      passProps: {
        bio: this.props.bio
      }
    })
  }
  goToRepos() {
    console.log('Going to Repos');
    apiGithub.getRepos(this.props.bio.login)
      .then((res) => {
        this.props.navigator.push({
          component: Repos,
          title: 'Repos Page',
          passProps: {
            bio: this.props.bio,
            repos: res
          }
        });
      });
  }

  goToNotes() {
    console.log('Going to Notes');
    apiFirebase.getNotes(this.props.bio.login)
      .then((data) => {
        const notes = data || {}
        this.props.navigator.push({
          component: Notes,
          title: `Notes for ${this.props.bio.login}`,
          passProps: {
            bio: this.props.bio,
            notes: notes
          }
        })
      })
  }
  render() {
    return (
      <View style={styles.container}>
          <Image source={{uri: this.props.bio.avatar_url}} style={styles.image}/>
          <TouchableHighlight
              style={this.makeBackground(0)}
              onPress={this.goToProfile.bind(this)}
              underlayColor="#88D4F5">
                <Text style={styles.buttonText}>View Profile</Text>
          </TouchableHighlight>
          <TouchableHighlight
              style={this.makeBackground(1)}
              onPress={this.goToRepos.bind(this)}
              underlayColor="#E39EBF">
                <Text style={styles.buttonText}>View Repositories</Text>
          </TouchableHighlight>
          <TouchableHighlight
              style={this.makeBackground(2)}
              onPress={this.goToNotes.bind(this)}
              underlayColor="#9BAAF3">
                <Text style={styles.buttonText}>Take Notes</Text>
          </TouchableHighlight>
        </View>
    )
  }
}
module.exports = Dashboard
