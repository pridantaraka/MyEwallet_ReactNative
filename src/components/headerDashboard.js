import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const headerDashboard = ({icon}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapperFlex}>
        <View>
          <Text>Profile</Text>
        </View>
        <View style={styles.wrapperName}>
          <View>Hello,</View>
          <View>Name</View>
        </View>
        <View>
          <Icon name={icon} size={20} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  wrapperFlex: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  wrapperName: {
    flexDirection: 'column',
  },
});
export default headerDashboard;
