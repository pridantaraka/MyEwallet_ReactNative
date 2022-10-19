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
import {CardTransfer} from '../../components/CardMenu';
import {useSelector} from 'react-redux';

const Confrim = ({navigation}) => {
  const userSelect = useSelector(state => state.transaction.dataRecipient);
  const dataTransfer = useSelector(state => state.transaction.dataTransfer);
  const profileInfo = useSelector(state => state.profile.detailProfile);
  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.wrapHistory}>
        <View>
          <Text style={styles.font1}>Transaction To</Text>
        </View>
      </View>
      <CardTransfer
        name={userSelect.fullname || 'no name'}
        phone={userSelect.phonenumber || 'no number phone'}
      />
      <View style={styleslocal.BoxWrap}>
        <View style={styleslocal.Box}>
          <Text style={styles.font2}>Amount</Text>
          <Text style={styles.font3}>
            {new Intl.NumberFormat('id-ID', {
              style: 'currency',
              currency: 'IDR',
            }).format(
              parseInt(dataTransfer.amount ? dataTransfer.amount : '0'),
            )}
          </Text>
        </View>
        <View style={styleslocal.Box}>
          <Text style={styles.font2}>Balance Left</Text>
          <Text style={styles.font3}>
            {new Intl.NumberFormat('id-ID', {
              style: 'currency',
              currency: 'IDR',
            }).format(
              parseInt(profileInfo.balance ? profileInfo.balance : '0'),
            )}
          </Text>
        </View>
      </View>
      <View style={styleslocal.BoxLong}>
        <Text style={styles.font2}>Dete Time</Text>
        <Text style={styles.font3}>
          {dataTransfer.date}, {dataTransfer.time}
        </Text>
      </View>
      <View style={styleslocal.BoxLong}>
        <Text style={styles.font2}>Notes</Text>
        <Text style={styles.font3}>
          {dataTransfer.note || 'note not input'}
        </Text>
      </View>
      <View style={styles.footer}>
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

export default Confrim;
