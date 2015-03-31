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
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'stretch',
    marginTop: 5
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  },
  image: {
    width: 217,
    height: 138
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
        <View style={Styles.flowRight}>
          <TextInput
            style={Styles.searchInput}
            placeholder='Search via name or postcode'/>
          <TouchableHighlight style={Styles.button}
              underlayColor='#99d9f4'>
            <Text style={Styles.buttonText}>Go</Text>
          </TouchableHighlight>
        </View>
        <TouchableHighlight style={Styles.button}
            underlayColor='#99d9f4'>
          <Text style={Styles.buttonText}>Location</Text>
        </TouchableHighlight>
        <Image source={require('image!house')} style={Styles.image} />
      </View>
    );
  }
}

module.exports = SearchPage;