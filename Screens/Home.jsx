import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/AntDesign';
import PostsScreen from './PostsScreen';
import CreatePostsScreen from './CreatePostsScreen';
import ProfileScreen from './ProfileScreen';

const Tabs = createBottomTabNavigator();

const Home = () => {
  return (
    <View style={styles.container}>
      <Tabs.Navigator
        initialRouteName='Posts'
        screenOptions={({ route, navigation }) => ({
          tabBarOptions: {
            showLabel: false, 
          },
          tabBarStyle: [
            {
            height: 70,
            width: '100%',
            display: 'flex'
          },
          null,
          ],
          
          tabBarIcon: ({ color, size, focused }) => {
            let iconName;

            if (route.name === "PostsScreen") {
              iconName = "appstore-o";
            } else if (route.name === "CreatePostsScreen") {
              iconName = "plus";
            } else if (route.name === "ProfileScreen") {
              iconName = "user";
            }

            return (
              <Pressable
                onPress={() => navigation.navigate(route.name)}
                style={({ pressed }) => [
                  styles.tabBarButton,
                  { opacity: pressed ? 0.5 : 1 }
                ]}
              >
                <View
                  style={{
                    ...styles.buttonContainer,
                    backgroundColor: focused ? "#FF6C00" : "#fff",
                  }}
                >
                  <Icon
                    name={iconName}
                    size={24}
                    color={focused ? "#fff" : "#212121"}
                  />
                </View>
              </Pressable>
            );
          },
        })}
        tabBarOptions={{
          showLabel: false,
        }}
      >
        <Tabs.Screen
          name='PostsScreen'
          component={PostsScreen}
          initialParams={{ post: null }}
          options={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
        />
        <Tabs.Screen
          name='CreatePostsScreen'
          component={CreatePostsScreen}
          options={{ 
            headerShown: false,
            tabBarStyle: {
              display: 'none',
          }, }}
        />
        <Tabs.Screen
          name='ProfileScreen'
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
      </Tabs.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBarButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: 70,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
});

export default Home;
