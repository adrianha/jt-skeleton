import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors, metrics } from 'themes';

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.blue,
    padding: metrics.baseMargin,
    alignItems: 'center',
    borderRadius: metrics.baseMargin
  },
  title: {
    color: colors.white
  }
});

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
      <TouchableOpacity style={styles.button} onPress={this.handlePress}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

export default Button;
