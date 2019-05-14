import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

class COMPONENT_NAME extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>COMPONENT_NAME</Text>
      </View>
    );
  }
}

COMPONENT_NAME.propTypes = {};

export default COMPONENT_NAME;