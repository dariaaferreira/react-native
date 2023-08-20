import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/selectors";
import * as ImagePicker from "expo-image-picker";
import { updateUser } from "../redux/operations";
import { logoutUser } from "../redux/operations";
import { getFilterPost } from "../redux/selectors";

import { Post } from '../Components/Post';
import photoBG from '../../Images/photoBG.jpg';
import Avatar from '../../Images/Avatar.jpg';
import Icon from 'react-native-vector-icons/AntDesign';
import IconLogOut from 'react-native-vector-icons/MaterialIcons';


const ProfileScreen = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { login, email, uri, uid } = useSelector(getUser);
  const posts = useSelector(getFilterPost(email));
  const navigation = useNavigation();
  const dispatch = useDispatch();

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
      setSelectedImage(result.assets[0].uri);
      dispatch(updateUser({ uid, selectedImage, login, email }));
    }
  };

  return (
    <ImageBackground source={photoBG} style={styles.imageBg}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          {selectedImage ? (
              <ImageBackground
                source={{ uri: selectedImage }}
                style={styles.image}
              ></ImageBackground>
            ) : (<ImageBackground
              source={uri ? { uri: uri } : Avatar}
              style={{
                ...styles.image,
                borderBottom: 1,
                borderColor: "#BDBDBD",
              }}
            ></ImageBackground>
          )}

          <Icon 
            style={styles.icon} 
            size={25}
            name='closecircleo' 
            onPress={handleSelectImage}
          />
        </View>
        <IconLogOut 
          name='logout' 
          style={styles.iconLogOut} 
          size={24} 
          onPress={() => {
            dispatch(logoutUser());
            navigation.navigate("Login");
          }}
        />
        <Text style={styles.text}>{login}</Text>

        <ScrollView style={{ width: 400, marginTop: 70, paddingHorizontal: 20 }}>
          {posts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  imageBg: {
    flex: 1,
  },
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    width: '100%',
    height: 549,
    marginTop: 'auto',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: 'relative',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 16,
    overflow: 'hidden',
  },
  icon: {
    position: 'absolute',
    top: 80,
    right: -12,
    color: '#E8E8E8',
    fontSize: 25,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 16,
    position: 'absolute',
    top: -60,
    left: '50%',
    transform: [{ translateX: -50 }],
  },
  iconLogOut: {
    position: 'absolute',
    right: 16,
    top: 22,
    color: '#BDBDBD',
  },
  text: {
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35.16,
    color: '#212121',
    textAlign: 'center',
    top: 87,
    marginBottom: 20,
  },
});

export default ProfileScreen;