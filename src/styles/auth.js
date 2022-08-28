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
    overflow: 'hidden',
  },
  fontP: {
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center',
    color: PRIMARY_COLOR,
  },
  fontH: {
    fontWeight: '700',
    fontSize: 24,
    textAlign: 'center',
    color: PRIMARY_COLOR,
  },
  fontWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    height: Dimensions.get('screen').width / 2,
    justifyContent: 'center',
  },
  content: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    height: (Dimensions.get('screen').height * 80) / 100,
    backgroundColor: THIRD_COLOR,
    paddingHorizontal: 20,
    paddingVertical: 50,
    elevation: 5,
  },
  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  button: {
    backgroundColor: SECONDARY_COLOR,
    width: (Dimensions.get('screen').width * 90) / 100,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: '400',
    fontSize: 16,
  },
  inputWrapper: {
    marginBottom: 15,
    marginTop: 15,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    height: 250,
    overflow: 'hidden',
  },
  headerText: {
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#000000c0',
    fontSize: 30,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  fontForgot: {
    textAlign: 'right',
    color: PRIMARY_COLOR,
    fontSize: 16,
    fontWeight: '400',
  },
  pinRow: {
    flexDirection: 'row',
    flex: 1,
    width: Dimensions.get('screen').width,
  },
});

export default styles;
