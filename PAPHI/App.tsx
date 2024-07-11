import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';

import { RootStackParamList } from './types';

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
import HangRequest from './components/hangRequest/hangRequest';
import Birthday from './components/splashLoginRegistration/registration/registrationPages/birthday';
import Gender from './components/splashLoginRegistration/registration/registrationPages/gender';
import Password from './components/splashLoginRegistration/registration/registrationPages/password';
import Username from './components/splashLoginRegistration/registration/registrationPages/username';
import Email from './components/splashLoginRegistration/registration/registrationPages/email';
import Preferences from './components/splashLoginRegistration/registration/registrationPages/preferences';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashPage" screenOptions={{ headerShown: false }}>
          {/* COMMENT OUT STACK SCREEN FOR TESTING */}
          {/* MAKE SURE IN THE FUTURE CHECK IF THE USER HAS LOGGED IN/STAYED LOGGED IN THEN SKIP TO MainTabs */}
          {/* <Stack.Screen name="HangRequest"  component={HangRequest}/> */}
          <Stack.Screen name="SplashPage" component={SplashPage} />
          <Stack.Screen name="SplashPageButtons" component={SplashPageButtons} />
          <Stack.Screen name="LoginPage" component={LoginPage} />
          <Stack.Screen name="RegistrationPage" component={RegistrationPage} />
          <Stack.Screen name="Birthday" component={Birthday}/>
          <Stack.Screen name="Gender" component={Gender}/>
          <Stack.Screen name="Username" component={Username}/>
          <Stack.Screen name="Email" component={Email}/>
          <Stack.Screen name="Preferences" component={Preferences}/>
          <Stack.Screen name="Password" component={Password}/>
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
