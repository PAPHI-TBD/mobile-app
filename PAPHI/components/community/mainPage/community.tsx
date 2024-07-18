import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, FlatList, View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CustomHeader from './header';
import CommunityCard from './communityCard';
import CategoryButton from './categoryButton';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../types';
import { useCommunityContext } from '../communityDetails/communityContext';

const carFanaticsImage = require('../../../assets/ProfileIcons/Photo1.png');

const categories = ['Music', 'Sports', 'Food & Drink', 'Art', 'Tech'];

const initialData = [
  {
    image: carFanaticsImage,
    name: 'Car Fanatics',
    isPublic: true,
    members: 121,
    total: 2,
    category: 'Tech',
    location: 'Los Angeles, CA',
    isRecommended: false,
    isTrending: false,
    about: 'Lorem ipsum dolor sit amet...',
    communityEvents: [
      {
        image: require('../../../assets/ProfileIcons/Photo4.png'),
        title: 'Car Show',
        date: 'FRI JULY 7 9:30PM',
        location: '123 Car Avenue',
        isPublic: true,
        isFeatured: true,
        attendees: [{ id: '1', name: 'John Doe', avatar: carFanaticsImage }],
      },
      {
        image: require('../../../assets/ProfileIcons/Photo4.png'),
        title: 'Music Concert',
        date: 'SAT JULY 8 8:00PM',
        location: '456 Music Street',
        isPublic: true,
        isFeatured: false,
        attendees: [{ id: '1', name: 'John Doe', avatar: carFanaticsImage }, {id: '2', name: 'John Doe', avatar: carFanaticsImage}, {id: '3', name: 'John Doe', avatar: carFanaticsImage},
        {id: '4', name: 'John Doe', avatar: carFanaticsImage}, {id: '5', name: 'John Doe', avatar: carFanaticsImage}, {id: '6', name: 'John Doe', avatar: carFanaticsImage}
        ],
      },
    ],
  },
  {
    image: carFanaticsImage,
    name: 'NWNJS Fans',
    isPublic: true,
    members: 121,
    total: 2,
    category: 'Music',
    location: 'Los Angeles, CA',
    isRecommended: false,
    isTrending: true,
    about: 'Lorem ipsum dolor sit amet...',
    communityEvents: [
      {
        image: require('../../../assets/ProfileIcons/Photo4.png'),
        title: 'Music Concert',
        date: 'SAT JULY 8 8:00PM',
        location: '456 Music Street',
        isPublic: true,
        isFeatured: true,
        attendees: [{ id: '1', name: 'John Doe', avatar: carFanaticsImage }, {id: '2', name: 'John Doe', avatar: carFanaticsImage}],
      },
    ],
  },
  {
    image: carFanaticsImage,
    name: 'Bobba Lovers',
    isPublic: true,
    members: 121,
    total: 1,
    category: 'Sports',
    location: 'Los Angeles, CA',
    isRecommended: true,
    isTrending: false,
    about: 'Lorem ipsum dolor sit amet...',
    communityEvents: [
      {
        image: require('../../../assets/ProfileIcons/Photo4.png'),
        title: 'Music Concert',
        date: 'SAT JULY 8 8:00PM',
        location: '456 Music Street',
        isPublic: true,
        isFeatured: true,
        attendees: [{ id: '1', name: 'John Doe', avatar: carFanaticsImage }, {id: '2', name: 'John Doe', avatar: carFanaticsImage}],
      },
    ],
  },
];

const MainScreen: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [communities, setCommunities] = useState(initialData);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { joinedCommunities, isCommunityJoined } = useCommunityContext();

  useEffect(() => {
    if (selectedCategory) {
      const updatedData = initialData.map(item =>
        item.category === selectedCategory ? { ...item, isTrending: true, isRecommended: false } : item
      );
      setCommunities(updatedData);
    } else {
      setCommunities(initialData);
    }
  }, [selectedCategory]);

  const handleCategoryPress = (category: string) => {
    setSelectedCategory(prevCategory => (prevCategory === category ? null : category));
  };

  const yourCommunities = joinedCommunities.filter(item => !item.isRecommended && !item.isTrending);
  const filteredData = selectedCategory
    ? communities.filter(item => item.category === selectedCategory)
    : communities;

  const trendingCommunities = initialData.filter(item => item.isTrending && !isCommunityJoined(item));
  const recommendedCommunities = initialData.filter(item => item.isRecommended && !isCommunityJoined(item));

  return (
    <LinearGradient colors={['#8BC0C8', '#E1CAD8']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <CustomHeader />
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Your Communities</Text>
            <TouchableOpacity onPress={() => console.log('Navigating to see all')}>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal
            data={yourCommunities}
            renderItem={({ item }) => (
              <CommunityCard
                community={item}
                onPress={() => navigation.navigate('CommunityDetail', { item })}
                isTrendingStyle={false}
              />
            )}
            keyExtractor={(item) => item.name}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.cardList}
          />
        </View>

        <View style={[styles.section, styles.categoriesSection]}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <FlatList
            horizontal
            data={categories}
            renderItem={({ item }) => (
              <CategoryButton
                category={item}
                onPress={() => handleCategoryPress(item)}
                isSelected={item === selectedCategory}
              />
            )}
            keyExtractor={(item) => item}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryList}
          />
        </View>

        {selectedCategory ? (
          <View style={[styles.section, styles.trendingContainer]}>
            <Text style={styles.sectionTitle}>{selectedCategory} Communities</Text>
            <FlatList
              horizontal
              data={filteredData}
              renderItem={({ item }) => (
                <CommunityCard
                  community={item}
                  onPress={() => navigation.navigate('CommunityDetail', { item })}
                  isTrendingStyle={true}
                />
              )}
              keyExtractor={(item) => item.name}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.cardList}
            />
          </View>
        ) : (
          <>
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Recommended Communities</Text>
                <TouchableOpacity onPress={() => console.log('Navigating to see all')}>
                  <Text style={styles.seeAll}>See all</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                horizontal
                data={recommendedCommunities}
                renderItem={({ item }) => (
                  <CommunityCard
                    community={item}
                    onPress={() => navigation.navigate('CommunityDetail', { item })}
                    isTrendingStyle={false}
                  />
                )}
                keyExtractor={(item) => item.name}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.cardList}
              />
            </View>

            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Trending Communities</Text>
                <TouchableOpacity onPress={() => console.log('Navigating to see all')}>
                  <Text style={styles.seeAll}>See all</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                data={trendingCommunities}
                renderItem={({ item }) => (
                  <CommunityCard
                    community={item}
                    onPress={() => navigation.navigate('CommunityDetail', { item })}
                    isTrendingStyle={true}
                  />
                )}
                keyExtractor={(item) => item.name}
                showsVerticalScrollIndicator={true}
                contentContainerStyle={styles.verticalCardList}
              />
            </View>
          </>
        )}
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  section: {
    marginVertical: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    fontSize: 16,
    color: '#1e90ff',
  },
  cardList: {
    paddingHorizontal: 0,
  },
  categoryList: {
    marginTop: 10,
    paddingHorizontal: 0,
  },
  verticalCardList: {
    paddingHorizontal: 0,
    alignItems: 'center',
  },
  categoriesSection: {
    marginBottom: 20,
  },
  trendingContainer: {
    alignItems: 'center',
  },
});

export default MainScreen;