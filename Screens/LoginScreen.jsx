import React, { useState } from 'react';
import { KeyboardAvoidingView, 
  View, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  Text, 
  Pressable, 
  StyleSheet, 
  TouchableWithoutFeedback,
  Keyboard } from 'react-native';
import photoBG from '../photoBG.jpg';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const onLogin = () => {
    console.log('Увійти натиснуто');
    console.log('Email:', email);
    console.log('Password:', password);

    setEmail('');
    setPassword('');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image
          source={photoBG}
          style={styles.backgroundImage}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1, justifyContent: 'flex-end' }}
        >
          <View style={styles.formContainer}>
            <Text style={styles.titleHeader}>Увійти</Text>

            <View style={styles.containerInput}>
              <TextInput
                style={styles.input}
                placeholder="Адреса електронної пошти"
                value={email}
                onChangeText={setEmail}
              />
              <TextInput
                style={[styles.input, styles.lastChildInput]}
                placeholder="Пароль"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />

              <Pressable 
                style={styles.showPasswordButton}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Text style={styles.textInput}>Показати</Text>
              </Pressable>
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={onLogin}
            >
              <Text style={styles.buttonText}>Увійти</Text>
            </TouchableOpacity>

            <View style={styles.loginLinkContainer}>
              <Text style={styles.loginLinkText}>Немає акаунту?</Text>
              <TouchableOpacity>
                <Text style={styles.loginLink}>Зареєструватися</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'cover',
    zIndex: -1,
  },
  formContainer: {
    width: '100%',
    height: '60%',
    marginTop: 'auto',
    position: 'absolute',
    backgroundColor: 'white',
    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  titleHeader: {
    marginTop: 33,
    marginBottom: 33,
    alignSelf: 'center',
    fontWeight: '500',
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
    letterSpacing: 0.01,
    color: '#212121',
  },
  input: {
    width: 343,
    height: 50,
    borderColor: '#E8E8E8',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
  },
  lastChildInput: {
    marginBottom: 43,
  },
  containerInput: {
    position: 'relative',
  },
  textInput: {
    color: '#1B4371',
    fontSize: 16,
    lineHeight: 18.75,
    fontWeight: 400,
  },
  showPasswordButton: {
    position: 'absolute',
    right: 5,
    bottom: 0,
    top: 23,
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: '#FF6C00',
    width: 343,
    alignItems: 'center',
    padding: 16,
    height: 51,
    borderRadius: 100,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginLinkContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  loginLinkText: {
    color: '#1B4371',
  },
  loginLink: {
    marginLeft: 3,
    textDecorationLine: 'underline',
    color: '#1B4371',
  },
});

export default LoginScreen;