import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import styles from '../../styles/global';
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  THIRD_COLOR,
  FOURTH_COLOR,
} from '../../styles/constant';
import React from 'react';

const Confrim = ({navigation}) => {
  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.wrapHistory}>
        <View>
          <Text>Transaction To</Text>
        </View>
      </View>
      <View style={styleslocal.TransName}>
        <View style={styleslocal.PadTrans} />
        <View style={styles.wrapperName}>
          <Text>Name</Text>
          <Text>Phone Number</Text>
        </View>
      </View>
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
      <View>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => navigation.navigate('Success')}>
          <Text style={styles.font2}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styleslocal = StyleSheet.create({
  BoxWrap: {
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 20,
    flexDirection: 'row',
  },
  Box: {
    borderRadius: 15,
    backgroundColor: SECONDARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
    height: 100,
  },
  BoxLong: {
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 15,
    backgroundColor: SECONDARY_COLOR,
    height: 100,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  TransName: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: FOURTH_COLOR,
    borderRadius: 15,
    height: 100,
  },
  PadTrans: {
    marginHorizontal: 30,
    backgroundColor: PRIMARY_COLOR,
    height: 50,
    width: 50,
    borderRadius: 15,
  },
});

export default Confrim;
