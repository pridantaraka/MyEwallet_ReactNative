import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import styles from '../../styles/global';
import {useDispatch, useSelector} from 'react-redux';
// import {inputAmount} from '../../redux/reducers/transaction';
import {Transfer} from '../../redux/asyncActions/transaction';
import React from 'react';
import {useState} from 'react';

const PinCheck = ({navigation}) => {
  const dispatch = useDispatch();
  const detailInput = useSelector(state => state.transaction.dataTransfer);
  const pinUser = useSelector(state => state.auth.pin);
  const token = useSelector(state => state.auth.token);
  const date = detailInput.date;
  const time = detailInput.time;
  const date_time = `${date} ${time}`;
  const [first, setFirst] = useState();
  const [sec, setSec] = useState();
  const [third, setThird] = useState();
  const [fourth, setFourth] = useState();
  const [fifth, setFifth] = useState();
  const [sixth, setSixth] = useState();

  const data = {
    first,
    sec,
    third,
    fourth,
    fifth,
    sixth,
  };
  const pin = Object.values(data).join('');
  return (
    <>
      <View style={styles.wrapper}>
        <View
          style={{
            flexDirection: 'column',
            padding: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{padding: 20, fontSize: 22, fontWeight: 'bold'}}>
            Enter PIN to Transfer
          </Text>
          <Text style={{textAlign: 'center'}}>
            Enter your 6 digits PIN for confirmation to continue transferring
            money.
          </Text>
        </View>
        <View style={styleLocal.pinInput}>
          <TextInput
            style={styleLocal.input}
            onChangeText={newFirst => setFirst(newFirst)}
            defaultValue={first}
          />
          <TextInput
            style={styleLocal.input}
            onChangeText={newSec => setSec(newSec)}
            defaultValue={sec}
          />
          <TextInput
            style={styleLocal.input}
            onChangeText={newThird => setThird(newThird)}
            defaultValue={third}
          />
          <TextInput
            style={styleLocal.input}
            onChangeText={newFourth => setFourth(newFourth)}
            defaultValue={fourth}
          />
          <TextInput
            style={styleLocal.input}
            onChangeText={newFifth => setFifth(newFifth)}
            defaultValue={fifth}
          />
          <TextInput
            style={styleLocal.input}
            onChangeText={newSixth => setSixth(newSixth)}
            defaultValue={sixth}
          />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.Button}
            onPress={() => {
              if (pin === pinUser) {
                const data = {
                  amount: detailInput.amount,
                  recipient_id: detailInput.recipient_id,
                  note: detailInput.note,
                  time_transaction: date_time,
                  type_id: detailInput.type_id,
                  pin: detailInput.pin,
                };
                dispatch(Transfer({data, token}));
                navigation.navigate('Success');
              } else {
                navigation.navigate('Failed');
              }
            }}>
            <View>
              <Text style={styles.font2}>Transfer Now</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styleLocal = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    marginHorizontal: 5,
    width: 40,
    borderRadius: 10,
    textAlign: 'center',
  },
  pinInput: {
    flexDirection: 'row',
    width: 300,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default PinCheck;
