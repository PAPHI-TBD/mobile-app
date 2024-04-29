import React from 'react';
import styles from './UserPost.style'; // Import styles from feed.style
import { View, Text, ScrollView } from 'react-native';

interface UserPostProps {
    id: number;
    username: string;
    desc: string;
    picture: string;
}

const UserPost: React.FC<UserPostProps> = ({ username, desc}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.usernameText}>{username}</Text>
            <Text style={styles.descriptionText}>{desc}</Text>
        </View>
    );
}

export default UserPost;