import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import styles from '../../styles/global';
import {CardPhone} from '../../components/CardMenu';

const EditPhone = () => {
  return (
    <ScrollView style={styles.wrapper}>
      <View>
        <View>
          <Text style={styles.font6}>
            Add at least one phone number for the transfer ID so you can start
            transfering your money to another user.
          </Text>
        </View>
        <CardPhone title="Primary" phone="0812314123" icon="trash" />
      </View>
    </ScrollView>
  );
};

export default EditPhone;
