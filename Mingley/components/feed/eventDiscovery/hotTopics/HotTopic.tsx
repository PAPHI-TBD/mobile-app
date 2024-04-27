import React from 'react';
import styles from './HotTopic.style'; // Import styles from feed.style
import { View, Text, ScrollView } from 'react-native';
import TopicItem from './topicItem/TopicItem';

const HotTopic: React.FC = () => {
    // dummy data
    const topics = [
        { id: 1, title: 'Topic' },
        { id: 2, title: 'Topic' },
        { id: 3, title: 'Topic' },
        { id: 4, title: 'Topic' },
        { id: 5, title: 'Topic' },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style ={styles.headerText}>Hot Topics</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.topicContainer}>
                    {topics.map(topic => (
                        <TopicItem key={topic.id} id={topic.id} title={topic.title} />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

export default HotTopic;
