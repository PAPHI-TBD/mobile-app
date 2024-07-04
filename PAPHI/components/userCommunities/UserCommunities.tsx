import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CommunityCard from './CommunityCard'; 
import { LinearGradient } from 'expo-linear-gradient';

const communities = [
  {
    name: 'Car Fanatics',
    members: 121,
    imageUrl: 'https://motionbgs.com/media/5053/nissan-gt-r-r35.jpg',
  },
  {
    name: 'Boba Lovers',
    members: 98,
    imageUrl: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2023/6/13/boba-milk-tea.jpg.rend.hgtvcom.1280.1280.suffix/1686684207354.jpeg',
  },
  {
    name: 'Car Fanatics',
    members: 121,
    imageUrl: 'https://motionbgs.com/media/5053/nissan-gt-r-r35.jpg',
  },
  {
    name: 'Boba Lovers',
    members: 98,
    imageUrl: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2023/6/13/boba-milk-tea.jpg.rend.hgtvcom.1280.1280.suffix/1686684207354.jpeg',
  },
  {
    name: 'Car Fanatics',
    members: 121,
    imageUrl: 'https://motionbgs.com/media/5053/nissan-gt-r-r35.jpg',
  },
  {
    name: 'Boba Lovers',
    members: 98,
    imageUrl: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2023/6/13/boba-milk-tea.jpg.rend.hgtvcom.1280.1280.suffix/1686684207354.jpeg',
  },
  {
    name: 'Car Fanatics',
    members: 121,
    imageUrl: 'https://motionbgs.com/media/5053/nissan-gt-r-r35.jpg',
  },
  {
    name: 'Boba Lovers',
    members: 98,
    imageUrl: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2023/6/13/boba-milk-tea.jpg.rend.hgtvcom.1280.1280.suffix/1686684207354.jpeg',
  },
  {
    name: 'Car Fanatics',
    members: 121,
    imageUrl: 'https://motionbgs.com/media/5053/nissan-gt-r-r35.jpg',
  },
  {
    name: 'Boba Lovers',
    members: 98,
    imageUrl: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2023/6/13/boba-milk-tea.jpg.rend.hgtvcom.1280.1280.suffix/1686684207354.jpeg',
  },
  // Add more community objects here
];

const UserCommunities: React.FC = () => {
  return (
    <LinearGradient colors={['#8BC0C8', '#E1CAD8']} style={styles.gradient}>
      <View style={styles.container}>
        <Text style={styles.header}>Your Communities</Text>
        <ScrollView>
          {communities.map((community, index) => (
            <CommunityCard
              key={index}
              name={community.name}
              members={community.members}
              imageUrl={community.imageUrl}
            />
          ))}
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default UserCommunities;
