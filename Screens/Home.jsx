import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/AntDesign';
import PostsScreen from './PostsScreen';
import CreatePostsScreen from './CreatePostsScreen';
import ProfileScreen from './ProfileScreen';

const Tabs = createBottomTabNavigator();

const Home = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "PostsScreen") {
            iconName = 'appstore-o';
          } else if (route.name === 'CreatePostsScreen') {
            iconName = 'plus';
          } else if (route.name === 'ProfileScreen') {
            iconName = 'user';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showLabel: false,
      }}
    >
      <Tabs.Screen
        name='PostsScreen'
        component={PostsScreen}
        options={{ headerShown: false }}
      />
      <Tabs.Screen
        name='CreatePostsScreen'
        component={CreatePostsScreen}
        options={{ headerShown: false }}
      />
      <Tabs.Screen
        name='ProfileScreen'
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tabs.Navigator>
  );
};

export default Home;