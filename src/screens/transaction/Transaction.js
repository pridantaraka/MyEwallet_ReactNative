import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from '../../styles/global';
import {SECONDARY_COLOR, THIRD_COLOR} from '../../styles/constant';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {CardContact} from '../../components/Card';
// import Data from '../../assets/Data';
import {userContact} from '../../redux/asyncActions/profile';
import {useDispatch, useSelector} from 'react-redux';
import {selectRecipient} from '../../redux/reducers/transaction';

const Transaction = ({navigation}) => {
  const dispatch = useDispatch();
  const Contact = useSelector(state => state.profile.data);
  const token = useSelector(state => state.auth.token);
  const [limit, setLimit] = React.useState(5);
  React.useEffect(() => {
    dispatch(userContact({token, limit}));
  }, [token, limit, dispatch]);

  return (
    <>
      <ScrollView style={styles.wrapper}>
        <View style={styles.content}>
          <View style={styleslocal.BalanceBox}>
            <View style={styleslocal.BoxSpace}>
              <View>
                <Icon name="arrow-down" size={20} style={{color: 'green'}} />
              </View>
              <View>
                <Text>Balance</Text>
              </View>
              <View>
                <Text style={styles.font3}>Rp. 1.000.000</Text>
              </View>
            </View>
            <View style={styleslocal.BoxSpace}>
              <View>
                <Icon name="arrow-up" size={20} style={{color: 'red'}} />
              </View>
              <View>
                <Text>Expensive</Text>
              </View>
              <View>
                <Text style={styles.font3}>Rp. 500.000</Text>
              </View>
            </View>
          </View>
          <View style={styles.wrapHistory}>
            <View>
              <Text>Transaction History</Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('History')}>
                <Text>See All</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <FlatList
              data={Contact}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      dispatch(selectRecipient(item.id_user));
                      navigation.navigate('Transfer');
                    }}>
                    <CardContact
                      fullname={item.fullname}
                      phonenumber={item.phonenumber}
                    />
                  </TouchableOpacity>
                );
              }}
              keyExtractor={item => String(item.id_user)}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};
const styleslocal = StyleSheet.create({
  wrapperName: {
    flexDirection: 'column',
  },
  BalanceBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 25,
    marginVertical: 20,
    backgroundColor: THIRD_COLOR,
    borderRadius: 10,
    marginHorizontal: 25,
    height: 200,
  },
  BoxSpace: {
    justifyContent: 'space-evenly',
  },
  buttonPress: {
    height: 70,
    width: 100,
    borderRadius: 10,
    backgroundColor: SECONDARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnFlex: {
    flexDirection: 'row',
  },
});

export default Transaction;
