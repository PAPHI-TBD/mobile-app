import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './event.style';
import SearchEvent from './searchEvent/searchEvent';
import EventSlider from './eventSlider/eventSlider';

const FilterIcon = require('../../assets/event/eventFilter.png');

export default function Event({ }) {    
    const filterList = [
        { name: 'Trending', tag: 'trending' },
        { name: 'Hot Topics', tag: 'hot_topics' },
        { name: 'Concert', tag: 'concert' },
        { name: 'Party', tag: 'party' },
        { name: 'Sports', tag: 'sports' },
        { name: 'Art', tag: 'art' },
        { name: 'Movies', tag: 'movies' },
    ];

    let tag = 'hot_topics';
    const [ event, setEventSliderData] = useState();

    // get event data
    useEffect(() => {
        const fetchSliderData = async(tag: string) => {
            try {
                // fetching from azure
                const response = await fetch(`https://moxy-api.azurewebsites.net/api/Event/listEventsByTag?tag=${tag}`);
                if(!response.ok) {
                    throw new Error("Error in retrieving Event Tag List Data");
                }
                const eventData = await response.json()

                console.log('Event slider data fetched from API:', eventData.data.eventIdList);
                setEventSliderData(eventData.data.eventIdList);
            } catch (err) {
                console.log('got an error, it didnt work')
                console.log(err)
            }
        }
        fetchSliderData(tag);
    }, [tag]);    

    return (
        <View style={{flex: 1}}>
            <LinearGradient
            colors={['#8BC0C8', '#E1CAD8']}
            locations={[0, 1]}
            style={styles.eventPageContainer}
            >   
                <View style={styles.headerSection}>
                    <Text style={styles.header}>DISCOVERY</Text>
                    <View style = {styles.searchSection}>
                        <SearchEvent />
                        <Image source={FilterIcon} style={{width: 24, height: 24, cursor: 'pointer'}}/>
                    </View>
                </View>
                <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                    <EventSlider title='Suggested for you' data={event} />
                    {/* <EventSlider title='Created by friends'/> */}
                    {/* Add more components here as needed */}
                </ScrollView>
            </LinearGradient>
        </View>
    );
}
