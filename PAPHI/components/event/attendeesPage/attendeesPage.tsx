import React, { useState } from 'react';
import styles from './attendeesPage.style';
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

interface ProfileItem {
    username: string,
    img: string,
}

// define props interface
interface AttendeesPageProps {
    profileList: ProfileItem[],
    navigateToMainSection: () => void;
}

const AttendeesPage: React.FC<AttendeesPageProps> = ({ profileList, navigateToMainSection }) => {
    

    const renderItem = ({ item, index }: {item: ProfileItem, index: number}) => {
        // Determine the source of the image
        const isUri = item.img.startsWith('http') || item.img.startsWith('file');
        let imageSource;
        try {
            imageSource = isUri ? { uri: item.img } : require(item.img);
        } catch (error) {
            console.error("Error loading image: ", error);
            imageSource = require('../../../assets/bio/bio-pic.png'); // Fallback image
        }

        if (index === 0) {
            return (
                <View style={[styles.attendeeContainer, styles.first]}>
                    <Image
                    source={imageSource}
                    style={[styles.userIcon]}
                    />
                    <Text style={styles.text}>{item.username}</Text>
                </View>
            );
        } else {
            return (
                <View style={styles.attendeeContainer}>
                    <Image
                    source={imageSource}
                    style={styles.userIcon}
                    />
                    <Text style={styles.text}>{item.username}</Text>
                </View>
            );
        }
        
    }

    return (
        <View>
            <TouchableOpacity onPress={navigateToMainSection}>
                <FontAwesomeIcon icon={faArrowLeft} size={25} color='black'/>
            </TouchableOpacity>
            
            <View style={styles.page}>
                <Text style={[styles.text, {paddingLeft: 0}]}>Event Attendees</Text>
                <FlatList
                style={{flex: 1}}
                data={profileList}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                />
            </View>
            
        </View>
        
    );
}

export default AttendeesPage;