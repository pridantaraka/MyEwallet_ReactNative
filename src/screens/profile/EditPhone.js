import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import styles from '../../styles/global';
import {CardPhone} from '../../components/CardMenu';
import {useDispatch, useSelector} from 'react-redux';
import {ProfileDetail} from '../../redux/asyncActions/profile';

const EditPhone = () => {
  const dispatch = useDispatch();
  const profileInfo = useSelector(state => state.profile.detailProfile);
  const token = useSelector(state => state.auth.token);
  React.useEffect(() => {
    dispatch(ProfileDetail(token));
  }, [token, dispatch]);
  return (
    <ScrollView style={styles.wrapper}>
      <View>
        <View>
          <Text style={styles.font6}>
            Add at least one phone number for the transfer ID so you can start
            transfering your money to another user.
          </Text>
        </View>
        <CardPhone
          title="Primary"
          phone={profileInfo.phonenumber}
          icon="trash"
        />
      </View>
    </ScrollView>
  );
};

export default EditPhone;
