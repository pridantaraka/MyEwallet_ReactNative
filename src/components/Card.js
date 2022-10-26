import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {SECONDARY_COLOR} from '../styles/constant';
import styles from '../styles/global';
import {useSelector} from 'react-redux';

export const CardContact = ({fullname, phonenumber, imageSrc}) => {
  const profileInfo = useSelector(state => state.profile.data);
  return (
    <>
      <View style={styleslocal.wrapper}>
        <View style={styleslocal.wrapper1}>
          <View style={styleslocal.picture}>
            <Image
              source={{uri: profileInfo.picture}}
              style={{
                height: 40,
                width: 40,
                aspectRatio: 1,
                borderRadius: 15,
                marginRight: 20,
              }}
            />
          </View>
          <View style={styleslocal.name}>
            <Text style={styleslocal.font}>{fullname}</Text>
            <Text style={styleslocal.font}>{phonenumber}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export const CardHistory = ({item}) => {
  const dataHistory = useSelector(state => state.transaction.data);
  console.log('ini data picture', dataHistory);
  return (
    <>
      <View style={styleslocal.wrapper}>
        <View style={styleslocal.wrapper1}>
          <View style={styleslocal.picture}>
            <Image
              source={{uri: dataHistory.recipient_picture}}
              style={{
                height: 40,
                width: 40,
                aspectRatio: 1,
                borderRadius: 15,
                marginRight: 20,
              }}
            />
          </View>
          <View style={styleslocal.name}>
            <Text style={styleslocal.font}>{item.recipient_fullname}</Text>
            <Text style={styleslocal.font}>{item.name}</Text>
          </View>
        </View>
        <View>
          <Text style={styleslocal.font}>
            {/* {item.amount} */}
            {item.recipient_id !== item.sender_id ? (
              <Text style={{color: 'red'}}>- Rp. {item.amount || 0}</Text>
            ) : (
              <Text style={{color: 'green'}}>+ Rp. {item.amount || 0}</Text>
            )}
          </Text>
        </View>
      </View>
    </>
  );
};
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
