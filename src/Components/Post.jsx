import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
} from 'react-native';
import IconLike from 'react-native-vector-icons/AntDesign'; 
import IconComment from 'react-native-vector-icons/FontAwesome'; 
import IconLocation from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { addLike } from '../redux/operations';
import { useDispatch } from 'react-redux';

export const Post = ({ post }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(addLike({ postId: post.id, email: post.email }));
  };
  
  return (
    <View
      style={[styles.container, 
      'Profile' ? styles.profileContainer : null]}
    >

    <ImageBackground 
      source={{ uri: post.url }} 
      style={styles.image} 
    />

    <Text style={{ ...styles.text, marginTop: 8, marginBottom: 8 }}>{post.name}</Text>

    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 25,
          }}
        >
          <IconComment
              name='comment'
              size={24}
              style={{
                color: post.comments?.length > 0 ? '#FF6C00' : '#BDBDBD',
              }}
              onPress={() => {
                navigation.navigate('Comments', { post });
              }}
            />

            <Text style={styles.text}>{post.comments?.length || 0}</Text>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <IconLike
              name='like2'
              size={24}
              style={{ color: post.likes?.length > 0 ? '#FF6C00' : '#BDBDBD' }}
              onPress={handleLike}
            />
            <Text style={styles.text}>{post.likes?.length ?? 0}</Text>
        </View>
      </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <IconLocation
            name='location-outline'
            size={24}
            style={{
              color: '#BDBDBD',
              opacity: 0.5,
            }}
            onPress={() => navigation.navigate('Map', { post })}
          />
          <Text style={{ ...styles.text, textDecorationLine: 'underline' }}>
            {post.location}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 240,
    backgroundColor: '#BDBDBD',
    borderRadius: 16,
    marginBottom: 8,
    marginTop: 32,
    overflow: 'hidden',
  },
  text: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 19,
    textAlign: 'left',
    color: '#212121',
    marginLeft: 8,
  },
});