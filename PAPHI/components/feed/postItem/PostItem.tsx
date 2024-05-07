import React from 'react';
import styles from './PostItem.style'; // Import styles from feed.style
import { View, Text, ScrollView } from 'react-native';

interface PostItemsProps {
    id: number;
    username: string;
    desc: string;
    picture: string;
}

const PostItem: React.FC<PostItemsProps> = ({ username, desc}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.usernameText}>{username}</Text>
            <Text style={styles.descriptionText}>{desc}</Text>
        </View>
    );
}

export default PostItem;