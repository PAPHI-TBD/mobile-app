import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './eventTags.style';

interface EventTag {
    color: string;
    name: string;
}

interface EventTagsProps {
    eventTags: EventTag[],
}

const EventTags = ({ eventTags }: EventTagsProps) => {
    const renderTag = (tag: EventTag) => {
        return (
            <View style={styles.tagContainer}>
                <View style={[styles.color, { backgroundColor: tag.color }]}></View>
                <Text style={styles.text}>{ tag.name }</Text>
            </View>
        );
    };

    return (
        <View style={styles.tagsContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {eventTags.map(renderTag)}
            </ScrollView>
        </View>
    );
};

export default EventTags;