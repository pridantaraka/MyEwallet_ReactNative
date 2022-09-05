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
import InputTrans from '../../components/InputTrans';

const Topup = ({navigation}) => {
  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.wrapHistory}>
        <View>
          <Text style={styles.font4}>Top Up</Text>
        </View>
      </View>
      <View style={styleslocal.TransName}>
        <View style={styleslocal.PadTrans} />
        <View style={styles.wrapperName}>
          <Text>Name</Text>
          <Text>Phone Number</Text>
        </View>
      </View>
      <View style={styleslocal.moneyHave}>
        <Text style={styleslocal.fontTrans}>Rp. 120.000 Avaliable</Text>
      </View>
      <View style={styleslocal.MarginInput}>
        <InputTrans type="numeric" placeholder="0.00" />
      </View>
      <View>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => navigation.navigate('Dashboard')}>
          <Text style={styles.font2}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styleslocal = StyleSheet.create({
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
  moneyHave: {
    marginTop: 30,
  },
  MarginInput: {
    marginVertical: 100,
  },
  fontTrans: {
    textAlign: 'center',
  },
});

export default Topup;
