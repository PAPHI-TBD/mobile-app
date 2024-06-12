import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styles from './eventSlider.style';
import KitchenCard from '../cards/kitchenCard';
const EventSlider = ({ title }: { title: string }) => {
    const [recEvents, setRecEvents] = useState([]);

    

    const recommendedEvents = recEvents.map((event, index) => {
        return(<KitchenCard title='Ohgeesy' date='FRI JULY 7  9:30PM' location='2123 New Avenue'/>);
    });

    return (
        <View style={styles.feedContainer}>
            <Text style={styles.titleText}>{title}</Text>
            {/* {recommendedEvents} */}
            <KitchenCard title='Ohgeesy' date='FRI JULY 7 9:30PM' location='2123 New Avenue'/>
        </View>
    );
}

export default EventSlider;
