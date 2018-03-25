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
          <Text style={styles.headerText}>Pendidikan Teknik Informatika</Text>
        </View>
        <View style={[styles.boxSlider, styles.boxCenter]}>
          <Text style={styles.sliderText}>Slider</Text>
        </View>
        <View style={[styles.boxNumber, costumMargin(10)]}>
          <View style={styles.boxNumberUp}>
            <View style={[styles.boxNumberUpChild, costumMargin(10), costumPadding(20, 0, 20, 0)]}>
              <Text>1</Text>
            </View>
            <View style={[styles.boxNumberUpChild, costumMargin(10), costumPadding(20, 0, 20, 0)]}>
              <Text>2</Text>
            </View>
            <View style={[styles.boxNumberUpChild, costumMargin(10), costumPadding(20, 0, 20, 0)]}>
              <Text>3</Text>
            </View>
            <View style={[styles.boxNumberUpChild, costumMargin(10), costumPadding(20, 0, 20, 0)]}>
              <Text>4</Text>
            </View>
          </View>
          <View style={styles.boxNumberUp}>
            <View style={[styles.boxNumberUpChild, costumMargin(10), costumPadding(20, 0, 20, 0)]}>
              <Text>1</Text>
            </View>
            <View style={[styles.boxNumberUpChild, costumMargin(10), costumPadding(20, 0, 20, 0)]}>
              <Text>2</Text>
            </View>
            <View style={[styles.boxNumberUpChild, costumMargin(10), costumPadding(20, 0, 20, 0)]}>
              <Text>3</Text>
            </View>
            <View style={[styles.boxNumberUpChild, costumMargin(10), costumPadding(20, 0, 20, 0)]}>
              <Text>4</Text>
            </View>
          </View>
        </View>
        <View style={[styles.boxFooter, styles.boxCenter, costumMargin(10)]}>
          <Text style={styles.headerText}>#Jaen Kuliah di PTI</Text>
        </View>

      </View>
    );
  }
}

const costumMargin = function (margin) {
   return {
     marginBottom: margin,
     marginTop: margin,
     marginLeft: margin,
     marginRight: margin
   };
 };
 const costumPadding = function (top, right, bottom, left) {
    return {
      paddingBottom: bottom,
      paddingTop: top,
      paddingLeft: left,
      paddingRight: right
    };
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#B0E0F9',
  },
  boxFooter: {
    flex: 1,
    backgroundColor: '#0000D8',
  },
  boxNumberUp: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  boxNumberUpChild: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  boxHeader: {
    flex: 1,
    backgroundColor: '#064A96',
    alignItems: 'center'
  },
  boxNumber: {
    flex: 2,
    backgroundColor: '#29B7F5',
    flexDirection: 'column'
  },
  boxSlider: {
    flex: 2,
    backgroundColor: '#1587E2',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 20
  },
  sliderText: {
    color: '#000000',
    fontSize: 20
  },
  boxCenter: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});
