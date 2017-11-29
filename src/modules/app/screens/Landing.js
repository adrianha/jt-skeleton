import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Button from 'components/Button';
import { metrics } from 'themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: metrics.baseMargin
  },
  title: {
    marginBottom: metrics.baseMargin
  },
  buttonContainer: {
    marginBottom: metrics.baseMargin
  }
});

class Landing extends Component {
  logIn = () => {
    this.props.navigation.navigate('LogIn');
  };

  signUp = () => {
    this.props.navigation.navigate('SignUp');
  };

  main = () => {
    const mainAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Main' })]
    });

    this.props.navigation.dispatch(mainAction);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Landing</Text>
        <View style={styles.buttonContainer}>
          <Button title="Go to Log In" onPress={this.logIn} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Go to Sign Up" onPress={this.signUp} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Go to Main Navigation" onPress={this.main} />
        </View>
      </View>
    );
  }
}

export default Landing;
