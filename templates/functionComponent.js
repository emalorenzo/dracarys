import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const COMPONENT_NAME = () => {
  return (
    <View style={styles.container}>
      <Text>COMPONENT_NAME</Text>
    </View>
  );
}

COMPONENT_NAME.propTypes = {};

export default COMPONENT_NAME;