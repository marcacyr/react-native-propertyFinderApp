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

function urlForQueryAndPage(key, value, pageNumber) {
  var data = {
    country: 'uk',
    pretty: '1',
    encoding: 'json',
    listing_type: 'buy',
    action: 'search_listings',
    page: pageNumber
  };
  data[key] = value;

  var queryString = Object.keys(data)
    .map(key => key + '=' + encodeURIComponent(data[key]))
    .join('&');

  return 'http://api.nestoria.co.uk/api?' + queryString;
}

class SearchPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchString: 'london',
      isLoading: false
    };
  }
  onSearchTextChanged(event) {
    console.log('onSearchTextChanged');
    this.setState({
      searchString: event.nativeEvent.text
    });
    console.log(this.state.searchString);
  }
  _executeQuery(query) {
    console.log(query);
    this.setState({ isLoading: true });
  }
  onSearchPressed() {
    var query = urlForQueryAndPage('place_name', this.state.searchString, 1);
    this._executeQuery(query);
  }
  render() {
    var spinner = this.state.isLoading ? (<ActivityIndicatorIOS hidden='true' size='large' />) : (<View/>);
    console.log('SearchPage.render');
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
            value={this.state.searchString}
            onChange={this.onSearchTextChanged.bind(this)}
            placeholder='Search via name or postcode'/>
          <TouchableHighlight style={Styles.button}
              underlayColor='#99d9f4'
              onPress={this.onSearchPressed.bind(this)}>
            <Text style={Styles.buttonText}>Go</Text>
          </TouchableHighlight>
        </View>
        <TouchableHighlight style={Styles.button}
            underlayColor='#99d9f4'>
          <Text style={Styles.buttonText}>Location</Text>
        </TouchableHighlight>
        <Image source={require('image!house')} style={Styles.image} />
        {spinner}
      </View>
    );
  }
}

module.exports = SearchPage;