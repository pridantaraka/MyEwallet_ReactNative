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
import {CardTransfer} from '../../components/CardMenu';

const Topup = ({navigation}) => {
  return (
    <ScrollView style={styles.wrapper}>
      <CardTransfer name="My Name is" phone="08123124" />
      <View style={styles.contentTrans}>
        <View style={styleslocal.moneyHave}>
          <Text style={styleslocal.fontTrans}>Rp. 120.000 Avaliable</Text>
        </View>
        <View style={styleslocal.MarginInput}>
          <InputTrans type="numeric" placeholder="0.00" />
        </View>
        <View />
      </View>
      <View style={styles.footer}>
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
