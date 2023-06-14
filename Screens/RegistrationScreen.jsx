import React, { useState} from 'react';
import { useNavigation } from '@react-navigation/native';
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
import photoBG from '../Images/photoBG.jpg';
import Icon from 'react-native-vector-icons/AntDesign';

const RegistrationScreen = () => {
  const navigation = useNavigation();
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  const handleInputFocus = (inputText) => {
    setFocusedInput(inputText);
  };

  const handleInputBlur = () => {
    setFocusedInput(null);
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
              <Image 
              style={styles.profileImage} />
              <Icon style={styles.icon} name='pluscircleo' />
              <Text style={styles.titleHeader}>Реєстрація</Text>

              <View style={styles.containerInput}>
                <TextInput 
                  style={[styles.input, focusedInput === "login" && styles.focus]} 
                  placeholder="Логін" 
                  value={login}
                  onChangeText={setLogin}
                  onFocus={() => handleInputFocus("login")}
                  onBlur={handleInputBlur}
                />
                <TextInput 
                  style={[styles.input, focusedInput === "email" && styles.focus]}
                  placeholder="Адреса електронної пошти"
                  value={email}
                  onChangeText={setEmail}
                  onFocus={() => handleInputFocus("email")}
                  onBlur={handleInputBlur}
                />
                <TextInput 
                  style={[styles.input, styles.lastChildInput, focusedInput === "password" && styles.focus]}
                  placeholder="Пароль"
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                  onFocus={() => handleInputFocus("password")}
                  onBlur={handleInputBlur}
                />

                <Pressable 
                  style={styles.showPasswordButton}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Text style={styles.textInput}>{showPassword ? 'Приховати' : 'Показати'}</Text>
                </Pressable>

              </View>

              <TouchableOpacity
                style={styles.button}
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
              >
                <Text style={styles.buttonText}>Зареєструватися</Text>
              </TouchableOpacity>

              <View style={styles.loginLinkContainer}>
                <Text style={styles.loginLinkText}>Вже є акаунт?</Text>
                <TouchableOpacity 
                  title="Go to Login"
                  onPress={() => navigation.navigate("Login")}
                  >
                  <Text style={styles.loginLink}>Увійти</Text>
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
    height: '68%',
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
  focus: {
    borderColor: "#FF6C00",
    borderWidth: 1,
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

export default RegistrationScreen;
