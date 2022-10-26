import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  Alert,
} from 'react-native';
import React from 'react';
import {PRIMARY_COLOR} from '../../styles/constant';
import styles from '../../styles/global';
import Icon from 'react-native-vector-icons/Ionicons';
import {CardMenu} from '../../components/CardMenu';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../redux/reducers/auth';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {ProfileDetail, uploadImage} from '../../redux/asyncActions/profile';
import {useState} from 'react';

const Profilemenu = ({navigation}) => {
  const dispatch = useDispatch();
  const [picture, setPicture] = React.useState(null);
  const [uploading, setUpload] = React.useState(false);
  const profileInfo = useSelector(state => state.profile.detailProfile);
  const token = useSelector(state => state.auth.token);
  const [showModal, toggleModal] = useState(false);

  const onUploadImage = async data => {
    await dispatch(uploadImage({data, token}));
    setTimeout(() => setUpload(false), 2000);
  };

  const pickImage = async type => {
    const pict = type
      ? await launchImageLibrary({mediaType: 'photo'})
      : await launchCamera({mediaType: 'photo', maxWidth: 500, maxHeight: 500});
    if (pict.assets) {
      const pickedPic = pict.assets[0];
      setUpload(true);
      setPicture(pickedPic.uri);
      if (pickedPic.fileSize > 1 * 1024 * 1024) {
        Alert.alert('Error', 'Filesize too Big', [
          {
            onPress: () => {
              toggleModal(false);
              setUpload(false);
            },
          },
        ]);
      } else {
        toggleModal(false);
        onUploadImage(pickedPic);
      }
    }
    toggleModal(false);
  };

  const onLogout = () => {
    dispatch(logout());
  };
  React.useEffect(() => {
    dispatch(ProfileDetail(token));
  }, [token, dispatch]);
  return (
    <>
      <Modal transparent={true} visible={showModal}>
        <View style={styles.modal}>
          <View style={styles.innerModal}>
            <TouchableOpacity
              onPress={() => pickImage(true)}
              style={styles.selectBtn}>
              <Text>Select From Galerry</Text>
            </TouchableOpacity>
            <View style={styles.divider} />
            <TouchableOpacity
              onPress={() => pickImage(false)}
              style={styles.selectBtn}>
              <Text>Open Camera</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <ScrollView style={styles.wrapper}>
        <View style={styleslocal.wrapper}>
          <TouchableOpacity onPress={() => toggleModal(true)}>
            <View style={{alignItems: 'center', marginBottom: 10}}>
              <Image
                source={{uri: profileInfo.picture}}
                style={{
                  width: 80,
                  height: 80,
                  aspectRatio: 1,
                  borderRadius: 10,
                }}
              />
            </View>
            {uploading && (
              <View
                style={{
                  backgroundColor: 'rgba(0,0,0,0.3)',
                  paddingVertical: 10,
                  paddingHorizontal: 10,
                  borderRadius: 10,
                }}>
                <Text style={{fontSize: 16}}>Uploading...</Text>
              </View>
            )}
          </TouchableOpacity>
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
