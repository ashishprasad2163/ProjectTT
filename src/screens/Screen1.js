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
  FlatList,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from '../components/Header';
import Color from '../assets/font-color/Color';
import {Searchbar, Avatar} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
//redux
import {connect} from 'react-redux';
import {getUsers} from '../actions/user';
import PropTypes from 'prop-types';

const Screen1 = ({navigation, user: {users, loading}}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = (query) => setSearchQuery(query);
  const handleTouch = (item) => {
    console.log('touch');
    navigation.push('Screen2', {
      name: item.first_name + ' ' + item.last_name,
      address: 'address',
      email: item.email,
      phone: item.phone,
    });
  };
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
      {/* <TouchableOpacity style={styles.cardContainer} onPress={handleTouch}>
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
      </TouchableOpacity> */}

      <View style={{flex: 1}}>
        {loading == true ? (
          <View>
            <Text
              style={{
                textAlign: 'center',
                color: Color.primary,
                marginVertical: wp(40),
                fontWeight: 'bold',
              }}>
              Loading
            </Text>
          </View>
        ) : loading == false ? (
          <FlatList
            data={users}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.cardContainer}
                onPress={() => {
                  navigation.push('Screen2', {
                    name: item.first_name + ' ' + item.last_name,
                    address: 'address',
                    email: item.email,
                    phone: item.phone_number,
                    gender: item.gender,
                  });
                }}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: wp(2),
                  }}>
                  {item.gender == 'Female' ? (
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
                  <Text style={styles.userName}>
                    {item.first_name + ' ' + item.last_name}
                  </Text>
                  <Text style={styles.userInfo}>
                    Phone: {item.phone_number}
                  </Text>
                  <Text style={styles.userInfo}>Email: {item.email}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        ) : (
          <View>
            <Text
              style={{
                textAlign: 'center',
                color: Color.primary,
                marginVertical: wp(40),
                fontWeight: 'bold',
              }}>
              Something went wrong
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

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

Screen1.propTypes = {
  getUsers: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({user: state.user});

export default connect(mapStateToProps, {getUsers})(Screen1);
