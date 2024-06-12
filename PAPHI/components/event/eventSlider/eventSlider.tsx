import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styles from './eventSlider.style';
import KitchenCard from '../cards/kitchenCard';
const EventSlider = ({ title }: { title: string }) => {
    const [recEvents, setRecEvents] = useState([]);

    

    const recommendedEvents = recEvents.map((event, index) => {
        return(<KitchenCard />);
    });

    return (
        <View style={styles.feedContainer}>
            <Text style={styles.titleText}>{title}</Text>
            {/* {recommendedEvents} */}
            <KitchenCard/>
        </View>
    );
}

export default EventSlider;
