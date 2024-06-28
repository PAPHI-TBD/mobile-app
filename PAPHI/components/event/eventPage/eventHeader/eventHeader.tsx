import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './eventHeader.style';

const EventHeader = ({}) => {

    const tickets = () => {
        // implement finding and posting tickets routing
        console.log('find / post tickets');
    };

    const resellers = () => {
        // implement routing to official resellers page
        console.log('official resellers');
    };

    return (
        <View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: '#181818', fontWeight: '900', fontSize: 24 }}>OhGeesy</Text>
                <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                    <TouchableOpacity onPress={tickets}>
                        <Text style={ styles.ticketText }>Find/Post Tickets</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={resellers}>
                        <Text style={ styles.ticketText }>Official Resellers</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default EventHeader;