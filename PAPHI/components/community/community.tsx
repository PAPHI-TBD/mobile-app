import React, { useState } from 'react';
import { ScrollView, StyleSheet, FlatList, View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CustomHeader from './header';
import CommunityCard from './communityCard';
import CategoryButton from './categoryButton';
const carFanaticsImage = require('../../assets/ProfileIcons/Photo1.png');

const categories = ['Music', 'Sports', 'Food & Drink', 'Art', 'Tech'];

const initialData = [
  {
    image: carFanaticsImage,
    name: 'Car Fanatics',
    isPublic: true,
    members: 121,
    events: 2,
    category: 'Tech',
    location: 'Los Angeles, CA',
    isRecommended: false,
    isTrending: false,
  },
  {
    image: carFanaticsImage,
    name: 'NWNJS Fans',
    isPublic: true,
    members: 121,
    events: 2,
    category: 'Music',
    location: 'Los Angeles, CA',
    isRecommended: false,
    isTrending: true,
  },
  {
    image: carFanaticsImage,
    name: 'Bobba Lovers',
    isPublic: true,
    members: 121,
    events: 1,
    category: 'Sports',
    location: 'Los Angeles, CA',
    isRecommended: true,
    isTrending: false,
  },
];

const MainScreen: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [communities, setCommunities] = useState(initialData);

  const handleCategoryPress = (category: string) => {
    if (selectedCategory === category) {
      // If the same category is clicked again, reset to initial data
      setSelectedCategory(null);
      setCommunities(initialData);
    } else {
      // Otherwise, filter data and set all isTrending to true
      setSelectedCategory(category);
      const filteredData = initialData.map(item =>
        item.category === category ? { ...item, isTrending: true, isRecommended: false } : item
      );
      setCommunities(filteredData);
    }
  };

  const yourCommunities = initialData.filter(item => !item.isRecommended && !item.isTrending);
  const filteredData = selectedCategory
    ? communities.filter(item => item.category === selectedCategory && !yourCommunities.includes(item))
    : communities;

  const handleCardPress = (communityName: string) => {
    console.log(`Navigating to ${communityName}`);
  };

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
                onPress={() => handleCardPress(item.name)}
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
                  onPress={() => handleCardPress(item.name)}
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
                data={communities.filter(item => item.isRecommended)}
                renderItem={({ item }) => (
                  <CommunityCard
                    community={item}
                    onPress={() => handleCardPress(item.name)}
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
                data={communities.filter(item => item.isTrending)}
                renderItem={({ item }) => (
                  <CommunityCard
                    community={item}
                    onPress={() => handleCardPress(item.name)}
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
