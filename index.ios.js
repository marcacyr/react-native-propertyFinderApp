/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var SearchPage = require('./SearchPage');
var Styles = React.StyleSheet.create({
  container: {
    flex: 1
  }
});

class PropertyFinderApp extends React.Component {
  render() {
    return (
      <React.NavigatorIOS
        style={Styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }} />
    );
  }
}

React.AppRegistry.registerComponent('PropertyFinderApp', function(){return PropertyFinderApp});