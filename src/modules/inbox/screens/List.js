import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { colors } from 'themes';

class List extends Component {
  static navigationOptions = {
    title: 'Inbox',
    headerStyle: { backgroundColor: colors.tomato },
    headerTintColor: colors.white,
    tabBarLabel: 'Inbox'
  };

  render() {
    return (
      <View>
        <Text>Inbox List</Text>
      </View>
    );
  }
}

export default List;
