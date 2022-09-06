import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
StyleSheet;
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  THIRD_COLOR,
  FOURTH_COLOR,
} from '../styles/constant';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/global';

export const CardMenu = ({menu, icon}) => {
  return (
    <View style={styleslocal.card}>
      <View>
        <Text style={styles.font2}>{menu}</Text>
      </View>
      <View>
        <Icon name={icon} size={20} style={{color: 'white'}} />
      </View>
    </View>
  );
};

export const CardName = ({headname, contentname}) => {
  return (
    <View style={styleslocal.card2}>
      <View>
        <Text style={styles.font2}>{headname}</Text>
        <Text style={styleslocal.font1}>{contentname}</Text>
      </View>
    </View>
  );
};

const styleslocal = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 130,
  },
  card: {
    height: 50,
    backgroundColor: SECONDARY_COLOR,
    borderRadius: 15,
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  card2: {
    height: 90,
    backgroundColor: SECONDARY_COLOR,
    borderRadius: 15,
    paddingHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 15,
  },
  font1: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
});
