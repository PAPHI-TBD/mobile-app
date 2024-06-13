import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types'; // Adjust the import path as necessary
import styles from './event.style';
import SearchEvent from './searchEvent/searchEvent';
import EventSlider from './eventSlider/eventSlider';
import VerticalEventSlider from './eventSlider/verticalEventSlider';

const FilterIcon = require('../../assets/event/eventFilter.png');

interface Filter {
    name: string;
    tag: string;
}

export default function Event() {
    const filterList: Filter[] = [
        { name: 'Trending', tag: 'trending' },
        { name: 'Hot Topics', tag: 'hot_topics' },
        { name: 'Concert', tag: 'concert' },
        { name: 'Party', tag: 'party' },
        { name: 'Sports', tag: 'sports' },
        { name: 'Art', tag: 'art' },
        { name: 'Movies', tag: 'movies' },
    ];

    const [tag, setTag] = useState<string>('hot_topics');
    const [event, setEventSliderData] = useState<string[]>([]);

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    useEffect(() => {
        const fetchSliderData = async (tag: string) => {
            try {
                const response = await fetch(`https://moxy-api.azurewebsites.net/api/Event/listEventsByTag?tag=${tag}`);
                if (!response.ok) {
                    throw new Error("Error in retrieving Event Tag List Data");
                }
                const eventData = await response.json();
                console.log('Event slider data fetched from API:', eventData.data.eventIdList);
                setEventSliderData(eventData.data.eventIdList);
            } catch (err) {
                console.log('got an error, it didnt work');
                console.log(err);
            }
        };
        fetchSliderData(tag);
    }, [tag]);

    const attendeesPage = function() {
        navigation.navigate('Attendees');
    }

    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={['#8BC0C8', '#E1CAD8']}
                locations={[0, 1]}
                style={styles.eventPageContainer}
            >
                <View style={styles.headerSection}>
                    <Text style={styles.header}>DISCOVERY</Text>
                    <View style={styles.searchSection}>
                        <SearchEvent />
                        {/* on click navigate to discovery filter page */}
                        {/* categories selected in that page gets returned in populated categories */}
                        <TouchableOpacity onPress={attendeesPage}>
                            <Image source={FilterIcon} style={{ width: 24, height: 24 }} />
                        </TouchableOpacity>                    
                    </View>
                    {/* location drop down */}
                    {/* populate with categories */}
                </View>
                <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                    {/* in the future have this populate by tags picked in filter */}
                    <EventSlider title='Suggested for you' data={event} category='hot_topics'/>
                    <EventSlider title='Created by friends' data={event} category='friends'/>
                    {/* constant */}
                    <VerticalEventSlider title='Hot in your area' data={event} category='hot'/>
                </ScrollView>
            </LinearGradient>
        </View>
    );
}
