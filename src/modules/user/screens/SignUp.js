import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from 'components/Button';

class SignUp extends Component {
  back = () => {
    this.props.navigation.goBack(null);
  };

  render() {
    return (
      <View>
        <Text>Sign Up</Text>
        <Button title="Go Back" onPress={this.back} />
      </View>
    );
  }
}

export default SignUp;
