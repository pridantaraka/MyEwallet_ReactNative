import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const InputLogin = ({
  placeholder,
  icon,
  type,
  secure,
  onChange,
  value,
  defaultValue,
}) => {
  const [showText, setShow] = React.useState(false);
  return (
    <View style={styles.wrapper}>
      <View style={styles.iconWrapper}>
        <Icon name={icon} size={20} color="grey" />
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder={placeholder}
          keyboardType={type}
          secureTextEntry={!showText}
          onChangeText={onChange}
          value={value}
          defaultValue={defaultValue}
        />
      </View>
      {secure && (
        <TouchableOpacity onPress={() => setShow(!showText)}>
          <View style={styles.iconWrapper}>
            <Icon
              name={showText ? 'eye-off-outline' : 'eye-outline'}
              size={20}
            />
          </View>
        </TouchableOpacity>
      )}
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

export default InputLogin;
