import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from '../../styles/global';
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  THIRD_COLOR,
  FOURTH_COLOR,
} from '../../styles/constant';
import React from 'react';
// import InputTrans from '../../components/InputTrans';
import {CardTransfer} from '../../components/CardMenu';
import {useDispatch, useSelector} from 'react-redux';
import {getUserById} from '../../redux/asyncActions/transaction';
import {inputAmount} from '../../redux/reducers/transaction';
import {useState} from 'react';

const Transfer = ({navigation}) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const recipient_id = useSelector(state => state.transaction.dataTransfer);
  const id_recipient = recipient_id.recipient_id;
  const userSelect = useSelector(state => state.transaction.dataRecipient);
  const profileInfo = useSelector(state => state.profile.detailProfile);
  const token = useSelector(state => state.auth.token);
  const pinUser = useSelector(state => state.auth.pin);
  const CheckPin = parseInt(pinUser);
  const type_id = 1;

  React.useEffect(() => {
    dispatch(getUserById({token, id_recipient}));
  }, [id_recipient]);

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

  const data = {
    amount,
    note,
    time,
    date,
    type_id,
    pin: CheckPin,
  };

  console.log('data dari transfer', data);

  const onInputAmount = () => {
    dispatch(inputAmount(data));
    navigation.navigate('Confrim');
  };

  return (
    <ScrollView style={styles.wrapper}>
      <View>
        <CardTransfer
          name={userSelect.fullname || 'dont have name'}
          phone={userSelect.phonenumber || 'no phone number'}
        />
      </View>
      <View style={styles.contentTrans}>
        <View style={styleslocal.moneyHave}>
          <Text style={styleslocal.fontTrans}>
            Rp.{profileInfo.balance ? profileInfo.balance : '0'} Avaliable
          </Text>
        </View>
        <View style={styleslocal.MarginInput}>
          <TextInput
            style={{
              borderBottomWidth: 2,
              borderBottomColor: SECONDARY_COLOR,
              fontSize: 42,
              color: PRIMARY_COLOR,
              fontWeight: '900',
              textAlign: 'center',
            }}
            placeholder="0.00"
            keyboardType="numeric"
            onChangeText={newAmount => setAmount(newAmount)}
            defaultValue={amount}
          />
        </View>
        <View>
          <TextInput
            style={{
              fontWeight: '400',
              textAlign: 'center',
              backgroundColor: 'white',
              borderRadius: 10,
            }}
            placeholder="Add some notes"
            onChangeText={newNote => setNote(newNote)}
            defaultValue={note}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.Button} onPress={onInputAmount}>
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
