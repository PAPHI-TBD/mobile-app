import React, { useState } from 'react';
import styles from './imagePost.style';
import { View, Image, Text } from 'react-native';

// define props interface
interface ImagePostProps {
    img: string,
}

const ImagePost: React.FC<ImagePostProps> = ({ img }) => {
    // Determine the source of the image
    const isUri = img.startsWith('http') || img.startsWith('file');
    let imageSource;
    try {
        imageSource = isUri ? { uri: img } : require(img);
    } catch (error) {
        console.error("Error loading image: ", error);
        imageSource = require('../../../../assets/event/sampleEvent.jpg'); // Fallback image
    }

    return (
        <View style={[styles.container, styles.shadowProp]}>
            <Image
                source={imageSource}
                style={[styles.image, styles.shadowProp]}
            />
        </View>
    );
}

export default ImagePost;