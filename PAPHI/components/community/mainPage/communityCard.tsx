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
    total: number;
    category: string;
    location: string;
    isRecommended: boolean;
    isTrending: boolean;
    about: string;
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
  const categoryContainerStyle = [
    styles.categoryContainer,
    isTrendingStyle && styles.trendingCategoryContainer,
    isRecommended && styles.recommendedCategoryContainer,
  ];
  const categoryTextStyle = [
    styles.categoryText,
    isTrendingStyle && styles.trendingCategoryText,
    isRecommended && styles.recommendedCategoryText,
  ];
  const locationStyle = [
    isTrendingStyle && styles.trendingLocation,
    isRecommended && styles.recommendedLocation,
    styles.location,
  ];

  return (
    <TouchableOpacity style={cardStyle} onPress={onPress}>
      <Image source={community.image} style={imageStyle} />
        <TouchableOpacity style={eventStyle}>
          <Text style={styles.info}>{community.total} new events</Text>
        </TouchableOpacity>
        <Text style={nameStyle}>{community.name}</Text>
        <Text style={locationStyle}>{community.location}</Text>
        <Text style={detailsStyle}>
          {community.isPublic ? 'Public' : 'Private'} · {community.members} members
        </Text>
        {(isTrending || isRecommended) && (
        <TouchableOpacity style={categoryContainerStyle}>
          <Text style={categoryTextStyle}>{community.category}</Text>
        </TouchableOpacity>
      )}
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
    marginLeft: 15,
    marginBottom: 7,
    fontSize: 14,
    color: 'black',
  },
  location: {
    fontSize: 14,
    color: 'black',
  },
  recommendedLocation: {
    fontSize: 12,
    color: 'black',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  recommendedImage: {
    width: '100%',
    height: '100%',
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
    paddingHorizontal: 8,
    paddingVertical: 5,
    top: 10,
    left: 7,
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
    marginLeft: 105,
    marginBottom: 20,
    fontSize: 14,
    color: 'black',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    position: 'absolute',
    bottom: 25,
    left: 10,
  },
  recommendedName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    position: 'absolute',
    bottom: 25,
    left: 10,
  },
  trendingName: {
    fontSize: 16,
    marginLeft: 105,
    marginBottom: 40,
    fontWeight: 'bold',
    color: '#333',
  },
  categoryContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 8,
    opacity: 1,
  },
  recommendedCategoryContainer: {
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 15,
    borderWidth: 1,
    alignSelf: 'flex-start',
    top: 10,
    left: 7,
  },
  trendingCategoryContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderWidth: 1,
    marginLeft: 90,
    borderColor: '#1e90ff',
    alignSelf: 'flex-start',
    bottom: 6,
    left: 20,
  },
  categoryText: {
    fontSize: 12,
    color: '#1e90ff',
    fontWeight: 'bold',
  },
  recommendedCategoryText: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
  },
  trendingCategoryText: {
    fontSize: 12,
    color: '#1e90ff',
    fontWeight: 'bold',
  },
  details: {
    fontSize: 12,
    color: '#ccc',
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
});

export default CommunityCard;