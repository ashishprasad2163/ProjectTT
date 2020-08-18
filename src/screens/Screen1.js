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
import Header from '../components/Header';
import Color from '../assets/font-color/Color';
import {Searchbar, Avatar} from 'react-native-paper';
export default function Screen1() {
  const [searchQuery, setSearchQuery] = useState({
    id: 1,
    first_name: 'Aubrie',
    last_name: 'Handscomb',
    email: 'ahandscomb0@webeden.co.uk',
    gender: 'Male',
    phone_number: '(719) 7076846',
  });
  const gender = 'Male';
  const onChangeSearch = (query) => setSearchQuery(query);
  const [isLoading, setLoading] = useState(false);
  //   const handleTouch = () => {
  //     console.log('touch');
  //     // alert('You tapped the 1 button!');
  //   };
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.searchBar}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          iconColor={Color.primary}
        />
      </View>
      <View></View>
      <View style={styles.cardContainer}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            margin: wp(2),
          }}>
          {gender == 'Female' ? (
            <Avatar.Image
              size={60}
              source={require('../assets/images/female.png')}
            />
          ) : (
            <Avatar.Image
              size={60}
              source={require('../assets/images/male.png')}
            />
          )}
        </View>
        <View style={{justifyContent: 'center', margin: wp(2)}}>
          <Text style={styles.userName}>John Doe</Text>
          <Text style={styles.userInfo}>Phone: 9874561578</Text>
          <Text style={styles.userInfo}>Email:ashishprasad2163@gmail.com</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    height: hp('100%'),
    width: wp('100%'),
  },
  searchBar: {
    margin: wp(4),
  },
  cardContainer: {
    margin: wp(4),
    height: hp(15),
    backgroundColor: Color.secondary,
    flexDirection: 'row',
  },
  cardContent: {
    backgroundColor: Color.secondary,
  },
  userName: {
    color: Color.primary,
    fontSize: wp(5),
    fontWeight: 'bold',
  },
  userInfo: {
    color: Color.primary,
    fontSize: wp(3),
    fontWeight: 'normal',
  },
});
