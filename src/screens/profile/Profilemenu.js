import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {PRIMARY_COLOR} from '../../styles/constant';
import styles from '../../styles/global';
import Icon from 'react-native-vector-icons/Ionicons';
import {CardMenu} from '../../components/CardMenu';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../redux/reducers/auth';
import {ProfileDetail} from '../../redux/asyncActions/profile';

const Profilemenu = ({navigation}) => {
  const dispatch = useDispatch();
  const profileInfo = useSelector(state => state.profile.detailProfile);
  const token = useSelector(state => state.auth.token);
  const onLogout = () => {
    dispatch(logout());
  };
  React.useEffect(() => {
    dispatch(ProfileDetail(token));
  }, [token, dispatch]);
  return (
    <>
      <ScrollView style={styles.wrapper}>
        <View style={styleslocal.wrapper}>
          <View style={styleslocal.picture}>
            <Image />
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Edit Profile')}>
              <Text>
                <Icon name="pencil" />
                Edit
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styleslocal.text1}>{profileInfo.fullname}</Text>
          </View>
          <View>
            <Text style={styleslocal.text1}>{profileInfo.phonenumber}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Personal Info')}>
          <CardMenu menu="Personal Information" icon="caret-forward" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Change Password')}>
          <CardMenu menu="Change Password" icon="caret-forward" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
          <CardMenu menu="Change Pin" icon="caret-forward" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onLogout}>
          <CardMenu menu="Logout" />
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

const styleslocal = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 100,
  },
  picture: {
    height: 100,
    width: 100,
    backgroundColor: PRIMARY_COLOR,
    marginBottom: 15,
    borderRadius: 15,
  },
  text1: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: '400',
    color: PRIMARY_COLOR,
  },
});

export default Profilemenu;
