import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './event.style';
import SearchEvent from './searchEvent/searchEvent';
import EventPost from './eventPost/eventPost';
import Filter from './filter/filter';


export default function Event({ }) {

    return (

        <View style={{flex: 1}}>
            <LinearGradient
            colors={['#8BC0C8', '#E9CBD9']}
            locations={[0, 0.69]}
            style={styles.eventPageContainer}
            >
                <Text style={styles.header}>EVENT DISCOVERY</Text>
                <SearchEvent />
                <Filter />
                <EventPost />
            </LinearGradient>
        </View>
    );

}
