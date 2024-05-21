import React, { useState } from 'react';
import styles from './attendees.style';
import { View, Image, Text, FlatList } from 'react-native';

interface ProfileItem {
    username: string,
    img: string,
}

// define props interface
interface AttendeesProps {
    number: number,
    profileList: ProfileItem[],
}

const Attendees: React.FC<AttendeesProps> = ({ number, profileList }) => {
    

    const renderItem = ({ item, index }: {item: ProfileItem, index: number}) => {
        // Determine the source of the image
        const isUri = item.img.startsWith('http') || item.img.startsWith('file');
        let imageSource;
        try {
            imageSource = isUri ? { uri: item.img } : require(item.img);
        } catch (error) {
            console.error("Error loading image: ", error);
            imageSource = require('../../../../assets/bio/bio-pic.png'); // Fallback image
        }

        if (index === 0) {
            return (
                <View>
                    <Image
                    source={imageSource}
                    style={[styles.userIcon, styles.first]}
                    />
                </View>
            );
        } else {
            return (
                <View>
                    <Image
                    source={imageSource}
                    style={styles.userIcon}
                    />
                </View>
            );
        }
        
    }

    return (
        <View style={styles.container}>
            <Text style={styles.number}>{number}</Text>
            <FlatList
            style={{flex: 1}}
            data={profileList}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            />
        </View>
        
    );
}

export default Attendees;