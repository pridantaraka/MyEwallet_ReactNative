import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
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
import {TopupBalance} from '../../redux/asyncActions/transaction';
import {ProfileDetail} from '../../redux/asyncActions/profile';
import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';

const Topup = ({navigation}) => {
  var currentdate = new Date();
  var date =
    currentdate.getFullYear() +
    '-' +
    (currentdate.getMonth() + 1) +
    '-' +
    currentdate.getDate();
  var time =
    currentdate.getHours() +
    ':' +
    currentdate.getMinutes() +
    ':' +
    currentdate.getSeconds();

  const dispatch = useDispatch();
  const alertPopup = () =>
    Alert.alert('Topup', 'TopUp Succesfuly', [{text: 'OK'}]);
  const time_transaction = `${date} ${time}`;
  const profileInfo = useSelector(state => state.profile.detailProfile);
  const token = useSelector(state => state.auth.token);
  const type_id = 2;
  const [balance, setBalance] = useState('');
  const data = {
    balance,
    type_id,
    time_transaction,
  };

  const onTopup = () => {
    dispatch(TopupBalance({data, token}));
    dispatch(alertPopup);
    navigation.navigate('Dashboard');
  };

  React.useEffect(() => {
    dispatch(ProfileDetail(token));
  }, [token, dispatch]);
  return (
    <ScrollView style={styles.wrapper}>
      <CardTransfer
        name={profileInfo.fullname}
        phone={profileInfo.phonenumber}
      />
      <View style={styles.contentTrans}>
        <View style={styleslocal.moneyHave}>
          <Text style={styleslocal.fontTrans}>
            {new Intl.NumberFormat('id-ID', {
              style: 'currency',
              currency: 'IDR',
            }).format(
              parseInt(profileInfo.balance ? profileInfo.balance : '0'),
            )}{' '}
            Avaliable
          </Text>
        </View>
        <View style={styleslocal.MarginInput}>
          <TextInput
            placeholder="0.00"
            keyboardType="numeric"
            onChangeText={balanceNew => setBalance(balanceNew)}
            initialValue={balance}
          />
        </View>
        <View />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.Button} onPress={onTopup}>
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
