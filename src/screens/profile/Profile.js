import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  THIRD_COLOR,
  FOURTH_COLOR,
} from '../../styles/constant';
import {CardName} from '../../components/CardMenu';

const Profile = ({navigation}) => {
  return (
    <ScrollView style={styleslocal.wrapper}>
      <View>
        <Text style={styleslocal.text1}>
          We got your personal information from the sign up proccess. If you
          want to make changes on your information, contact our support.
        </Text>
      </View>
      <CardName headname="First Name" contentname="My Name Is" />
      <CardName headname="Last Name" contentname="My Name Is" />
      <CardName headname="Verified E-mail" contentname="My Name Is" />
      <TouchableOpacity onPress={() => navigation.navigate('Add Phone')}>
        <CardName headname="Phone Number" contentname="Add phone Number" />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styleslocal = StyleSheet.create({
  wrapper: {
    marginHorizontal: 10,
  },
  card: {
    height: 50,
    backgroundColor: SECONDARY_COLOR,
    borderRadius: 15,
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text1: {
    marginTop: 20,
    marginBottom: 30,
    fontSize: 20,
    fontWeight: '400',
    color: PRIMARY_COLOR,
  },
});

export default Profile;
