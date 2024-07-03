import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';

// Import your components
import Home from './components/home/index';
import Feed from './components/feed/feed';
import Community from './components/community/community';
import Chat from './components/chat/chatLandingPage/chat';
import Profile from './components/profile/profile';
import SplashPage from './components/splashLoginRegistration/splashPage'; // Import your LogoPage component
import SplashPageButtons from './components/splashLoginRegistration/splashPageButtons';
import LoginPage from './components/splashLoginRegistration/login/login'; // Import your LoginPage component
import RegistrationPage from './components/splashLoginRegistration/registration/registration'; // Import your RegistrationPage component
import HangRequest from './components/hangRequest/hangRequest';
import Event from './components/event/event';
import Birthday from './components/splashLoginRegistration/registration/registrationPages/birthday';
import Gender from './components/splashLoginRegistration/registration/registrationPages/gender';
import Username from './components/splashLoginRegistration/registration/registrationPages/username';
import Password from './components/splashLoginRegistration/registration/registrationPages/password';
import Email from './components/splashLoginRegistration/registration/registrationPages/email';
import Attendees from './components/event/attendeePage/attendees';
import EventPage from './components/event/eventPage/eventPage';

const customColor = '#322E22';

const svgDataHome = `
<svg width="37" height="32" viewBox="0 0 37 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.31477 13.6298V24.6668C9.31477 25.7714 10.2102 26.6668 11.3148 26.6668H18.5M9.31477 13.6298L17.8297 5.93892C18.2104 5.59505 18.7895 5.59505 19.1702 5.93892L26.619 12.6668M9.31477 13.6298L6.69043 16.0002M27.6851 13.6298V24.6668C27.6851 25.7714 26.7897 26.6668 25.6851 26.6668H18.5M27.6851 13.6298L30.3095 16.0002M27.6851 13.6298L26.619 12.6668M26.619 12.6668V8.00016M18.5 26.6668V20.0002" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const svgDataMingle = `
<svg width="20" height="28" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.75008 13.3332C8.86603 13.3332 8.01818 12.982 7.39306 12.3569C6.76794 11.7317 6.41675 10.8839 6.41675 9.99984C6.41675 9.11578 6.76794 8.26794 7.39306 7.64281C8.01818 7.01769 8.86603 6.6665 9.75008 6.6665C10.6341 6.6665 11.482 7.01769 12.1071 7.64281C12.7322 8.26794 13.0834 9.11578 13.0834 9.99984C13.0834 10.4376 12.9972 10.871 12.8297 11.2754C12.6622 11.6799 12.4166 12.0473 12.1071 12.3569C11.7976 12.6664 11.4301 12.9119 11.0257 13.0794C10.6213 13.247 10.1878 13.3332 9.75008 13.3332ZM9.75008 0.666504C7.27473 0.666504 4.90076 1.64983 3.15042 3.40017C1.40008 5.15051 0.416748 7.52448 0.416748 9.99984C0.416748 16.9998 9.75008 27.3332 9.75008 27.3332C9.75008 27.3332 19.0834 16.9998 19.0834 9.99984C19.0834 7.52448 18.1001 5.15051 16.3497 3.40017C14.5994 1.64983 12.2254 0.666504 9.75008 0.666504Z" fill="white"/>
</svg>
`;

const svgDataCommunity = `
<svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 20.3332V18.9998C1.5 16.0543 3.88781 13.6665 6.83333 13.6665H12.1667C15.1122 13.6665 17.5 16.0543 17.5 18.9998V20.3332M17.5 9.6665C19.7091 9.6665 21.5 7.87564 21.5 5.6665C21.5 3.45736 19.7091 1.6665 17.5 1.6665M25.5 20.3332V18.9998C25.5 16.0543 23.1122 13.6665 20.1667 13.6665H19.5M13.5 5.6665C13.5 7.87564 11.7091 9.6665 9.5 9.6665C7.29086 9.6665 5.5 7.87564 5.5 5.6665C5.5 3.45736 7.29086 1.6665 9.5 1.6665C11.7091 1.6665 13.5 3.45736 13.5 5.6665Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const svgDataChat = `
  <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M27.4167 5.3335L4.75 12.4185L14.75 18.0002M27.4167 5.3335L20.0833 28.0002L14.75 18.0002M27.4167 5.3335L14.75 18.0002" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

const svgDataProfile = `
  <svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.16675 23.6667V22.3333C1.16675 18.6514 4.15152 15.6667 7.83341 15.6667H13.1667C16.8486 15.6667 19.8334 18.6514 19.8334 22.3333V23.6667M15.8334 6.33333C15.8334 9.27885 13.4456 11.6667 10.5001 11.6667C7.55456 11.6667 5.16675 9.27885 5.16675 6.33333C5.16675 3.38781 7.55456 1 10.5001 1C13.4456 1 15.8334 3.38781 15.8334 6.33333Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

