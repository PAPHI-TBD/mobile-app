import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { User, Event } from '../../../../types'; // Ensure the correct path to your types file

interface EventCardProps {
    event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <TouchableOpacity style={[styles.card, event.isFeatured && styles.featuredCard]}>
      <View style={styles.imageContainer}>
        <Image source={event.image} style={styles.image} />
        {event.isPublic && (
          <View style={styles.publicLabelContainer}>
            <View style={styles.greenDot} />
            <Text style={styles.publicLabel}>PUBLIC</Text>
          </View>
        )}
         <TouchableOpacity style={styles.heartButton}>
          <Ionicons name="heart-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{event.title}</Text>
          <Ionicons name="ellipsis-vertical" size={24} color="black" />
        </View>
        <Text style={styles.date}><Ionicons name="calendar-outline" size={16} /> {event.date}</Text>
        <Text style={styles.location}><Ionicons name="location-outline" size={16} /> {event.location}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 10,
    backgroundColor: 'white',
    elevation: 5,
    marginBottom: 10,
  },
  featuredCard: {
    width: 200,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 150,
  },
  publicLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 5,
    left: 5,
    borderRadius: 5,
    padding: 2,
  },
  greenDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#9CFE50',
    marginRight: 5,
  },
  publicLabel: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
  },
  heartButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 3, 
    },
    shadowOpacity: 0.3, 
    shadowRadius: 6, 
    elevation: 10, 
  },
  infoContainer: {
    padding: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: 'black',
    marginTop: 5,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 14,
    color: 'black',
    marginTop: 5,
    fontWeight: 'bold',
  },
});

export default EventCard;
