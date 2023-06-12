import React from 'react';
import photoBG from "../photoBG.jpg";
import Icon from "react-native-vector-icons/AntDesign";
import { View, Image, TextInput, TouchableOpacity, Text, Pressable, StyleSheet, ImageBackground } from 'react-native';

const RegistrationScreen = () => {
  return (
    <ImageBackground
      source={photoBG}
      style={styles.backgroundImage}
      imageStyle={styles.backgroundImageStyle}
    >
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Image style={styles.profileImage}></Image>
          <Icon style={styles.icon} name="pluscircleo" />

          <Text style={styles.titleHeader}>Реєстрація</Text>

          <View style={styles.containerInput}>
          <TextInput style={styles.input} placeholder="Логін" />
          <TextInput style={styles.input} placeholder="Адреса електронної пошти" />
          <TextInput style={[styles.input, styles.lastChildInput]} placeholder="Пароль" secureTextEntry={true} />

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
    top: 20,
  },
  formContainer: {
    width: '100%',
    height: '70%',
    backgroundColor: 'white',
    alignItems: 'center',
    marginRight: 16,
    marginLeft: 16,
  },
  profileImage: {
    width: 120,
    height: 120,
    top: -60,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
  },
  icon: {
    position: "absolute",
    top: 21,
    right: 125,
    color: "#FF6C00",
    fontSize: 25,
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
    top: -60,
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
    top: -60,
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
    bottom: 30,
    top: 0,
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
    top: -60,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginLink: {
    marginTop: 16,
    color: '#1B4371',
    textDecorationLine: 'underline',
    textAlign: 'center',
    top: -60,
  },
});

export default RegistrationScreen;
