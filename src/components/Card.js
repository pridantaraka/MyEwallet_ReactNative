import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {SECONDARY_COLOR} from '../styles/constant';

export default function Card({item}) {
  return (
    <View style={styleslocal.wrapper}>
      <View style={styleslocal.wrapper1}>
        <View style={styleslocal.picture}>
          <Image />
        </View>
        <View style={styleslocal.name}>
          <Text style={styleslocal.font}>{item.name}</Text>
          <Text style={styleslocal.font}>{item.transType}</Text>
        </View>
      </View>
      <View>
        <Text style={styleslocal.font}>{item.amount}</Text>
      </View>
    </View>
  );
}
const styleslocal = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 15,
    backgroundColor: SECONDARY_COLOR,
    height: 70,
    alignItems: 'center',
    paddingHorizontal: 15,
    marginVertical: 5,
  },
  wrapper1: {
    flexDirection: 'row',
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
    borderRadius: 15,
    marginRight: 20,
  },
});
