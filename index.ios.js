/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Styles = React.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  }
});

class PropertyFinderApp extends React.Component {
  render() {
    return <React.Text style={Styles.text}>Hello World!</React.Text>;
  }
}

React.AppRegistry.registerComponent('PropertyFinderApp', function(){return PropertyFinderApp});
