import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {PRIMARY_COLOR, SECONDARY_COLOR, THIRD_COLOR, FOURTH_COLOR} from '../styles/constant';

export default function Card({item}) {
  return (
    <View>
      <View style={styleslocal.wrapper}>
        <View style={styleslocal.picture}>
          <Image />
        </View>
        <View style={styleslocal.name}>
          <Text style={styleslocal.font}>{item.name}</Text>
          <Text style={styleslocal.font}>{item.transType}</Text>
        </View>
        <View>
          <Text style={styleslocal.font}>{item.amount}</Text>
        </View>
      </View>
    </View>
  );
}
const styleslocal = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 15,
    backgroundColor: SECONDARY_COLOR,
    height: 70,
    alignItems: 'center',
    marginVertical: 5,
  },
  name: {
    flexDirection: 'column',
  },
  font: {
    color: 'white',
  },
  picture: {
    height: 50,
    width: 50,
    backgroundColor: 'white',
  },
});
