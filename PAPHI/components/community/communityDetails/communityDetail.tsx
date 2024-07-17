import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList, Community, Event } from '../../../types';
import Header from './header';
import About from './about';
import { LinearGradient } from 'expo-linear-gradient';
import { useCommunityContext } from '../communityDetails/communityContext';
import CategoryButtons from './category';
import RegularEventCard from './events/eventCard';
import FeaturedEventCard from './events/featuredEventCard';
import PostForm from '../communityDetails/posts/postForm';
import PostList from '../communityDetails/posts/postList';

type CommunityDetailRouteProp = RouteProp<RootStackParamList, 'CommunityDetail'>;

const CommunityDetail: React.FC = () => {
  const route = useRoute<CommunityDetailRouteProp>();
  const { item } = route.params as { item: Community };
  const { joinCommunity, leaveCommunity, isCommunityJoined } = useCommunityContext();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const isJoined = isCommunityJoined(item);

  const handleJoin = () => {
    joinCommunity(item);
  };

  const handleLeave = () => {
    leaveCommunity(item);
  };
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  if (!item) {
    return (
      <View style={styles.container}>
        <Text>Community not found</Text>
      </View>
    );
  }

  const featuredEvents = item.communityEvents.filter((event: Event) => event.isFeatured);
  const regularEvents = item.communityEvents.filter((event: Event) => !event.isFeatured);
  const showEvents = selectedCategory === 'All' || selectedCategory === 'Events';
  const showPosts = selectedCategory === 'All' || selectedCategory === 'Posts';


  
  return (
    <LinearGradient colors={['#8BC0C8', '#E1CAD8']} style={styles.gradientContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Header image={item.image} name={item.name} location={item.location} total={item.total} />
        <About 
          about={item.about} 
          isPublic={item.isPublic} 
          members={item.members} 
          category={item.category} 
          isJoined={isJoined} 
          handleJoin={handleJoin} 
          handleLeave={handleLeave} 
        />
        <CategoryButtons selectedCategory={selectedCategory} onCategorySelect={handleCategorySelect} />        
        <PostForm communityName={item.name} />
        {showEvents && (
          <>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Featured Events</Text>
              <FlatList
                horizontal
                data={featuredEvents}
                renderItem={({ item }) => (
                  <FeaturedEventCard event={item} />
                )}
                keyExtractor={(item) => item.title}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.cardList}
              />
            </View>
            <View style={styles.section}>
              {regularEvents.map((event, index) => (
                <RegularEventCard key={index} event={event} />
              ))}
            </View>
          </>
        )}

        {showPosts && (
          <PostList communityName={item.name} />
        )}
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  gradientContainer: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  section: {
    marginVertical: 10,
    marginRight: 12,
  },
  sectionTitle: {
    marginLeft: 12,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardList: {
    paddingLeft: 20,
    paddingHorizontal: 0,
    paddingRight: 20,
  },
});

export default CommunityDetail;
