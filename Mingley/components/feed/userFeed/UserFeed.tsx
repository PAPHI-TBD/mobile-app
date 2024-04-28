// UserFeed.tsx
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './UserFeed.style';
import PostItem from '../postItem/PostItem';

const UserFeed: React.FC = () => {
    // dummy data
    const feedData = [
        { id: 1, title: 'Topic 1' },
        { id: 2, title: 'Topic 2' },
        { id: 3, title: 'Topic 3' },
        { id: 4, title: 'Topic 4' },
        { id: 5, title: 'Topic 5' },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.headerText}>People</Text>
            </View>
            {/* Load Posts */}
            <ScrollView style={styles.postContainer} showsVerticalScrollIndicator={false}>
                {feedData.map(post => (
                    <PostItem key={post.id} id={post.id} title={post.title} />
                ))}
            </ScrollView>
        </View>
    );
}

export default UserFeed;
