import React from 'react';
import styles from './eventCreator.style';
import { View, Image, Text } from 'react-native';

// define props interface
interface Profile {
    name: string,
    img: string,
}

interface EventCreatorProps {
    profile: Profile,
}

const EventCreator: React.FC<EventCreatorProps> = ({ profile }) => {
    // Determine the source of the image
    const isUri = profile.img.startsWith('http') || profile.img.startsWith('file');
    let imageSource;
    try {
        imageSource = isUri ? { uri: profile.img } : require(profile.img);
    } catch (error) {
        console.error("Error loading image: ", error);
        imageSource = require('../../../../assets/bio/bio-pic.png'); // Fallback image
    }

    return (
        <View style={styles.container}>
            <Image
                source={imageSource}
                style={styles.userIcon}
            />
            <Text style={styles.name}>Created by <Text style={{fontWeight: 'bold'}}>{profile.name}</Text></Text>
        </View>
    );
}

export default EventCreator;