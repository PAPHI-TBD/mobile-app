import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native'; 
import styles from './verticalEventSlider.style';
import LargeCard from '../cards/largeCard';

interface Event {
    id: string;
    title: string;
    date: string;
    location: string;
}

interface EventSliderProps {
    title: string;
    data: string[]; // Assuming data is an array of event IDs
    category: string;
}

const VerticalEventSlider = ({ title, data, category }: EventSliderProps) => {
    const [recEvents, setRecEvents] = useState<Event[]>([]);

    return (
        <View style={styles.verticalFeedContainer}>
            <Text style={styles.titleText}>{title}</Text>
            {/* create a map later */}
            <LargeCard key='1' title='1' date='{event.date}' location='{event.location}' />
            <LargeCard key='2' title='1' date='{event.date}' location='{event.location}' />
            <LargeCard key='3' title='1' date='{event.date}' location='{event.location}' />

        </View>
    );
};

export default VerticalEventSlider;
