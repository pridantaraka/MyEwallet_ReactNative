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

const Transfer = ({navigation}) => {
  return (
    <ScrollView style={styles.wrapper}>
      <View>
        <CardTransfer name="My Name Is" phone="0812314123" />
      </View>
      <View style={styles.contentTrans}>
        <View style={styleslocal.moneyHave}>
          <Text style={styleslocal.fontTrans}>Rp. 120.000 Avaliable</Text>
        </View>
        <View style={styleslocal.MarginInput}>
          <InputTrans type="numeric" placeholder="0.00" />
        </View>
        <View>
          <InputTrans
            icon="pencil"
            type="text"
            placeholder="For buying some socks"
          />
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => navigation.navigate('Confrim')}>
          <Text style={styles.font2}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styleslocal = StyleSheet.create({
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

export default Transfer;
