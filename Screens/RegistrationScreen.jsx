import React from 'react';
import { KeyboardAvoidingView, View, Image, TextInput, TouchableOpacity, Text, Pressable, StyleSheet, ImageBackground } from 'react-native';
import photoBG from '../photoBG.jpg';
import Icon from 'react-native-vector-icons/AntDesign';

const RegistrationScreen = () => {
  return (
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
            <Image style={styles.profileImage} />
            <Icon style={styles.icon} name='pluscircleo' />
            <Text style={styles.titleHeader}>Реєстрація</Text>

            <View style={styles.containerInput}>
              <TextInput style={styles.input} placeholder='Логін' />
              <TextInput style={styles.input} placeholder='Адреса електронної пошти' />
              <TextInput style={[styles.input, styles.lastChildInput]} placeholder='Пароль' secureTextEntry={true} />

              <Pressable style={styles.showPasswordButton}>
                <Text style={styles.textInput}>Показати</Text>
              </Pressable>
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => console.log('Зареєструватися натиснуто')}
            >
              <Text style={styles.buttonText}>Зареєструватися</Text>
            </TouchableOpacity>
            <Text style={styles.loginLink}>Вже є акаунт? Увійти</Text>
          </View>

      </KeyboardAvoidingView>
    </View>

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
  profileImage: {
    width: 120,
    height: 120,
    top: -60,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
  },
  icon: {
    position: 'absolute',
    top: 21,
    right: 125,
    color: '#FF6C00',
    fontSize: 25,
  },
  titleHeader: {
    marginTop: -27,
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
    fontWeight: '400',
  },
  showPasswordButton: {
    position: 'absolute',
    right: 5,
    bottom: 5,
    top: 100,
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
  loginLink: {
    marginTop: 16,
    color: '#1B4371',
    textAlign: 'center',
  },
});

export default RegistrationScreen;
