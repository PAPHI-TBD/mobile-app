import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './feed.style'; // Import styles from feed.style
import HotTopic from './eventDiscovery/hotTopics/HotTopic'; // Import the HotTopic component
import UserFeed from './userFeed/UserFeed';
import SearchBar from './eventDiscovery/searchBar/SearchBar'; // Import the SearchBar component

export default function Feed() {
    return (
        <ScrollView style={styles.postContainer} showsVerticalScrollIndicator={false}>
            <View style={styles.searchBar}>
                <SearchBar />
            </View>
                <View style={styles.locationContainer}>
                    <View style={styles.textContainer}> 
                        <Text style={styles.mainHeading}>Japantown</Text>
                        <Text style={styles.cityState}>San Francisco, CA</Text>
                    </View>
                    <Image
                        source={require('../../assets/feedPageIcons/Group.png')}
                        style={styles.locationIcon}
                    />
                </View>
            <HotTopic />
            <UserFeed />
        </ScrollView>
    );
}
