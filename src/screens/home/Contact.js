import {View, Text} from 'react-native';
import React from 'react';
import {CardContact} from '../../components/CardMenu';
import styles from '../../styles/global';
import Search from '../../components/Search';

const Contact = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <View>
          <Search placeholder="input text" input="text" />
        </View>
        <View>
          <CardContact name="Text1" phone="081323412" />
        </View>
      </View>
    </View>
  );
};

export default Contact;
