import React from 'react';
import styles from './info.style';
import { View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendarDays, faLocationDot } from '@fortawesome/free-solid-svg-icons';

// define props interface
interface InfoProps {
    date: string;
    time: string;
    location: string;
}

const Info: React.FC<InfoProps> = ({ date, time, location }) => {

    return (
        <View style={styles.infoContainer}>
            <View style={styles.date}>
                <FontAwesomeIcon icon={faCalendarDays} size={18} color='black' />
                <Text style={styles.dateText}>{date}</Text>
            </View>
            
            <Text style={{fontSize: 12, marginVertical: 'auto'}}>{time}</Text>

            <View style={styles.location}>
                <FontAwesomeIcon icon={faLocationDot} size={15} color='black' />
                <Text style={styles.locationText}>{location}</Text>
            </View>

        </View>
    );
}

export default Info;