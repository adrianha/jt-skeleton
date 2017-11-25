import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { colors } from 'helpers';

class Button extends Component {
  static defaultProps = {
    title: '',
    onPress: null
  };

  handlePress = () => {
    const { onPress } = this.props;

    onPress && onPress();
  };

  render() {
    const { title } = this.props;

    return (
      <TouchableOpacity
        style={{
          backgroundColor: colors.blue,
          padding: 10,
          alignItems: 'center',
          borderRadius: 10
        }}
        onPress={this.handlePress}
      >
        <Text
          style={{
            color: colors.white
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default Button;