const svgBase64Home = btoa(svgDataHome); // Convert to base64
const svgBase64Mingle = btoa(svgDataMingle); // Convert to base64
const svgBase64Community = btoa(svgDataCommunity); // Convert to base64
const svgBase64Chat = btoa(svgDataChat); // Convert to base64
const svgBase64Profile = btoa(svgDataProfile); // Convert to base64

const ChatIcon = () => (
  <img src={`data:image/svg+xml;base64,${svgBase64Chat}`} alt="Chat SVG" />
);

const HomeIcon = () => (
  <img src={`data:image/svg+xml;base64,${svgBase64Home}`} alt="Home SVG" />
);

const MingleIcon = () => (
  <img src={`data:image/svg+xml;base64,${svgBase64Mingle}`} alt="Mingle SVG" />
);

const CommunityIcon = () => (
  <img src={`data:image/svg+xml;base64,${svgBase64Community}`} alt="Community SVG" />
);

const ProfileIcon = () => (
  <img src={`data:image/svg+xml;base64,${svgBase64Profile}`} alt="Profile SVG" />
);

export default function App() {
  const Stack = createStackNavigator();
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashPage" screenOptions={{ headerShown: false }}>
          {/* Include your pages here */}
            {/* COMMENT OUT STACK SCREEN FOR TESTING */}
              {/* MAKE SURE IN THE FUTURE CHECK IF THE USER HAS LOGGED IN/STAYED LOGGED IN THEN SKIP TO MainTabs */}
            {/* <Stack.Screen name="HangRequest"  component={HangRequest}/>
            <Stack.Screen name="SplashPage" component={SplashPage} />
            <Stack.Screen name="SplashPageButtons" component={SplashPageButtons} />
            <Stack.Screen name="LoginPage" component={LoginPage} />
            <Stack.Screen name="RegistrationPage" component={RegistrationPage} />
            <Stack.Screen name="Birthday" component={Birthday} />
            <Stack.Screen name="Gender" component={Gender} />
            <Stack.Screen name="Username" component={Username} />
            <Stack.Screen name="Email" component={Email} />
            <Stack.Screen name="Password" component={Password} /> */}

            {/*<Stack.Screen name="Profile" component={Profile} />
          {/* Your bottom tabs navigation */}
          <Stack.Screen name="MainTabs" component={MainTabs} />
          <Stack.Screen name="Attendees" component={Attendees} />
          <Stack.Screen name="EventPage" component={EventPage} />
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
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
    
          // Rest of the code...
          let IconComponent;
          if (route.name === 'Home') {
            IconComponent = HomeIcon;
          } else if (route.name === 'Event') {
            IconComponent = MingleIcon;
          } else if (route.name === 'Community') {
            IconComponent = CommunityIcon;
          } else if (route.name === 'Chat') {
            IconComponent = ChatIcon;
          } else if (route.name === 'Profile') {
            IconComponent = ProfileIcon;
          }

          // Rest of the code...
          return <IconComponent size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: customColor, // Set the background color here
        },
      })}
      >
      <Tab.Screen 
        name="Home" 
        // component={Feed} // change back to feed when merge to main
        component={Event} 
        options={{ headerShown: false }}
      />
      <Tab.Screen 
        name="Event" 
        component={Event} 
        options={{ headerShown: false }}
      />
      <Tab.Screen 
        name="Community" 
        component={Community} 
        options={{ headerShown: false }}
      />
      <Tab.Screen 
        name="Chat" 
        component={Chat} 
        options={{ headerShown: false }}
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
