import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Avatar from '../Images/Avatar.jpg';
import { Header } from "../Components/Header";

const PostsScreen = () => (
  <View style={styles.container}>
    <Header
      pageTitle="Публікації"
      showLogoutButton={true}
      // onBackButtonPress={() => navigation.navigate("Login")}
    />

    <View style={styles.user}>
      <Image
        source={Avatar}
        style={styles.avatar}
      />

      <View style={styles.description}>
        <Text style={styles.name}>Natali Romanova</Text>
        <Text>email@example.com</Text>
      </View>
    </View>
  </View>
);

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
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  description: {
    flexDirection: 'column',
    marginLeft: 8,
  },
  name: {
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 15.23,
  },
});

export default PostsScreen;
