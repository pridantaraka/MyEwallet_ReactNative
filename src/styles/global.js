// import {Center} from 'native-base';
import {StyleSheet, Dimensions} from 'react-native';
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  THIRD_COLOR,
  FOURTH_COLOR,
} from './constant';

const styles = StyleSheet.create({
  header: {},
  content: {
    height: Dimensions.get('screen').height,
  },
  contentTrans: {
    height: Dimensions.get('screen').height / 2,
  },
  footer: {
    height: 150,
    justifyContent: 'center',
  },
  wrapper: {
    height: Dimensions.get('screen').height,
    marginTop: 30,
    marginHorizontal: 15,
  },
  wrapperName: {
    flexDirection: 'column',
  },
  wrapHistory: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 20,
  },
  historyName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: FOURTH_COLOR,
    paddingHorizontal: 20,
    borderRadius: 15,
    height: 100,
  },
  Button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    elevation: 3,
    borderRadius: 15,
    marginTop: 30,
    backgroundColor: SECONDARY_COLOR,
  },
  WrappingTrans: {
    marginVertical: 25,
  },
  PinInput: {
    borderBottomWidth: 1,
    width: 50,
  },
  LogoTrans: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  picture: {
    height: 50,
    width: 50,
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 15,
  },
  font1: {
    fontWeight: '800',
    fontSize: 18,
    color: PRIMARY_COLOR,
  },
  font2: {
    fontSize: 16,
    fontWeight: '400',
    color: 'white',
  },
  font3: {
    fontWeight: '800',
    fontSize: 18,
    color: 'white',
  },
  font4: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
  },
  font5: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  font6: {
    fontWeight: '800',
    fontSize: 18,
    color: PRIMARY_COLOR,
    textAlign: 'center',
  },
  font7: {
    fontWeight: '400',
    fontSize: 16,
    color: PRIMARY_COLOR,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
  },
  innerModal: {
    backgroundColor: 'white',
    width: Dimensions.get('screen').width - 100,
    padding: 10,
    borderRadius: 10,
  },
  selectBtn: {
    height: 40,
    justifyContent: 'center',
  },
  divider: {
    height: 1.5,
    backgroundColor: 'black',
  },
});

export default styles;
