import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

interface CommunityCardProps {
  community: {
    image: any;
    name: string;
    isPublic: boolean;
    members: number;
    events: number;
    category: string;
    location: string;
    isRecommended: boolean;
    isTrending: boolean;
  };
  onPress: () => void;
  isTrendingStyle: boolean;
}

const CommunityCard: React.FC<CommunityCardProps> = ({ community, onPress, isTrendingStyle }) => {
  const { isRecommended, isTrending } = community;

  const cardStyle = [
    styles.card,
    isTrendingStyle && styles.trendingCard,
    isRecommended && styles.recommendedCard,
  ];
  const imageStyle = [
    styles.image,
    isTrendingStyle && styles.trendingImage,
    isRecommended && styles.recommendedImage,
  ];
  const detailsStyle = [
    styles.details,
    isTrendingStyle && styles.trendingDetails,
    isRecommended && styles.recommendedDetails,
  ];

  const eventStyle = [
    styles.event,
    isTrendingStyle && styles.trendingEvent,
    isRecommended && styles.recommendedEvent,
  ];
  const nameStyle = [
    styles.name,
    isTrendingStyle && styles.trendingName,
    isRecommended && styles.recommendedName,
  ];
  const categoryStyle = [
    styles.category,
    isTrendingStyle && styles.trendingCategory,
    isRecommended && styles.recommendedCategory,
  ];
  const locationStyle = [
    isTrendingStyle && styles.trendingLocation,
    isRecommended && styles.recommendedLocation,
    styles.location,
  ];

  return (
    <TouchableOpacity style={cardStyle} onPress={onPress}>
      <Image source={community.image} style={imageStyle} />
      <View style={styles.overlay}>
        <TouchableOpacity style={eventStyle}>
          <Text style={styles.info}>{community.events} new events</Text>
        </TouchableOpacity>
        <Text style={nameStyle}>{community.name}</Text>
        <Text style={locationStyle}>{community.location}</Text>
        <Text style={detailsStyle}>
          {community.isPublic ? 'Public' : 'Private'} · {community.members} members
        </Text>
        <TouchableOpacity style={categoryStyle}>
          <Text style={styles.info}>{community.category}</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    overflow: 'hidden',
    margin: 10,
    backgroundColor: 'black',
    width: 200,
    height: 150,
    position: 'relative',
  },
  recommendedCard: {
    borderRadius: 10,
    overflow: 'hidden',
    width: 300,
    height: 200,
    position: 'relative',
  },
  trendingCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    overflow: 'hidden',
    width: width - 30,
    height: 100,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 'auto',
  },
  trendingLocation: {
    marginLeft: 90,
    fontSize: 12,
    color: '#333333',
  },
  location: {
    display: 'none',
  },
  recommendedLocation: {
    display: 'none',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  recommendedImage: {
    width: '100%',
    height: '100%',
    opacity: 0.8,
  },
  trendingImage: {
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    width: 80,
    height: 80,
  },
  event: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    marginBottom: 200,
    paddingHorizontal: 8,
  },
  recommendedEvent: {
    display: 'none',
  },
  trendingEvent: {
    display: 'none',
  },
  info: {
    fontSize: 12,
    color: '#1e90ff',
    fontWeight: 'bold',
  },
  recommendedDetails: {
    fontSize: 12,
    color: '#ccc',
  },
  trendingDetails: {
    marginLeft: 90,
    marginBottom: 20,
    fontSize: 12,
    color: '#333333',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  recommendedName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  trendingName: {
    fontSize: 16,
    marginLeft: 90,
    marginTop: 200,
    fontWeight: 'bold',
    color: '#333',
  },
  category: {
    opacity: 1,
  },
  recommendedCategory: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 8,
    marginBottom: 200,
  },
  trendingCategory: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderWidth: 1,
    marginLeft: 90,
    borderColor: '#1e90ff',
    alignSelf: 'flex-start',
  },
  details: {
    fontSize: 14,
    color: '#ccc',
  },
});

export default CommunityCard;
