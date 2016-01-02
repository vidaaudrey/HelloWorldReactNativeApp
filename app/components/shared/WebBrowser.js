import React, {
  Component, View, StyleSheet, WebView, PropTypes
}
from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
    flexDirection: 'column',
  },
})

module.exports = WebBrowser = ({
  url
}) => (
  <View style={styles.container}>
    <WebView url={url} />
  </View>
)


WebBrowser.propTypes = {
  url: PropTypes.string.isRequired
}
