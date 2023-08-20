import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from './src/Screens/RegistrationScreen';
import LoginScreen from './src/Screens/LoginScreen';
import Home from "./src/Screens/Home";
import CommentsScreen from './src/Screens/CommentsScreen';
import MapScreen from './src/Screens/MapScreen';
import PostsScreen from './src/Screens/PostsScreen';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const MainStack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="Login">
          <MainStack.Screen 
            name="Registration" 
            component={RegistrationScreen}  
            options={{ headerShown: false }} 
          />
          <MainStack.Screen 
            name="Login" 
            component={LoginScreen}  
            options={{ headerShown: false }} 
          />
          <MainStack.Screen 
            name="Home"
            component={Home}
            options={{ headerShown: false }} 
          />
          <MainStack.Screen
            name="Posts"
            component={PostsScreen}
            options={{ headerShown: false }}
          />
          <MainStack.Screen
            name="Comments"
            component={CommentsScreen}
            options={{ headerShown: false }}
          />
          <MainStack.Screen
            name="Map"
            component={MapScreen}
            options={{
              headerShown: false,
            }}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}