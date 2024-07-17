import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  image: any;
  name: string;
  location: string;
  total: number;
}

const Header: React.FC<HeaderProps> = ({ image, name, location, total }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <Image source={image} style={styles.headerImage} />
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      <View style={styles.headerContent}>
        <View style={styles.headerTextContainer}>
            <Text style={styles.headerName}>{name}</Text>
            <Ionicons style = {styles.icon} name="location-outline" size={18} color="black" />
            <Text style={styles.headerLocation}>{location}</Text>
        </View>
        <View style={styles.eventContainer}>
          <Text style={styles.eventText}>{total} new events this week</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    position: 'relative',
    width: '100%',
    height: 250,
    backgroundColor: '#000',
  },
  headerImage: {
    width: '100%',
    height: '100%',
    opacity: 0.8,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  headerContent: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  headerTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
  },
  icon: {
    backgroundColor: 'white',
    borderRadius: 9,
    marginLeft: 8,
    marginTop:3,
  },
  headerLocation: {
    marginLeft: 5,
    marginTop:3,
    fontSize: 18,
    color: '#fff',
  },
  eventContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 5,
    alignSelf: 'flex-start',
  },
  eventText: {
    fontSize: 12,
    color: '#1e90ff',
    fontWeight: 'bold',
  },
});

export default Header;
