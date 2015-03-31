'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
  Component
} = React;

var Styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  }
});

class SearchPage extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.description}>
          Search for houses to buy!
        </Text>
        <Text style={Styles.description}>
          Search by place-name, postcode or search near your location.
        </Text>
      </View>
    );
  }
}

module.exports = SearchPage;