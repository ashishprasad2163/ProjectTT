import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Dimensions,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Color from '../assets/font-color/Color';

export default function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>OUR TRAVELLERS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: hp(10),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: Color.primary,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: wp(5),
  },
});
