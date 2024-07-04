import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../../types'; // Adjust the import path as necessary
import styles from './eventPage.style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Header from './header/header';
import EventHeader from './eventHeader/eventHeader';
import EventTags from './eventTags/eventTags';
import Description from './description/description';
import Attendees from './attendees/attendees';
import Posts from './posts/posts';
import Footer from './footer/footer';

type EventPageRouteProp = RouteProp<RootStackParamList, 'EventPage'>;

function EventPage() {
  const route = useRoute<EventPageRouteProp>();
  const { data } = route.params || {}; // data not loaded
  console.log(data);

  const eventTags = [
    {
      color: '#9CFE50',
      name: 'public',
    },
    {
      color: '#4DECD9',
      name: 'id required',
    },
  ]
  
  return (
    <View style={{ flex: 1 }}>
      <Header imageList={[]}/>
      <LinearGradient
        colors={['#8BC0C8', '#E1CAD8']}
        locations={[0, 1]}
        style={styles.eventPageContainer}
      >
        <View style={styles.eventInfoContainer}>
          <EventHeader />
          <EventTags eventTags={eventTags} />

          <View style={styles.iconTextContainer}>
            <FontAwesomeIcon icon={faCalendar} size={16} color='#314BD8'/>
            <Text style={styles.boldText}>Friday, July 7 at 9:30PM</Text>
          </View>
          <View style={styles.iconTextContainer}>
            <FontAwesomeIcon icon={faLocationDot} size={16} color='#314BD8'/>
            <View>
              <Text style={styles.boldText}>Catwalk LA</Text>
              <Text style={[styles.boldText, { color: '#4A4A4A', fontWeight: '400' }]}>698 Harlem Pl, Los Angeles, CA 90014 </Text>
            </View>
            
          </View>

          <Description description={'description'} user={{img: 'image', name: 'name'}} />
          <Attendees number={100} userList={[{img: 'img'}, {img: 'img'}, {img: 'img'}, {img: 'img'}, {img: 'img'}, {img: 'img'}, {img: 'img'}, {img: 'img'}, {img: 'img'}, {img: 'img'}, {img: 'img'}, {img: 'img'}, {img: 'img'}, {img: 'img'}, {img: 'img'}]} />
          <Posts postList={[{img: 'img'}, {img: 'img'}, {img: 'img'}, {img: 'img'}, {img: 'img'}, {img: 'img'}, {img: 'img'}, {img: 'img'}, {img: 'img'}, {img: 'img'}, {img: 'img'}, {img: 'img'}, {img: 'img'}, {img: 'img'}, {img: 'img'}]} />
        </View>
        
      </LinearGradient>
      <Footer price={35} />
    </View>
  )
}

export default EventPage;