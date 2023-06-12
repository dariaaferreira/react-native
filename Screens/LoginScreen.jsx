import React from 'react';
import photoBG from "../photoBG.jpg";
import Icon from "react-native-vector-icons/AntDesign";
import { View, TextInput, TouchableOpacity, Text, Pressable, StyleSheet, ImageBackground } from 'react-native';

const LoginScreen = () => {
  return (
    <ImageBackground
      source={photoBG}
      style={styles.backgroundImage}
      imageStyle={styles.backgroundImageStyle}
    >
      <View style={styles.container}>
        <View style={styles.formContainer}>


          <Text style={styles.titleHeader}>Увійти</Text>

          <View style={styles.containerInput}>
          <TextInput style={styles.input} placeholder="Адреса електронної пошти" />
          <TextInput style={[styles.input, styles.lastChildInput]} placeholder="Пароль" secureTextEntry={true} />

          <Pressable style={styles.showPasswordButton}>
            <Text style={styles.textInput}>Показати</Text>
          </Pressable>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log('Увійти натиснуто')}
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
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  backgroundImageStyle: {
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    top: 30,
  },
  formContainer: {
    width: '100%',
    height: '70%',
    backgroundColor: 'white',
    alignItems: 'center',
    marginRight: 16,
    marginLeft: 16,
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
    position: "relative",
  },
  textInput: {
    color: "#1B4371",
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
    justifyContent: 'center',
    alignItems: 'center', 
    marginTop: 16,
  },
  loginLinkText: {
    color: '#1B4371',
    textAlign: 'center',
    marginRight: 3,
  },
  loginLink: {
    color: '#1B4371',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});

export default LoginScreen;
