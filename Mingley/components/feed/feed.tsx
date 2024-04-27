import React from 'react';
import { View, Text } from 'react-native';
import styles from './feed.style'; // Import styles from feed.style

export default function Feed() {
    return (
        <View style={styles.container}> {/* Use array for combining styles */}
            <View style={styles.location}>
                <Text style= {styles.mainHeading}>Japantown</Text>
                <Text style= {styles.cityState}>Japantown</Text>
            </View>
        </View>
    );
}
