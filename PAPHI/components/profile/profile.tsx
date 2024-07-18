import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { Calendar,CalendarProvider, CalendarList, Agenda, WeekCalendar  } from 'react-native-calendars';
import { Theme } from 'react-native-calendars/src/types';
import { format, parse } from 'date-fns';
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
    eventDiscoveryTag: null | string;
  };
}

interface ProfileData {
  username: string;
  interests: string[]; 
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

function formatEventDateTime(dateString: string, timeString: string): string {
  const combinedDateTime = `${dateString}T${timeString}`;
  
  const eventDate = parse(combinedDateTime, "yyyy-MM-dd'T'HH:mm:ss", new Date());

  return format(eventDate, "EEE, MMMM d - h:mma");
}

function daysUntilEvent(dateString: string, timeString: string): string {

  const combinedDateTime = `${dateString}T${timeString}`;
  
  const eventDate = parse(combinedDateTime, "yyyy-MM-dd'T'HH:mm:ss", new Date());
  
  const today = new Date();
  const differenceInTime = eventDate.getTime() - today.getTime();
  const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
  
  if (differenceInDays === 0) {
    return 'Today';
  } else if (differenceInDays === 1) {
    return 'Tomorrow';
  } else {
    return `in ${differenceInDays} days`;
  }
}

function formatMonthDay(dateString: string): string {
  const eventDate = parse(dateString, "yyyy-MM-dd", new Date());
  return format(eventDate, "MM/dd");
}

const getCategoryColor = (category) => {
  // Add more categories and colors as needed
  const colors = {
    'Hiking': '#4E79E0',
    'Environmental': '#4CD964',
    'Fitness': '#FF2D55',
    // Add more categories and colors here
  };
  return colors[category] || '#314BD8'; //default color is blue
};

const ProfileScreen = () => {
  const username = 'josh';
  const [profileData, setProfileData] = useState(null);
  const [fetchedFromAPI, setFetchedFromAPI] = useState(false);
  const [events, setEvents] = useState([]);
  const [calendarView, setCalendarView] = useState('month');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTab, setSelectedTab] = useState('photos');
  const [markedDates, setMarkedDates] = useState({});
  const navigation = useNavigation();

  const toggleCalendarView = () => {
    setCalendarView(calendarView === 'month' ? 'week' : 'month');
  };



  const images = [
    require('../../assets/ProfileIcons/Photo1.png'),
    require('../../assets/ProfileIcons/Photo2.png'),
    require('../../assets/ProfileIcons/Photo3.png'),
    require('../../assets/ProfileIcons/Photo4.png'),
    require('../../assets/ProfileIcons/Photo5.png'),
    require('../../assets/ProfileIcons/Photo6.png'),
  ];

  const eventsImages = [
    require('../../assets/ProfileIcons/Event1.png'),
    require('../../assets/ProfileIcons/Event2.png'),
    require('../../assets/ProfileIcons/Event3.png'),
    require('../../assets/ProfileIcons/Event1.png'),
    require('../../assets/ProfileIcons/Event2.png'),
    require('../../assets/ProfileIcons/Event3.png'),
    require('../../assets/ProfileIcons/Event1.png'),
  ];


