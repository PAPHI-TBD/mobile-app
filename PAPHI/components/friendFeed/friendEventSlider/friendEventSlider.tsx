import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import styles from './friendEventSlider.style';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../types'; // Adjust the import path as necessary
import Event from '../../event/eventSlider/eventSlider';

interface FriendEvent {
    id: '',
    img: '',
}

interface FriendEventSliderProps {
    eventList: FriendEvent[];
}

const FriendEventSlider = ({ eventList }: FriendEventSliderProps) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const eventPage = () => {
        navigation.navigate('EventPage', {});
    };

    const renderCard = (event: FriendEvent) => {
        return (
            // <View style={styles.eventImage}>
            <TouchableOpacity key={event.id} style={styles.eventImage} onPress={eventPage}>
                <Image style={styles.image}  source={require('../../../assets/event/sampleEvent.jpg')}/>
            </TouchableOpacity>
            // </View>
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