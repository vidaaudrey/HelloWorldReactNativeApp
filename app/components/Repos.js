import React, {
  Component, Text, Image, View, StyleSheet, ScrollView, TouchableHighlight
}
from 'react-native'
import Badge from './Badge'
import Separator from './shared/Separator'
import WebBrowser from './shared/WebBrowser'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'column',
    flex: 1,
    padding: 10
  },
  name: {
    color: '#48BBEC',
    fontSize: 18,
    paddingBottom: 5
  },
  stars: {
    color: '#48BBEC',
    fontSize: 14,
    paddingBottom: 5
  },
  description: {
    fontSize: 14,
    paddingBottom: 5
  }
});


class Repos extends React.Component {
  openPage(name, url) {
    console.log('Going to webbrowser', url);
    this.props.navigator.push({
      component: WebBrowser,
      title: name,
      passProps: {
        url: url
      }
    })
  }

  render() {
    const repos = this.props.repos;
    console.log('repos', this.props.repos);

    const list = repos.map((item, index) => {
      const desc = repos[index].description ? <Text style={styles.description}> {repos[index].description} </Text> : <View />;
      return (
        <View key={index}>
          <View style={styles.rowContainer}>
            <TouchableHighlight
              onPress={this.openPage.bind(this, repos[index].name, repos[index].html_url)}
              underlayColor='transparent'>
              <Text style={styles.name}>{repos[index].name}</Text>
            </TouchableHighlight>
            <Text style={styles.stars}> Stars: {repos[index].stargazers_count} </Text>
            {desc}
          </View>
          <Separator />
        </View>
      )
    });
    return (
      <ScrollView style={styles.container}>
        <Badge bio={this.props.bio} />
        {list}
      </ScrollView>
    )
  }
};

Repos.propTypes = {
  bio: React.PropTypes.object.isRequired,
  repos: React.PropTypes.array.isRequired
}

module.exports = Repos;
