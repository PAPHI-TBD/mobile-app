import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import CommunityCard from './CommunityCard';
import { LinearGradient } from 'expo-linear-gradient';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

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
  // Add more community objects here
];

const UserCommunities: React.FC = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [filteredCommunities, setFilteredCommunities] = useState(communities);

  const updateSearch = (searchValue: string) => {
    setSearch(searchValue);
    if (searchValue) {
      const filteredData = communities.filter(community =>
        community.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredCommunities(filteredData);
    } else {
      setFilteredCommunities(communities);
    }
  };

  return (
    <LinearGradient colors={['#8BC0C8', '#E1CAD8']} style={styles.gradient}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Community')}>
          <Icon name="chevron-left" size={24} color="black" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.header}>Your Communities</Text>
        <SearchBar
          placeholder="Search Communities..."
          onChangeText={updateSearch}
          value={search}
          lightTheme
          round
          containerStyle={styles.searchContainer}
          inputContainerStyle={styles.searchInput}
          searchIcon={<Icon name="search" size={20} color="grey" />}
          clearIcon={<Icon name="times" size={20} color="grey" />}
        />
        <ScrollView>
          {filteredCommunities.map((community, index) => (
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
  backButton: {
    position: 'absolute',
    top: 40,
    left: 16,
    zIndex: 1,
  },
  backIcon: {
    transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }], 
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 60, 
    marginBottom: 16,
    textAlign: 'left',
  },
  searchContainer: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    padding: 0,
    marginBottom: 16,
  },
  searchInput: {
    backgroundColor: '#fff',
  },
});

export default UserCommunities;
