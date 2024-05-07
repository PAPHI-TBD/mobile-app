// UserFeed.tsx
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './UserFeed.style';
import PostItem from '../postItem/PostItem';

const UserFeed: React.FC = () => {
    // dummy data
    const feedData = [
        { id: 1, username: 'Topic', desc: 'description here...', picture: '' },
        { id: 2, username: 'Topic', desc: 'description here...', picture: '' },
        { id: 3, username: 'Topic', desc: 'description here...', picture: '' },
        { id: 4, username: 'Topic', desc: 'description here...', picture: '' },
        { id: 5, username: 'Topic', desc: 'description here...', picture: '' },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.headerText}>People</Text>
            </View>
            {/* Load Posts */}
            {feedData.map(post => (
                <PostItem key={post.id} id={post.id} username={post.username} desc={post.desc} picture={post.picture} />
            ))}
        </View>
    );
}

export default UserFeed;
