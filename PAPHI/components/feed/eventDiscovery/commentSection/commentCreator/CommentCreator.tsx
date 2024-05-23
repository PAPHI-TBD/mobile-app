import React from 'react';
import styles from './CommentCreator.style';
import { View, Image, Text } from 'react-native';

// define props interface
interface Profile {
    name: string,
    img: string,
}

interface CommentCreatorProps {
    profile: Profile,
}

const CommentCreator: React.FC<CommentCreatorProps> = ({ profile }) => {
    // Determine the source of the image
    const isUri = profile.img.startsWith('http') || profile.img.startsWith('file');
    let imageSource;
    try {
        imageSource = isUri ? { uri: profile.img } : require(profile.img);
    } catch (error) {
        console.error("Error loading image: ", error);
        imageSource = require('../../../../../assets/bio/bio-pic.png'); // Fallback image
    }

    return (
        <View style={styles.container}>
            <Image
                source={imageSource}
                style={styles.userIcon}
            />
            <Text style={styles.name}>{profile.name}</Text>
        </View>
    );
}

export default CommentCreator;