import React, { useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './feed.style'; // Import styles from feed.style
import HotTopic from './eventDiscovery/hotTopics/HotTopic'; // Import the HotTopic component
import UserFeed from './userFeed/UserFeed';
import SearchBar from './eventDiscovery/searchBar/SearchBar'; // Import the SearchBar component
import FriendsFeed from './friendsFeed/FriendsFeed';

// Define the type for the data returned from the search bar
interface SearchData {
    location: string;
    city: string;
    state: string;
}

export default function Feed() {
    // Initialize feedData with default dummy data
    const [feedData, setFeedData] = useState([
        { location: 'Japantown', city: 'San Francisco', state: 'CA' },
    ]);

    // Function to update feedData when new data is returned from the search bar
    const updateFeedData = (newData: SearchData[]) => {
        setFeedData(newData);
    };

    return (
        <ScrollView style={styles.postContainer} showsVerticalScrollIndicator={false}>
            <View style={styles.searchBar}>
                {/* <SearchBar onUpdate={updateFeedData} /> */}
                <SearchBar />
            </View>
            {feedData.map((data, index) => (
                <View key={index} style={styles.locationContainer}>
                    <View style={styles.textContainer}> 
                        <Text style={styles.mainHeading}>{data.location}</Text>
                        <Text style={styles.cityState}>{data.city}, {data.state}</Text>
                    </View>
                    <Image
                        source={require('../../assets/feedPageIcons/Group.png')}
                        style={styles.locationIcon}
                    />
                </View>
            ))}
            <HotTopic />
            <UserFeed />
        </ScrollView>
    );
}
