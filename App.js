import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Navigation from 'Navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Navigation />
      </View>
    );
  }
}
