import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
} from 'react-native';

import photoBG from '../Images/photoBG.jpg';
import Avatar from '../Images/Avatar.jpg';
import Icon from 'react-native-vector-icons/AntDesign';
import IconLogOut from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = () => {
  return (
    <ImageBackground source={photoBG} style={styles.imageBg}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageBackground
            source={Avatar}
            style={styles.image}
          ></ImageBackground>
          <Icon 
          style={styles.icon} 
          size={25}
          name='closecircleo' 
          />
        </View>
        <IconLogOut name='logout' style={styles.iconLogOut} size={24} />
        <Text style={styles.text}>Natali Romanova</Text>
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
  },
});

export default ProfileScreen;