import React from 'react';
import styles from './PostItem.style'; // Import styles from feed.style
import { View, Text, ScrollView } from 'react-native';

interface PostItemsProps {
    id: number;
    title: string;
}

const PostItem: React.FC<PostItemsProps> = ({ id, title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title} {id}</Text>
        </View>
    );
}

export default PostItem;