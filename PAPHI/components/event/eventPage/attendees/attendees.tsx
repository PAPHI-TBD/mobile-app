import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './attendees.style';

interface Attendee {
    img: string;
    // name: string;
}

interface AttendeesProps {
    number: number;
    userList: Attendee[];
}

const Attendees = ({ number, userList }: AttendeesProps) => {

    const renderAttendee = (user: Attendee) => {
        return (
            <Image style={styles.userImage}/>
        );
    };

    const showMore = () => {
        // implement showing more attendees
    };

    return (
        <View style={styles.attendeesContainer}>
            <Text style={{ color: 'black', fontSize: 14, fontWeight: '600', marginBottom: 10 }}>Attendees</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.attendeesScroll}>
                {userList.map(renderAttendee)}
            </ScrollView>
            <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                <Text style={styles.number}>100 </Text>
                <Text style={[styles.number, { color: '#5545353', fontWeight: 'regular' }]}>people going</Text>

                <TouchableOpacity>
                    <Text style={{ fontSize: 10, textDecorationLine: 'underline', paddingHorizontal: 5, marginTop: 2, fontWeight: '500' }}>show more</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    );
};

export default Attendees;