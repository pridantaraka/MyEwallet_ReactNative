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

export const CardContact = ({name, phone}) => {
  return (
    <View style={styleslocal.card4}>
      <View style={styleslocal.picture}>
        <Image />
      </View>
      <View>
        <Text style={styleslocal.font2}>{name}</Text>
        <Text style={styleslocal.font3}>{phone}</Text>
      </View>
    </View>
  );
};

export const CardTransfer = ({name, phone}) => {
  return (
    <View style={styleslocal.card5}>
      <View style={styleslocal.picture}>
        <Image />
      </View>
      <View>
        <Text style={styles.font1}>{name}</Text>
        <Text style={styleslocal.font7}>{phone}</Text>
      </View>
    </View>
  );
};

export const CardProfile = ({greeting, name, icon}) => {
  return (
    <View style={styleslocal.card3}>
      <View style={styleslocal.wrappercard}>
        <View style={styleslocal.picture}>
          <Image />
        </View>
        <View>
          <Text>{greeting}</Text>
          <Text style={styles.font1}>{name}</Text>
        </View>
      </View>
      <View>
        <Icon name={icon} size={28} />
      </View>
    </View>
  );
};

export const CardPhone = ({title, phone, icon}) => {
  return (
    <View style={styleslocal.card6}>
      <View style={styleslocal.wrappercard}>
        <View>
          <Text style={styleslocal.font3}>{title}</Text>
          <Text style={styleslocal.font1}>{phone}</Text>
        </View>
      </View>
      <View>
        <Icon name={icon} size={28} style={{color: 'white'}} />
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
  card3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  card4: {
    flexDirection: 'row',
    marginHorizontal: 10,
    backgroundColor: SECONDARY_COLOR,
    height: 90,
    borderRadius: 15,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  card5: {
    flexDirection: 'row',
    marginHorizontal: 10,
    height: 90,
    alignItems: 'center',
  },
  card6: {
    height: 90,
    backgroundColor: SECONDARY_COLOR,
    borderRadius: 15,
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 25,
  },
  wrappercard: {
    flexDirection: 'row',
  },
  picture: {
    height: 50,
    width: 50,
    borderRadius: 15,
    backgroundColor: PRIMARY_COLOR,
    marginRight: 30,
  },
  font1: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  font2: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
  },
  font3: {
    fontSize: 16,
    fontWeight: '400',
    color: 'white',
  },
});
