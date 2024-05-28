import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './profile.style';

interface Location {
  city: string;
  state: string;
  street: string;
  country: string;
  zipcode: number;
}

interface EventData {
  data: {
    name: string;
    location: Location;
    category: string;
    date: string;
    eventid: string;
    eventDiscoveryTag: null | string;  // Assuming eventDiscoveryTag can be a string or null
  };
}

interface ProfileData {
  username: string;
  interests: string[]; // Assuming interests is an array of strings
  events: string[];
}

interface ApiResponse<T> {
  statusCode: number;
  statusMessage: string;
  statusMessageText: string;
  timestamp: string;
  data: T;
}

const getOrdinalSuffix = (day: number) => {
  if (day > 3 && day < 21) return 'TH';
  switch (day % 10) {
    case 1: return 'ST';
    case 2: return 'ND';
    case 3: return 'RD';
    default: return 'TH';
  }
};

const formatEventDate = (eventDate: string) => {
  const date = new Date(eventDate);
  return `${date.toLocaleString('en-US', { month: 'long' }).toUpperCase()} ${date.getDate()}${getOrdinalSuffix(date.getDate())}`;
};


const ProfileScreen = () => {
  const username = 'josh'; // Assuming username is known
  const [profileData, setProfileData] = useState<ApiResponse<ProfileData> | null>(null);
  const [fetchedFromAPI, setFetchedFromAPI] = useState(false);
  const [events, setEvents] = useState<EventData[]>([]);

  const images = [
    require('../../assets/ProfileIcons/Photo1.png'),
    require('../../assets/ProfileIcons/Photo2.png'),
    require('../../assets/ProfileIcons/Photo3.png'),
    require('../../assets/ProfileIcons/Photo4.png'),
    require('../../assets/ProfileIcons/Photo5.png'),
    require('../../assets/ProfileIcons/Photo6.png'),
  ];

  // Dummy events images
  const eventsImages = [
    require('../../assets/ProfileIcons/Event1.png'),
    require('../../assets/ProfileIcons/Event2.png'),
    require('../../assets/ProfileIcons/Event3.png'),
    require('../../assets/ProfileIcons/Event1.png'),
    require('../../assets/ProfileIcons/Event2.png'),
    require('../../assets/ProfileIcons/Event3.png'),
    require('../../assets/ProfileIcons/Event1.png'),
  ];


  const [selectedTab, setSelectedTab] = useState('photos');
  const navigation = useNavigation();

  const fetchProfileData = async () => {
    try {
      const cachedProfileData = localStorage.getItem('cachedProfileData');
      if (cachedProfileData && fetchedFromAPI) {
        // Check if cached data exists and data was fetched from API at least once
        //console.log('Profile data retrieved from cache:', JSON.parse(cachedProfileData));
        setProfileData(JSON.parse(cachedProfileData));
      } else {
        //console.log('Fetching profile data from API...');
        const response = await fetch(`https://moxy-api.azurewebsites.net/api/Profile/GetProfile?username=${username}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch user data: ${response.statusText}`);
        }
        const userData = await response.json();
        setProfileData(userData);
        localStorage.setItem('cachedProfileData', JSON.stringify(userData));
        //console.log('Profile data fetched from API:', userData);
        setFetchedFromAPI(true); // Update fetchedFromAPI state after fetching from API
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

 // Fetch events data from API or cache when profile data changes
 useEffect(() => {
  if (!profileData || !profileData.data || !profileData.data.events || !Array.isArray(profileData.data.events)) {
    // console.log("Profile data is not fully loaded yet.");
    return;
  }
  const fetchEvents = async () => {
    try {
      const cachedEventsData = localStorage.getItem('cachedEventsData');
      if (cachedEventsData) {
        //console.log('Events data retrieved from cache:', JSON.parse(cachedEventsData));
        setEvents(JSON.parse(cachedEventsData));
      } else {
        //console.log('Fetching events data from API...');
        const eventDetails = await Promise.all(profileData.data.events.map(eventid =>
          fetch(`https://moxy-api.azurewebsites.net/api/Event/GetEvent?eventid=${eventid}`)
            .then(response => {
              if (!response.ok) {
                throw new Error(`Failed to fetch event data: ${response.statusText}`);
              }
              return response.json();
            })
        ));
        setEvents(eventDetails);
        localStorage.setItem('cachedEventsData', JSON.stringify(eventDetails));
        //console.log('Events data fetched from API:', eventDetails);
      }
    } catch (error) {
      console.error('Error fetching event data:', error);
    }
  };

  fetchEvents();
}, [profileData]);

  useEffect(() => {
    fetchProfileData();
  }, [username]);

  const renderGridView = () => (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      {images.map((image, index) => (
        <View key={index} style={styles.imageContainer}>
          <Image source={image} style={styles.gridImage} />
        </View>
      ))}
    </ScrollView>
  );

  const renderEventsView = () => (
    <ScrollView contentContainerStyle={styles.eventsContainer}>
      {events.map((event, index) => (
        <View key={index} style={[styles.eventCard, { backgroundColor: 'transparent' }]}>
          <ImageBackground source={eventsImages[index]} style={styles.eventImage} resizeMode="cover">
            <View style={styles.eventInfo}>
              <Text style={styles.eventTitle}>{event.data.name.toUpperCase()}</Text>
              <Text style={styles.eventDate}>{formatEventDate(event.data.date)}</Text>
            </View>
            <View style={styles.eventStatus}>
              <View style={[styles.statusDot, { backgroundColor: 'green' }]} />
              <Text style={styles.eventStatusText}>Confirmed</Text>
            </View>
          </ImageBackground>
        </View>
      ))}
      <TouchableOpacity style={styles.addEventButton}>
        <Text style={styles.addEventText}>+</Text>
      </TouchableOpacity>
    </ScrollView>
  );

 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('../../assets/ProfileIcons/Settings.png')} style={styles.settingIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.bannerContainer}>
        <Image source={require('../../assets/ProfileIcons/Banner.png')} style={styles.bannerImage} />
        <Image source={require('../../assets/ProfileIcons/ProfilePic.png')} style={styles.profilePicture} />
      </View>

      <View style={styles.profileSection}>
        <View style={styles.userInfo}>
          <TouchableOpacity style={styles.connectButton}>
          <Text style={styles.buttonText}>Connect <Text style={styles.plusIcon}>+</Text></Text>
          </TouchableOpacity>
          <View style={styles.actionButtons}>
            <TouchableOpacity>
              <Image source={require('../../assets/ProfileIcons/Email.png')} style={styles.actionIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../assets/ProfileIcons/Bell.png')} style={styles.actionIcon} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.name}>{username}</Text>
        <Text style={styles.username}>@QUEENOFTEARS</Text>
        <Text style={styles.connections}>111 MOXY CONNECTIONS</Text>
        <Text style={styles.friends}>Friends with: <Text>Deven, Joshua, etc</Text></Text>
        <Text style={styles.bio}>
          I'm a passionate adventurer who loves traveling 
          to new places and exploring different cultures.
        </Text>
      </View>

      <View style={styles.tabsContainer}>
      <View style={styles.tabs}>
        <TouchableOpacity onPress={() => setSelectedTab('photos')}>
          <Image source={require('../../assets/ProfileIcons/photos.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('events')}>
          <Image source={require('../../assets/ProfileIcons/Earth.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
      

    {selectedTab !== 'events' && (
        <View style={styles.tabLabels}>
          <Text style={styles.tabLabel}>PHOTOS</Text>
          <Text style={styles.tabLabel}>POSTS</Text>
          <Text style={styles.tabLabel}>COMMUNITIES</Text>
        </View>
      )}

    {selectedTab === 'events' && (
        <View>
          <Text style={styles.eventText}>MY EVENTS</Text>
        </View>
      )}

      {selectedTab === 'photos' ? renderGridView() : renderEventsView()}
    </View>
  );
};

export default ProfileScreen;
