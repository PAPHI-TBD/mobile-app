import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';

// all the main tabs
import Home from './components/home/index';
import Feed from './components/feed/feed';
import Post from './components/post/post';
import Chat from './components/chat/chatLandingPage/chat';
import Profile from './components/profile/profile';
// for testing
import logoPage from './components/logo/logoPage';
import loginPage from './components/login/login';
import registrationPage from './components/registration/registration';

// we use gluestack-ui

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <GluestackUIProvider config={config}>
      {/* bottom tabs */}
      <NavigationContainer>
      <Tab.Navigator
          screenOptions={{
            headerShown: false, // Hide the top bar (header)
        }}>
        <Tab.Screen 
          name="Home" 
          // component={Home} 

          // for testing comment out Home and uncomment out the page you want to see
          // component={logoPage}
          // component={loginPage}
          // component={registrationPage}
          // component={Feed} 
          component={Profile}
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
    </NavigationContainer>
    </GluestackUIProvider>
  );
}