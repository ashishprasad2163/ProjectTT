import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  Keyboard,
  Pressable,
  Button,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Color from '../assets/font-color/Color';
import {Avatar, List, Colors} from 'react-native-paper';
import {Col, Row, Grid} from 'react-native-easy-grid';
export default function Screen2() {
  const [isLoading, setLoading] = useState(false);
  //   const handleTouch = () => {
  //     console.log('touch');
  //     // alert('You tapped the 1 button!');
  //   };
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          alignSelf: 'center',
        }}>
        <Text style={styles.headerText}>Traveller Detail</Text>
        <Avatar.Image
          style={{marginTop: wp(5)}}
          size={140}
          source={require('../assets/images/dp.jpg')}
        />
      </View>
      <View style={styles.bodyStyle}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <List.Icon color={Colors.blue500} icon="account" />
          </View>
          <View style={styles.rowStyle}>
            <Text style={styles.rowText}>Nameasasasasa</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <List.Icon color={Colors.blue500} icon="map-marker" />
          </View>
          <View style={styles.rowStyle}>
            <Text style={styles.rowText}>Address</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <List.Icon color={Colors.blue500} icon="email-outline" />
          </View>
          <View style={styles.rowStyle}>
            <Text style={styles.rowText}>email</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <List.Icon color={Colors.blue500} icon="phone" />
          </View>
          <View style={styles.rowStyle}>
            <Text style={styles.rowText}>phone</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <List.Icon color={Colors.blue500} icon="lock" />
          </View>
          <View style={styles.rowStyle}>
            <Text style={styles.rowText}>Password</Text>
          </View>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <View
          style={{flex: 1, backgroundColor: Color.callButton, padding: wp(8)}}>
          <Text style={styles.buttonStyle}>CALL</Text>
        </View>
        <View
          style={{flex: 1, backgroundColor: Color.emailButton, padding: wp(8)}}>
          <Text style={styles.buttonStyle}>EMAIL</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.secondary,
    height: hp('100%'),
    width: wp('100%'),
  },
  headerText: {
    alignSelf: 'center',
    color: Color.primary,
    margin: wp(4),
    fontSize: wp(5),
    fontWeight: 'bold',
  },
  footerContainer: {
    margin: wp(5),
    flexDirection: 'row',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
  },
  buttonStyle: {
    color: 'white',
    fontSize: wp(4),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  row: {
    marginHorizontal: wp(2),
  },
  cardPara: {
    marginHorizontal: wp(2),
    marginVertical: wp(4),
    height: hp(8),
  },
  keyText: {
    fontSize: wp(5),
    letterSpacing: wp(0.2),
    fontWeight: '900',
    fontFamily: 'Poppins-Bold',
    color: Color.primary,
  },
  bodyStyle: {
    flex: 1,
    margin: wp(5),
    marginBottom: wp(30),
  },
  rowStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: wp(2),
  },
  rowText: {
    color: Color.primary,
    fontSize: wp(5),
  },
});
