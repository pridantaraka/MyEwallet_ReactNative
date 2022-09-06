// import {Center} from 'native-base';
import {StyleSheet, Dimensions} from 'react-native';
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  THIRD_COLOR,
  FOURTH_COLOR,
} from './constant';

const styles = StyleSheet.create({
  wrapper: {
    height: Dimensions.get('screen').height,
    marginTop: 20,
  },
  wrapperName: {
    flexDirection: 'column',
  },
  wrapHistory: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 20,
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
  LogoTrans: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  picture: {
    height: 50,
    width: 50,
    backgroundColor: PRIMARY_COLOR,
  },
  font1: {
    fontWeight: '800',
    fontSize: 18,
    color: PRIMARY_COLOR,
  },
  font2: {
    color: 'white',
  },
  font3: {
    fontWeight: '800',
    fontSize: 18,
    color: 'white',
  },
  font4: {
    fontWeight: '800',
    fontSize: 18,
    color: PRIMARY_COLOR,
    textAlign: 'center',
  },
});

export default styles;
