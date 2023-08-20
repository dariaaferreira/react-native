import React from 'react';
import { StyleSheet, Text, View, Image,ScrollView } from 'react-native';
import Avatar from '../../Images/Avatar.jpg';
import { Header } from '../Components/Header';
import { Post } from '../Components/Post';
import { getUser, getAllPosts } from "../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPostsData } from "../redux/operations";

const PostsScreen = ({ route }) => {
  const { login, email, uri } = useSelector(getUser);
  const posts = useSelector(getAllPosts);
  const dispatch = useDispatch();
  const selectedImage = route.params?.selectedImage;

  useEffect(() => {
    dispatch(getPostsData());
  }, []);

  return (
    <View style={styles.container}>
      <Header
        pageTitle='Публікації'
        showLogoutButton={true}
      />

      <View style={styles.user}>

      {uri ? (
        <Image source={{ uri: uri }} style={styles.avatar} />
      ) : (
        <Image source={Avatar} style={styles.avatar} />
      )}

        <View style={styles.description}>
          <Text style={styles.name}>{login}</Text>
          <Text>{email}</Text>
        </View>
      </View>

      {selectedImage && (
        <View style={styles.selectedImageContainer}>
          <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
        </View>
      )}

      <View style={styles.post}>
      <ScrollView style={{ marginBottom: 150, paddingHorizontal: 10 }}>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ScrollView>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 720,
    paddingTop: 32,
    backgroundColor: '#fff',
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 16,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  description: {
    flexDirection: 'column',
    marginLeft: 8,
    marginBottom: 10,
  },
  name: {
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 15.23,
  },
  post: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  selectedImageContainer: {
    width: 343,
    height: 240,
    backgroundColor: '#E8E8E8',
    borderRadius: 8,
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  selectedImage: {
    width: '100%',
    height: '100%',
  },
});

export default PostsScreen;
