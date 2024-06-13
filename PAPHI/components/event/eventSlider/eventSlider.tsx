import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native'; 
import styles from './eventSlider.style';
import KitchenCard from '../cards/kitchenCard';

interface Event {
    id: string;
    title: string;
    date: string;
    location: string;
}

const EventSlider = ({ title, data }: { title: string, data: any }) => {
    const [recEvents, setRecEvents] = useState<Event[]>([]);

    const [ kCard, setKCard ] = useState(false);
    const [ sCard, setSCard ] = useState(false);
    const [ lCard, setLCard ] = useState(false);

    let tag; // replace later as a prop

    const cardType = (tag: string) => {
        // replace to suggested in the future
        if(tag === 'hot_topics') {
            setKCard(true);

            setSCard(false);
            setLCard(false);
        } else if (tag === 'trending') {
            setLCard(true);

            setKCard(false);
            setSCard(false);
        } else {
            setSCard(true);

            setKCard(false);
            setLCard(false);
        }
    }

    // get event data from each event id from the event data array
    useEffect(() => {
        const fetchEventData = async () => {
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

                // Assuming eventDataArray is an array of event objects with fields id, title, date, location
                setRecEvents(eventDataArray.map((event: any) => ({
                    id: event.data.eventid,
                    title: event.data.name,
                    // need to add time
                    date: event.data.date,
                    location: `${event.data.location.street}, ${event.data.location.state}`,
                })));
            } catch (error) {
                console.error('Error fetching event data:', error);
            }
        };

        fetchEventData();
    }, [data]);
    
    const recommendedEvents = recEvents.map((event, index) => (
        <KitchenCard
            key={event.id}
            title={event.title}
            date={event.date}
            location={event.location}
        />
    ));

    return (
        <View style={styles.feedContainer}>
            <Text style={styles.titleText}>{title}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {recommendedEvents}
            </ScrollView>
        </View>
    );
};

export default EventSlider;
