import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, View, ImageBackground, TextInput, TouchableOpacity, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, Pressable } from 'react-native';
import { Header } from '../Components/Header';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import IconTrash from 'react-native-vector-icons/Feather';

const CreatePostsScreen = () => {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Header
          pageTitle='Створити публікацію'
          showBackButton={true}
          onBackButtonPress={() => navigation.goBack()}
        />
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
          <ImageBackground style={styles.postImage}>
            <View style={styles.icon}>
              <FontAwesome
                name='camera'
                size={24}
                style={{ color: '#BDBDBD', opacity: 0.5 }}
              />
            </View>
          </ImageBackground>

          <Text style={styles.buttonText}>Завантажте фото</Text>

          <View style={styles.containerInput}>
            <TextInput
              style={styles.input}
              placeholder='Назва...'
            />
            <EvilIcons
              name='location'
              size={24}
              style={{
                position: 'absolute',
                top: 80,
                left: 0,
                color: '#BDBDBD',
                opacity: 0.5,
              }}
            />
            <TextInput
              style={[styles.input, styles.inputIcon, styles.lastChildInput]}
              placeholder='Місцевість...'
            />
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Опубліковати</Text>
          </TouchableOpacity>

          <Pressable style={styles.iconRemove}>
            <IconTrash name='trash-2' size={24} style={{ color: '#BDBDBD' }} />
          </Pressable>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 720,
    paddingTop: 32,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  postImage: {
    width: 343,
    height: 240,
    backgroundColor: '#E8E8E8',
    borderRadius: 8,
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerInput: {
    position: 'relative',
    marginTop: 32,
  },
  input: {
    width: 343,
    height: 50,
    borderColor: '#E8E8E8',
    borderBottomWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  inputIcon: {
    paddingHorizontal: 25,
  },
  lastChildInput: {
    marginBottom: 43,
  },
  button: {
    backgroundColor: '#F6F6F6',
    width: 343,
    alignItems: 'center',
    padding: 16,
    height: 51,
    borderRadius: 100,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#BDBDBD',
    fontSize: 16,
  },
  iconRemove: {
    width: 70,
    height: 40,
    backgroundColor: '#F6F6F6',
    marginTop: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 34,
    borderRadius: 20,
  },
});

export default CreatePostsScreen;
