import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { colors } from 'themes';

class Profile extends Component {
  static navigationOptions = {
    title: 'Profile',
    headerStyle: { backgroundColor: colors.tomato },
    headerTintColor: colors.white,
    tabBarLabel: 'Profile'
  };

  render() {
    return (
      <View>
        <Text>Profile</Text>
      </View>
    );
  }
}

export default Profile;
