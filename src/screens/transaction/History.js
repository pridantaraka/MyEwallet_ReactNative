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
import Card from '../../components/Card';
import Data from '../../assets/Data';

const History = ({navigation}) => {
  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.content}>
        <View style={styles.wrapHistory}>
          <View>
            <Text style={styles.font1}>Transaction History</Text>
          </View>
        </View>
        <FlatList
          data={Data}
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('Transfer')}>
                <Card item={item} />
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => String(item.id)}
        />
      </View>
    </ScrollView>
  );
};

export default History;
