import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

enum SingInType {
  Phone,
  Email,
  Google,
  Apple,
}

const Login = () => {
  const [countryCode, setCountryCode] = useState('+90');
  const [phoneNumber, setPhoneNumber] = useState('');
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 90 : 0;

  const onSignin = async (type: SingInType) => {
    if (type === SingInType.Phone) {
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior='padding'
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.header}>Welcome back!</Text>
        <Text style={defaultStyles.descriptionText}>
          Enter the phone number associated with your account
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='Country Code'
            keyboardType='numeric'
            placeholderTextColor={Colors.gray}
            value={countryCode}
          />
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder='Mobile number'
            keyboardType='numeric'
            placeholderTextColor={Colors.gray}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>
        <Pressable
          style={[
            defaultStyles.pillButton,
            phoneNumber !== '' ? styles.enabled : styles.disabled,
            { marginBottom: 20 },
          ]}
          onPress={() => onSignin(SingInType.Phone)}
        >
          <Text style={defaultStyles.buttonText}>Continue</Text>
        </Pressable>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
          <View
            style={{
              flex: 1,
              height: StyleSheet.hairlineWidth,
              backgroundColor: Colors.gray,
            }}
          />
          <Text style={{ color: Colors.gray, fontSize: 20 }}>or</Text>
          <View
            style={{
              flex: 1,
              height: StyleSheet.hairlineWidth,
              backgroundColor: Colors.gray,
            }}
          />
        </View>
        <Pressable
          onPress={() => onSignin(SingInType.Email)}
          style={[
            defaultStyles.pillButton,
            {
              gap: 16,
              flexDirection: 'row',
              marginTop: 20,
              backgroundColor: 'white',
            },
          ]}
        >
          <Ionicons name='mail' size={24} color={'#000'} />
          <Text style={[defaultStyles.buttonText, { color: '#000' }]}>
            Continue with email
          </Text>
        </Pressable>
        <Pressable
          onPress={() => onSignin(SingInType.Google)}
          style={[
            defaultStyles.pillButton,
            {
              gap: 16,
              flexDirection: 'row',
              marginTop: 20,
              backgroundColor: 'white',
            },
          ]}
        >
          <Ionicons name='logo-google' size={24} color={'#000'} />
          <Text style={[defaultStyles.buttonText, { color: '#000' }]}>
            Continue with google
          </Text>
        </Pressable>
        <Pressable
          onPress={() => onSignin(SingInType.Apple)}
          style={[
            defaultStyles.pillButton,
            {
              gap: 16,
              flexDirection: 'row',
              marginTop: 20,
              backgroundColor: 'white',
            },
          ]}
        >
          <Ionicons name='logo-apple' size={24} color={'#000'} />
          <Text style={[defaultStyles.buttonText, { color: '#000' }]}>
            Continue with apple
          </Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    borderRadius: 16,
    fontSize: 20,
    marginRight: 10,
  },
  enabled: {
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.primaryMuted,
  },
});
