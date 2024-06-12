import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
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
                <View>
                    <EventSlider title='Suggested for you'/>
                    {/* <EventSlider title='Created by friends'/> */}
                    {/* vertical slider */}
                </View>
            </LinearGradient>
        </View>

        
    );

}
