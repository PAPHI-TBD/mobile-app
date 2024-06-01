import React from 'react';
import styles from './eventCreator.style';
import { View, Image, Text } from 'react-native';

// define props interface
interface Profile {
    name: string,
    // img: string,
}

interface EventCreatorProps {
    // profile: Profile,
    host: string
}

const EventCreator: React.FC<EventCreatorProps> = ({ host }) => {
    // Determine the source of the image
    // const isUri = profile.img.startsWith('http') || profile.img.startsWith('file');
    let imageSource;
    imageSource = require('../../../../assets/bio/bio-pic.png');
    // try {
    //     imageSource = isUri ? { uri: profile.img } : require(profile.img);
    // } catch (error) {
    //     console.error("Error loading image: ", error);
    //     imageSource = require('../../../../assets/bio/bio-pic.png'); // Fallback image
    // }

    return (
        <View style={styles.container}>
            <Image
                source={imageSource}
                style={styles.userIcon}
            />
            <Text style={styles.name}>Created by <Text style={{fontWeight: 'bold'}}>{host}</Text></Text>
        </View>
    );
}

export default EventCreator;