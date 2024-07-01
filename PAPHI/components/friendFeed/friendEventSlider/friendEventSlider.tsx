import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import styles from './friendEventSlider.style';
import Event from '../../event/eventSlider/eventSlider';

interface FriendEvent {
    id: '',
    img: '',
}

interface FriendEventSliderProps {
    eventList: FriendEvent[];
}

const FriendEventSlider = ({ eventList }: FriendEventSliderProps) => {
    const renderCard = (event: FriendEvent) => {
        return (
            <View style={styles.eventImage}>
                <Image style={styles.image}  source={require('../../../assets/event/sampleEvent.jpg')}/>
            </View>
        );
    };

    return (
        <View style={styles.friendEventSliderContainer}>
            <Text style={{ color: 'black', fontSize: 16, fontWeight: '800', position: 'relative', marginRight: 'auto', textTransform: 'uppercase' }}>Upcoming Friend Events</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {eventList.map(renderCard)}
            </ScrollView>
        </View>
    );
};

export default FriendEventSlider;