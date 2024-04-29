import React from 'react';
import styles from './PhotosItem.style';
import { View, Text, StyleSheet } from 'react-native';

interface PhotosItemProps {
    id: number;
    username: string;
}

const PhotosItem: React.FC<PhotosItemProps> = ({ id, username }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{username} {id}</Text>
        </View>
    );
}

export default PhotosItem;
