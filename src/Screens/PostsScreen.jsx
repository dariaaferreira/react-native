import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getUser, getAllPosts } from '../redux/selectors';
import { getPostsData } from '../redux/operations';
import Avatar from '../../Images/Avatar.jpg';
import { Header } from '../Components/Header';
import { Post } from '../Components/Post';

const PostsScreen = () => {
  const [loading, setLoading] = useState(true);
  const { uri, email, login } = useSelector(getUser);
  const posts = useSelector(getAllPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsData()).then(() => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Text> </Text>;
  }

  // console.log(uri);
  // console.log(email);
  // console.log(login);

  return (
    <View style={styles.container}>
      <Header pageTitle='Публікації' showLogoutButton={true} />

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
});

export default PostsScreen;
