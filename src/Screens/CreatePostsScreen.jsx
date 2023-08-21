import React, { useState, useEffect } from 'react';
import {
  View,
  ImageBackground,
  TextInput,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  Pressable,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../Components/Header';
import IconFlipCamera from 'react-native-vector-icons/MaterialCommunityIcons';
import IconCamera from 'react-native-vector-icons/FontAwesome';
import IconTrash from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as Location from 'expo-location';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch } from "react-redux";
import { addPost } from "../redux/operations";
import { useSelector } from "react-redux";
import { getEmail } from "../redux/selectors";

const CreatePostsScreen = () => {
  const [cameraRef, setCameraRef] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [uri, setUri] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [geoLocation, setGeoLocation] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const email = useSelector(getEmail);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    const requestLocationPermission = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        let location = await Location.getCurrentPositionAsync({});
        const coords = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        };
        setGeoLocation(coords);
        return coords;
      }
    };
    requestLocationPermission();
  }, []);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleTakePicture = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      await MediaLibrary.createAssetAsync(uri);
      setUri(uri);
    }
  };

  const handleAddPost = async () => {
    if (name.trim() === "" || location.trim() === "") {
      return;
    }
    
    const post = {
      name: name.trim(),
      location: location.trim(),
      geoLocation,
      uri: selectedImage,
      email,
    };

    dispatch(addPost(post));
    resetForm();
    navigation.navigate("Home");
  };

  const resetForm = () => {
    setName("");
    setLocation("");
    setUri(null);
    setSelectedImage(null);
  };

  const isFormValid = name.trim() !== "" && location.trim() !== "" && (uri || selectedImage);

  const handleSelectImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.uri);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Header
          pageTitle='Створити публікацію'
          showBackButton={true}
          onBackButtonPress={() => navigation.goBack()}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
        >
        <ScrollView style={{ width: 400, marginTop: 70, paddingHorizontal: 20 }}>
          {uri ? (
            <ImageBackground 
              style={styles.postImage} 
              source={{ uri: uri }}
            >
              <View style={{
                    ...styles.icon,
                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                  }}>
                <IconCamera
                  name='camera'
                  size={24}
                  style={{ color: '#BDBDBD', opacity: 0.5 }}
                  onPress={() => setUri(null)}
                />
              </View>
            </ImageBackground>
            ) : selectedImage ? (
              <ImageBackground
                source={{ uri: selectedImage }}
                style={styles.postImage}
              >
                <View style={styles.icon}>
                  <IconCamera
                    name="camera"
                    size={24}
                    style={{ color: "#BDBDBD" }}
                    onPress={() => setSelectedImage(null)}
                  />
                </View>
              </ImageBackground>
            ) : (
            <Camera style={styles.image} type={type} ref={setCameraRef}>
              <View>
                <TouchableOpacity
                  style={styles.flipContainer}
                  onPress={() => {
                    setType(
                      type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                  }}
                >
                  <IconFlipCamera
                    name='camera-flip-outline'
                    size={24}
                    style={{
                      color: '#BDBDBD',
                      opacity: 0.1,
                    }}
                  />
                </TouchableOpacity>

                <View style={styles.icon}>
                  <IconCamera
                    name='camera'
                    size={24}
                    style={{ color: '#BDBDBD', opacity: 0.1 }}
                    onPress={handleTakePicture}
                  />
                </View>
              </View>
            </Camera>
          )}
          <Pressable 
            onPress={() => {
              handleSelectImage();
            }} 
          >
            <Text style={styles.buttonText}>Завантажте фото</Text>
          </Pressable>


            <View style={styles.containerInput}>
              <TextInput
                style={styles.input}
                placeholder='Назва...'
                value={name}
                onChangeText={setName}
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
                value={location}
                onChangeText={setLocation}
              />
            </View>
            <Pressable onPress={handleAddPost}>
              <View
                style={[
                  styles.button,
                  { backgroundColor: isFormValid ? '#FF6C00' : '#F6F6F6' },
                ]}
              >
                <Text
                  style={[
                    styles.textButton,
                    { color: isFormValid ? '#fff' : '#BDBDBD' },
                  ]}
                >
                  Опубліковати
                </Text>
              </View>
            </Pressable>

            <Pressable style={styles.iconRemove}>
              <IconTrash
                name='trash-2'
                size={24}
                style={{ color: '#BDBDBD' }}
                onPress={resetForm}
              />
            </Pressable>
            </ScrollView>
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
    // justifyContent: 'center',
    alignItems: 'center',
  },
  postImage: {
    width: 343,
    height: 240,
    backgroundColor: '#E8E8E8',
    borderRadius: 8,
    // marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  icon: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.5,
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
    marginBottom: 100,
  },
  buttonText: {
    color: '#BDBDBD',
    fontSize: 16,
  },
  iconRemove: {
    width: 70,
    height: 40,
    backgroundColor: '#F6F6F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 32,
    borderRadius: 20,
  },
  flipContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    top: 0,
    left: 0,
    transform: [{ translateX: -130 }, { translateY: -80 }],
  },
});

export default CreatePostsScreen;
