import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './description.style';

interface DescriptionProps {
    description: string;
    user: {
        img: string;
        name: string;
    };
}

const Description = ({ description, user }: DescriptionProps) => {

    return (
        <View style={styles.descriptionContainer}>
            <Text style={{ color: 'black', fontSize: 14, fontWeight: '600', marginBottom: 10 }}>About this event</Text>
            <Text style={{ color: 'black', fontSize: 12, fontWeight: 'regular' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>

            <View style={styles.eventCreator}>
                <Image style={styles.userImage} />
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.creatorText}>Hosted by </Text>
                    <Text style={[styles.creatorText, { color: '#505050', fontWeight: '600' }]}>Organizer Name</Text>
                </View>
            </View>
        </View>
    );
};

export default Description;