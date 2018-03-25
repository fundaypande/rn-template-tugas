import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class BelajarLayout extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxHeader}>
          <Text>Box Header</Text>
        </View>
        <View style={styles.boxSlider}>
          <Text>Box Slider</Text>
        </View>
        <View style={styles.boxNumber}>
          <Text>Box Number</Text>
        </View>
        <View style={styles.boxFooter}>
          <Text>Box Footer</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  boxFooter: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  boxHeader: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  boxNumber: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  boxSlider: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
