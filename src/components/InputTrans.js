import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const InputTrans = ({
  placeholder,
  type,
  onChange,
  value,
  defaultValue,
  icon,
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.iconWrapper}>
        <Icon name={icon} size={20} color="grey" />
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder={placeholder}
          keyboardType={type}
          onChange={onChange}
          value={value}
          defaultValue={defaultValue}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3,
    flexDirection: 'row',
    height: 50,
  },
  iconWrapper: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputWrapper: {
    flex: 1,
  },
});

export default InputTrans;
