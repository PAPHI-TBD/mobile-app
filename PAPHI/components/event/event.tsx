import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './event.style';
import SearchEvent from './searchEvent/searchEvent';
// import FilterIcon from '../../assets/event/eventFilter.jpg';
import FilterIcon from './eventFilter.png';

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
            locations={[0, 0.69]}
            style={styles.eventPageContainer}
            >
                <Text style={styles.header}>EVENT DISCOVERY</Text>
                <View>
                    <SearchEvent />
                    <Image source={FilterIcon} style={{width: 24, height: 24}}/>
                    <Text>hi</Text>

                </View>
            
                
            </LinearGradient>
        </View>

        
    );

}
