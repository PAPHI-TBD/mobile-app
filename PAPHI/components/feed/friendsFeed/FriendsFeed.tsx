import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import UserFeed from '../userFeed/UserFeed';
import styles from './FriendsFeed.style';

const FriendsFeed = () => {

    return (
        <ScrollView>
            {/* Add toggle component here */}
            <UserFeed />
        </ScrollView>
    );
}

export default FriendsFeed;