  const fetchProfileData = async () => {
    try {
      const cachedProfileData = localStorage.getItem('cachedProfileData');
      if (cachedProfileData && fetchedFromAPI) {
        // Check if cached data exists and data was fetched from API at least once
        console.log('Profile data retrieved from cache:', JSON.parse(cachedProfileData));
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
        console.log('Profile data fetched from API:', userData);
        setFetchedFromAPI(true); //Update fetchedFromAPI state after fetching from API
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

 //Fetch events data when profile data changes
 useEffect(() => {
  if (!profileData || !profileData.data || !profileData.data.events || !Array.isArray(profileData.data.events)) {
    return;
  }

  const fetchEvents = async () => {
    const cachedEventsData = localStorage.getItem('cachedEventsData');
    if (cachedEventsData) {
      console.log('Events data retrieved from cache:', JSON.parse(cachedEventsData));
      setEvents(JSON.parse(cachedEventsData));
    } else {
      const eventDetails = await Promise.all(
        profileData.data.events
          .filter(eventid => eventid !== undefined && eventid !== "undefined" && eventid !== "44282f22-4a92-400e-8b2a-a92a9455aa56" && eventid !== "ce022957-4f2f-484f-8ccb-1805260ed967")
          .map(eventid =>
            fetch(`https://moxy-api.azurewebsites.net/api/Event/GetEvent?eventid=${eventid}`)
              .then(response => {
                if (!response.ok) {
                  console.log('Failed to fetch event data with response:', response);
                  throw new Error(`Failed to fetch event data with statusText: ${response.statusText}`);
                }
                return response.json();
              })
          )
      );
      setEvents(eventDetails);
      localStorage.setItem('cachedEventsData', JSON.stringify(eventDetails));
      console.log('Events data fetched from API:', eventDetails);
    }
  };

  fetchEvents();
}, [profileData]);

  useEffect(() => {
    fetchProfileData();
  }, [username]);

  //Bckground for calendar where events are displayed
  useEffect(() => {
    if (events.length > 0) {
      const newMarkedDates = {};
      events.forEach(event => {
        const eventDate = event.data.date.split('T')[0]; // Extract date part
        newMarkedDates[eventDate] = { marked: true, dotColor: 'transparent', selected: true, selectedColor: 'black' };
      });
      setMarkedDates(newMarkedDates);
      console.log('Marked dates:', newMarkedDates);
    }
  }, [events]);

  const renderCalendar = () => {
    const today = new Date().toISOString().split('T')[0];
    const combinedDates = {
      ...markedDates,
      [today]: { selected: true, selectedColor: 'black' },
    };

    const commonTheme = {
      backgroundColor: 'white',
      calendarBackground: 'white',
      textSectionTitleColor: 'black',
      selectedDayBackgroundColor: 'black',
      selectedDayTextColor: 'white',
      todayTextColor: 'black',
      dayTextColor: 'black',
      textDisabledColor: '#d9e1e8',
      dotColor: 'black',
      selectedDotColor: 'white',
      arrowColor: 'black',
      monthTextColor: 'black',
      textDayFontWeight: '300',
      textMonthFontWeight: 'bold',
      textDayHeaderFontWeight: '500',
      textDayFontSize: 16,
      textMonthFontSize: 16,
      textDayHeaderFontSize: 14,
      arrowWidth: 30,
      arrowHeight: 30,
      'stylesheet.calendar.header': {
        header: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: '25%',
          paddingRight: '25%',
          marginTop: 10,
          alignItems: 'center',
        },
        week: {
          marginTop: 5,
          flexDirection: 'row',
          justifyContent: 'space-around'
        },
        monthText: {
          fontSize: 16,
          fontWeight: 'bold',
          color: '#000',
        },
        arrow: {
          padding: 0,
          margin: 0,
        }
      }
    };

    return (
      <View style={[styles.calendarContainer, { paddingBottom: 40 }]}>
        {calendarView === 'month' ? (
          <Calendar
            style={styles.calendar}
            current={today}
            markedDates={combinedDates}
            onDayPress={(day) => {
              console.log(day);
              setSelectedDate(day.dateString);
            }}
            hideExtraDays={true}
            theme={commonTheme}
            renderHeader={(date) => (
              <Text style={styles.calendarHeader}>
                {date.toString('MMMM yyyy')}
              </Text>
            )}
          />
        ) : (
          <CalendarProvider date={today}>
            <WeekCalendar
              style={[styles.calendar, { marginBottom: 20 }]}
              current={today}
              theme={commonTheme}
              markedDates={combinedDates}
              onDayPress={(day) => {
                console.log(day);
                setSelectedDate(day.dateString);
              }}
            />
          </CalendarProvider>
        )}
        <TouchableOpacity 
          style={[styles.viewSwitchButton, { position: 'absolute', bottom: 10, right: 10 }]} 
          onPress={toggleCalendarView}
        >
          <Text style={styles.viewSwitchText}>
            {calendarView === 'month' ? 'Weekly' : 'Monthly'} View
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderEventsView = () => (
    <View style={{ flex: 1 }}> 
      <ScrollView contentContainerStyle={styles.eventsContainer}>
        {renderCalendar()}
        
        {events.map((event, index) => ( 
          <View key={index} style={styles.eventCard}>
            <View style={[styles.eventColorTab, { backgroundColor: getCategoryColor(event.data.category) }]}>
              <Text style={styles.eventDateIndicator}>{formatMonthDay(event.data.date)}</Text>
            </View>
            <View style={styles.eventImageContainer}>
              <Image 
                source={require('../../assets/ProfileIcons/Event1.png')} 
                style={styles.eventImage} 
              />
            </View>
            <View style={styles.eventContent}>
              <View style={styles.eventHeader}>
                <Text style={styles.eventName}>{event.data.name}</Text>
              </View>
              <Text style={styles.eventDate}>{daysUntilEvent(event.data.date, event.data.time)}</Text>
              <Text style={styles.eventTime}>{formatEventDateTime(event.data.date, event.data.time)}</Text>
              <Text style={styles.eventLocation}>{event.data.location.street}</Text>
            </View>
            <TouchableOpacity style={styles.notificationIcon}>
              <Image 
                source={require('../../assets/ProfileIcons/Bell.png')} 
                style={styles.actionIcon} 
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );

 
  const renderPostsView = () => (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      {images.map((image, index) => (
        <View key={index} style={styles.postContainer}>
          <View style={styles.postHeader}>
            <Image source={require('../../assets/ProfileIcons/ProfilePic.png')} style={styles.postProfilePic} />
            <View style={styles.postUserInfo}>
              <Text style={styles.postUserName}>John Doe</Text>
              <Text style={styles.postUserHandle}>was with 🐶</Text>
            </View>
          </View>
          <Image source={image} style={styles.postImage} />
          <View style={styles.postActions}>
            <Text style={styles.postActionText}>32 💬</Text>
            <Text style={styles.postActionText}>6 👤</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('../../assets/ProfileIcons/Bell.png')} style={styles.BellIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.bannerContainer}>
        <Image source={require('../../assets/ProfileIcons/Banner.png')} style={styles.bannerImage} />
        <Image source={require('../../assets/ProfileIcons/ProfilePic.png')} style={styles.profilePicture} />
      </View>

      <View style={styles.profileSection}>
        <Text style={styles.name}>JOHN DOE</Text>
        <Text style={styles.username}>@queenoftears</Text>
        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>111</Text>
            <Text style={styles.statLabel}>Friends</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>27</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.editProfileButton]}>
            <Text style={[styles.buttonText, styles.editProfileButtonText]}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.shareProfileButton]}>
            <Text style={[styles.buttonText, styles.shareProfileButtonText]}>Share Profile</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.bio}>
          I'm a passionate adventurer who loves traveling to new places and exploring different cultures
        </Text>

        <View style={styles.socialIconsContainer}>
          <Image source={require('../../assets/ProfileIcons/Instagram.png')} style={styles.socialIcon} />
          <Image source={require('../../assets/ProfileIcons/X.png')} style={styles.socialIcon} />
          <Image source={require('../../assets/ProfileIcons/FaceBook.png')} style={styles.socialIcon} />
          <Image source={require('../../assets/ProfileIcons/TikTok.png')} style={styles.socialIcon} />
        </View>
      </View>

      <View style={styles.tabsContainer}>
        <View style={styles.tabs}>
          <TouchableOpacity onPress={() => setSelectedTab('posts')}>
            <Text style={selectedTab === 'posts' ? styles.activeTabText : styles.inactiveTabText}>Posts</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedTab('events')}>
            <Text style={selectedTab === 'events' ? styles.activeTabText : styles.inactiveTabText}>Events</Text>
          </TouchableOpacity>
        </View>
      </View>


      {selectedTab === 'posts' ? renderPostsView() : renderEventsView()}
    </View>
  );
};

export default ProfileScreen;
