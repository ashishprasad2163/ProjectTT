import React, {useState, useEffect} from 'react';
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
  Linking,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Color from '../assets/font-color/Color';
import {Avatar, List, Colors} from 'react-native-paper';
import Geocoder from 'react-native-geocoding';
import Geolocation from 'react-native-geolocation-service';

export default function Screen2({route, navigation}) {
  const [hasLocationPermission, setHasLocationPermission] = useState(false);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION &&
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message:
            'Apps wants to know your location ' +
            'so you can complete your profile.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
        setHasLocationPermission(true);
      } else {
        console.log('Location permission denied');
        setHasLocationPermission(false);
      }
    } catch (err) {
      console.warn(err);
    }
  };
  useEffect(() => {
    requestLocationPermission();
    if (hasLocationPermission) {
      Geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
          setLongitude(position.coords.longitude);
          setLatitude(position.coords.latitude);
        },
        (error) => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
  });
  const {name} = route.params;
  const {address} = route.params;
  const {email} = route.params;
  const {phone} = route.params;
  const {gender} = route.params;

  const handleCall = () => {
    Linking.openURL(`tel:${phone}`);
  };
  const handleEmail = () => {
    Linking.openURL(`mailto:${email}`);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          alignSelf: 'center',
        }}>
        <Text style={styles.headerText}>Traveller Detail</Text>
        {gender == 'Female' ? (
          <Avatar.Image
            style={{marginTop: wp(5)}}
            size={140}
            source={require('../assets/images/female.png')}
          />
        ) : (
          <Avatar.Image
            size={140}
            source={require('../assets/images/male.png')}
          />
        )}
      </View>
      <View style={styles.bodyStyle}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <List.Icon color={Colors.blue500} icon="account" />
          </View>
          <View style={styles.rowStyle}>
            <Text style={styles.rowText}>{name}</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <List.Icon color={Colors.blue500} icon="map-marker" />
          </View>
          <View style={styles.rowStyle}>
            <Text style={styles.rowText}>{latitude + ' ' + longitude}</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <List.Icon color={Colors.blue500} icon="email-outline" />
          </View>
          <View style={styles.rowStyle}>
            <Text style={styles.rowText}>{email}</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <List.Icon color={Colors.blue500} icon="phone" />
          </View>
          <View style={styles.rowStyle}>
            <Text style={styles.rowText}>{phone}</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <List.Icon color={Colors.blue500} icon="lock" />
          </View>
          <View style={styles.rowStyle}>
            <Text style={styles.rowText}>........</Text>
          </View>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity
          onPress={handleCall}
          style={{flex: 1, backgroundColor: Color.callButton, padding: wp(8)}}>
          <Text style={styles.buttonStyle}>CALL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleEmail}
          style={{flex: 1, backgroundColor: Color.emailButton, padding: wp(8)}}>
          <Text style={styles.buttonStyle}>EMAIL</Text>
        </TouchableOpacity>
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
