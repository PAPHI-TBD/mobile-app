import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';

// Import your components
import Home from './components/home/index';
import Feed from './components/feed/feed';
import Post from './components/post/post';
import Chat from './components/chat/chatLandingPage/chat';
import Profile from './components/profile/profile';
import SplashPage from './components/splashLoginRegistration/splashPage'; // Import your LogoPage component
import SplashPageButtons from './components/splashLoginRegistration/splashPageButtons';
import LoginPage from './components/splashLoginRegistration/login/login'; // Import your LoginPage component
import RegistrationPage from './components/splashLoginRegistration/registration/registration'; // Import your RegistrationPage component

export default function App() {
  const Stack = createStackNavigator();

  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashPage" screenOptions={{ headerShown: false }}>
          {/* Include your pages here */}
            {/* COMMENT OUT STACK SCREEN FOR TESTING */}
              {/* MAKE SURE IN THE FUTURE CHECK IF THE USER HAS LOGGED IN/STAYED LOGGED IN THEN SKIP TO MainTabs */}
            <Stack.Screen name="SplashPage" component={SplashPage} />
            <Stack.Screen name="SplashPageButtons" component={SplashPageButtons} />
            <Stack.Screen name="LoginPage" component={LoginPage} />
            <Stack.Screen name="RegistrationPage" component={RegistrationPage} />
          {/* Your bottom tabs navigation */}
          <Stack.Screen name="MainTabs" component={MainTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}

// Define your bottom tabs navigation
function MainTabs() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // Hide the top bar (header)
      }}>
      <Tab.Screen 
        name="Home" 
        component={Home} 
      />
      <Tab.Screen 
        name="Feed" 
        component={Feed} 
      />
      <Tab.Screen 
        name="Post" 
        component={Post} 
      />
      <Tab.Screen 
        name="Messages" 
        component={Chat} 
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
      />
    </Tab.Navigator>
  );
}
