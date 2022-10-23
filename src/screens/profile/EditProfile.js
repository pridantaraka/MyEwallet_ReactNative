import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  THIRD_COLOR,
  FOURTH_COLOR,
} from '../../styles/constant';
import styles from '../../styles/global';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

const EditProfile = ({navigation}) => {
  const [fullname, setFullname] = useState();
  const [phonenumber, setPhonenumber] = useState();
  // const dispatch = useDispatch();
  return (
    <ScrollView style={styles.wrapper}>
      <View>
        <View>
          <Text style={styles.font6}>Edit fullname and phone number.</Text>
        </View>
        <View>
          <TextInput
            style={styleslocal.inputText}
            placeholder="Edit Fullname"
            onChangeText={newFullname => setFullname(newFullname)}
            initialValue={fullname}
          />
          <TextInput
            style={styleslocal.inputText}
            placeholder="Phonenumber"
            onChangeText={newPhonenumber => setPhonenumber(newPhonenumber)}
            initialValue={phonenumber}
          />
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.font2}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
const styleslocal = StyleSheet.create({
  inputText: {
    borderBottomWidth: 1,
    borderBottomColor: SECONDARY_COLOR,
    marginVertical: 20,
  },
});

export default EditProfile;
