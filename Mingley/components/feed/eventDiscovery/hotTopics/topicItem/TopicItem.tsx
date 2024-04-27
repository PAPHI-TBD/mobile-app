import React from 'react';
import styles from './TopicItem.style';
import { View, Text, StyleSheet } from 'react-native';

interface TopicItemProps {
    id: number;
    title: string;
}

const TopicItem: React.FC<TopicItemProps> = ({ id, title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title} {id}</Text>
        </View>
    );
}

export default TopicItem;
