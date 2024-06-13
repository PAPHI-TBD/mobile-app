import React from 'react'
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../../types'; // Adjust the import path as necessary

type EventPageRouteProp = RouteProp<RootStackParamList, 'EventPage'>;

function EventPage() {
  const route = useRoute<EventPageRouteProp>();
  const { data } = route.params || {}; // data not loaded
  console.log(data);
  
  return (
    <div>eventPage</div>
  )
}

export default EventPage;