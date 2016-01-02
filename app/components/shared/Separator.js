import React, {
  Component, View, StyleSheet
}
from 'react-native'

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#E4E4E4',
    flex: 1,
    marginLeft: 15
  },
});


module.exports = () => (
  <View style={styles.separator} />
)



// class Separator extends React.Component {
//   render() {
//     return (
//       <View style={styles.separator} />
//     );
//   }
// };
