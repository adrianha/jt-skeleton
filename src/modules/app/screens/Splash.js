import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { colors } from 'themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lime
  }
});

class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      const landingAction = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Landing' })]
      });

      this.props.navigation.dispatch(landingAction);
    }, 500);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Splash</Text>
      </View>
    );
  }
}

export default Splash;
