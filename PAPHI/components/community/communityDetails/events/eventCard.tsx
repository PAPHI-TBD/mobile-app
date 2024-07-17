import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Event, User } from '../../../../types';

interface RegularEventCardProps {
  event: Event;
}

const RegularEventCard: React.FC<RegularEventCardProps> = ({ event }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={event.image} style={styles.image} />
        <TouchableOpacity style={styles.heartButton}>
          <Ionicons name="heart-outline" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.overlay}>
          <Text style={styles.title}>{event.title}</Text>
          <View style={styles.infoRow}>
            <Ionicons name="calendar-outline" size={16} color="white" />
            <Text style={styles.date}>{event.date}</Text>
          </View>
          <View style={styles.infoRow}>
            <Ionicons name="location-outline" size={16} color="white" />
            <Text style={styles.location}>{event.location}</Text>
          </View>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.details}>
          {event.isPublic ? 'Public' : 'Private'} · {event.attendees.length} attendees
        </Text>
        <View style={styles.attendeesContainer}>
          {event.attendees.slice(0, 3).map((attendee: User, index: number) => (
            <Image key={index} source={attendee.avatar} style={styles.attendeeAvatar} />
          ))}
          {event.attendees.length > 3 && (
            <Text style={styles.moreAttendees}>+{event.attendees.length - 3}</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
    backgroundColor: 'white',
    elevation: 5,
    marginHorizontal: 15,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 200,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.0,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 5,
  },
  location: {
    fontSize: 16,
    color: 'white',
    marginLeft: 5,
  },
  heartButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  infoContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  details: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
  },
  attendeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  attendeeAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 5,
  },
  moreAttendees: {
    fontSize: 14,
    color: 'black',
  },
});

export default RegularEventCard;
