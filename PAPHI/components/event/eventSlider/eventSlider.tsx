import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native'; 
import styles from './eventSlider.style';
import KitchenCard from '../cards/kitchenCard';
import SmallCard from '../cards/smallCard';

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

const EventSlider = ({ title, data, category }: EventSliderProps) => {
    const [recEvents, setRecEvents] = useState<Event[]>([]);
    
    useEffect(() => {
        const fetchEventData = async () => {
            if (!data || !Array.isArray(data)) {
                console.error('Data is either undefined or not an array');
                return;
            }

            try {
                const promises = data.map(async (id: string) => {
                    const response = await fetch(`https://moxy-api.azurewebsites.net/api/Event/GetEvent?eventid=${id}`);
                    if (!response.ok) {
                        throw new Error(`Error fetching event data for event id ${id}`);
                    }
                    return response.json();
                });

                const eventDataArray = await Promise.all(promises);
                console.log('Event data fetched from API:', eventDataArray);

                setRecEvents(eventDataArray.map((event: any) => ({
                    id: event.data.eventid,
                    title: event.data.name,
                    date: event.data.date,
                    location: `${event.data.location.street}, ${event.data.location.state}`,
                })));
            } catch (error) {
                console.error('Error fetching event data:', error);
            }
        };

        fetchEventData();
    }, [data]);

    const renderCard = (event: Event) => {
        switch (category) {
            
            case 'hot_topics':
                return <KitchenCard key={event.id} title={event.title} date={event.date} location={event.location} data={data}/>;
            default:
                return <SmallCard key={event.id} title={event.title} date={event.date} location={event.location} data={data}/>;
        }
    };

    return (
        <View style={styles.feedContainer}>
            <Text style={styles.titleText}>{title}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {recEvents.map(renderCard)}
            </ScrollView>
        </View>
    );
};

export default EventSlider;
