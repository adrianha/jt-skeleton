import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from 'components/Button';

class LogIn extends Component {
  back = () => {
    this.props.navigation.goBack(null);
  };

  render() {
    return (
      <View>
        <Text>Log In</Text>
        <Button title="Go Back" onPress={this.back} />
      </View>
    );
  }
}

export default LogIn;
