import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  THIRD_COLOR,
  FOURTH_COLOR,
} from '../../styles/constant';
import styles from '../../styles/global';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Card from '../../components/Card';
import Data from '../../assets/Data';

const Dashboard = ({navigation}) => {
  return (
    <>
      <ScrollView style={styles.wrapper}>
        <View style={styleslocal.wrapperFlex}>
          <View style={styleslocal.picture}>
            <Image />
          </View>
          <View style={styleslocal.wrapperName}>
            <Text>Hello,</Text>
            <Text>Name</Text>
          </View>
          <View>
            <Icon name="notifications-outline" size={20} />
          </View>
        </View>
        <View>
          <View style={styleslocal.BalanceBox}>
            <View>
              <Text>Balance</Text>
            </View>
            <View>
              <Text>120000</Text>
            </View>
            <View>
              <Text>Phone Number</Text>
            </View>
          </View>
          <View style={styleslocal.WrapperBetwen}>
            <View style={styleslocal.buttonPress}>
              <TouchableOpacity
                style={styleslocal.btnFlex}
                onPress={() => navigation.navigate('Transaction')}>
                <View>
                  <Icon name="arrow-up" size={20} style={styles.font2} />
                </View>
                <View>
                  <Text style={styles.font2}>Transfer</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styleslocal.buttonPress}>
              <TouchableOpacity
                style={styleslocal.btnFlex}
                onPress={() => navigation.navigate('Topup')}>
                <View>
                  <Icon name="add" size={20} style={styles.font2} />
                </View>
                <View>
                  <Text style={styles.font2}>TopUp</Text>
                </View>
              </TouchableOpacity>
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
          <FlatList
            data={Data}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Transfer')}>
                  <Card item={item} />
                </TouchableOpacity>
              );
            }}
            keyExtractor={item => String(item.id)}
          />
        </View>
      </ScrollView>
    </>
  );
};
const styleslocal = StyleSheet.create({
  wrapperFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
  },
  picture: {
    height: 50,
    width: 50,
    backgroundColor: PRIMARY_COLOR,
  },
  wrapperName: {
    flexDirection: 'column',
  },
  BalanceBox: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 25,
    marginVertical: 20,
    backgroundColor: THIRD_COLOR,
    borderRadius: 10,
    marginHorizontal: 25,
    height: 200,
  },
  WrapperBetwen: {
    marginVertical: 20,
    justifyContent: 'space-around',
    flexDirection: 'row',
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

export default Dashboard;
