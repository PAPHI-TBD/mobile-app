import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';

// all the main tabs
import Home from './tabs/index';
import Feed from './tabs/feed';
import Post from './tabs/post';
import Chat from './tabs/chat';
import Profile from './tabs/profile';
import logoPage from './pages/logoPage';
import loginPage from './pages/login';
import registrationPage from './pages/registration';

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
          component={Home} 
          // component={logoPage}
          // component={loginPage}
          // component={registrationPage}
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