import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  THIRD_COLOR,
  FOURTH_COLOR,
} from '../../styles/constant';
import styles from '../../styles/global';
import Icon from 'react-native-vector-icons/Ionicons';
import {CardMenu} from '../../components/CardMenu';

const Profilemenu = ({navigation}) => {
  return (
    <View>
      <View style={styleslocal.wrapper}>
        <View style={styleslocal.picture}>
          <Image />
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
            <Text>
              <Icon name="pencil" />
              Edit
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styleslocal.text1}>My Name is</Text>
        </View>
        <View>
          <Text style={styleslocal.text1}>+62 8121 2839 9231</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Personal Info')}>
        <CardMenu menu="Personal Information" icon="caret-forward" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Change Password')}>
        <CardMenu menu="Change Password" icon="caret-forward" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
        <CardMenu menu="Change Pin" icon="caret-forward" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <CardMenu menu="Logout" />
      </TouchableOpacity>
    </View>
  );
};

const styleslocal = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 130,
  },
  picture: {
    height: 50,
    width: 50,
    backgroundColor: PRIMARY_COLOR,
    marginBottom: 15,
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
    marginTop: 10,
    fontSize: 20,
    fontWeight: '400',
    color: PRIMARY_COLOR,
  },
});

export default Profilemenu;
