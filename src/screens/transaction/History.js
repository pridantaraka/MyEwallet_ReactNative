import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from '../../styles/global';
import React from 'react';
import {CardHistory} from '../../components/Card';
import Data from '../../assets/Data';
import {historyTransaction} from '../../redux/asyncActions/transaction';
import {useSelector, useDispatch} from 'react-redux';

const History = ({navigation}) => {
  const dispatch = useDispatch();
  const dataHistory = useSelector(state => state.transaction.data);
  const token = useSelector(state => state.auth.token);
  const [limit, setLimit] = React.useState(5);
  const [sortType, setSortType] = React.useState('ASC');
  React.useEffect(() => {
    dispatch(historyTransaction({token, limit, sortType}));
  }, [token, limit, sortType, dispatch]);
  return (
    <>
      <ScrollView style={styles.wrapper}>
        <View style={styles.content}>
          <View style={styles.wrapHistory}>
            <View>
              <Text style={styles.font1}>Transaction History</Text>
            </View>
          </View>
          <FlatList
            data={dataHistory}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Transfer')}>
                  <CardHistory item={item} />
                </TouchableOpacity>
              );
            }}
            keyExtractor={item => String(item.id_transaction)}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default History;
