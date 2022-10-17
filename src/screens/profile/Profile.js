import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  THIRD_COLOR,
  FOURTH_COLOR,
} from '../../styles/constant';
import {CardName} from '../../components/CardMenu';
import {useDispatch, useSelector} from 'react-redux';
import {ProfileDetail} from '../../redux/asyncActions/profile';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const profileInfo = useSelector(state => state.profile.detailProfile);
  const token = useSelector(state => state.auth.token);
  React.useEffect(() => {
    dispatch(ProfileDetail(token));
  }, [token, dispatch]);
  return (
    <ScrollView style={styleslocal.wrapper}>
      <View>
        <Text style={styleslocal.text1}>
          We got your personal information from the sign up proccess. If you
          want to make changes on your information, contact our support.
        </Text>
      </View>
      <CardName headname="First Name" contentname={profileInfo.fullname} />
      <CardName headname="Username" contentname={profileInfo.username} />
      <CardName headname="Verified E-mail" contentname={profileInfo.email} />
      <TouchableOpacity onPress={() => navigation.navigate('Add Phone')}>
        <CardName
          headname="Phone Number"
          contentname={profileInfo.phonenumber}
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styleslocal = StyleSheet.create({
  wrapper: {
    marginHorizontal: 10,
  },
  card: {
    height: 50,
    backgroundColor: SECONDARY_COLOR,
    borderRadius: 15,
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text1: {
    marginTop: 20,
    marginBottom: 30,
    fontSize: 20,
    fontWeight: '400',
    color: PRIMARY_COLOR,
  },
});

export default Profile;
