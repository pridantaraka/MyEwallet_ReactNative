import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from '../../styles/global';
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  THIRD_COLOR,
  FOURTH_COLOR,
} from '../../styles/constant';
import logo from '../../assets/images/failed.png';
import React from 'react';
import {CardTransfer} from '../../components/CardMenu';

const Success = ({navigation}) => {
  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.WrappingTrans}>
        <View style={styles.LogoTrans}>
          <Image source={logo} />
        </View>
        <View>
          <Text style={styles.font6}>Transfer Failed</Text>
        </View>
      </View>
      <View style={styles.wrapHistory}>
        <Text style={styles.font1}>Transfer To</Text>
      </View>
      <CardTransfer name="My name Is" phone="012312333" />
      <View style={styleslocal.BoxWrap}>
        <View style={styleslocal.Box}>
          <Text style={styles.font2}>Amount</Text>
          <Text style={styles.font3}>Rp. 100.000</Text>
        </View>
        <View style={styleslocal.Box}>
          <Text style={styles.font2}>Balance Left</Text>
          <Text style={styles.font3}>Rp. 20.000</Text>
        </View>
      </View>
      <View style={styleslocal.BoxLong}>
        <Text style={styles.font2}>Dete Time</Text>
        <Text style={styles.font3}>May 11, 2020 - 12.20</Text>
      </View>
      <View style={styleslocal.BoxLong}>
        <Text style={styles.font2}>Notes</Text>
        <Text style={styles.font3}>For buying some socks</Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => navigation.navigate('Transfer')}>
          <Text style={styles.font2}>Try Again</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styleslocal = StyleSheet.create({
  BoxWrap: {
    justifyContent: 'space-between',
    marginVertical: 10,
    flexDirection: 'row',
  },
  Box: {
    borderRadius: 15,
    backgroundColor: SECONDARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    width: 160,
    height: 100,
  },
  BoxLong: {
    marginVertical: 10,
    borderRadius: 15,
    backgroundColor: SECONDARY_COLOR,
    height: 100,
    justifyContent: 'center',
    paddingLeft: 20,
  },
});

export default Success;
