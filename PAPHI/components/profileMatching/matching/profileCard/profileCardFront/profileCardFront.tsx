import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import styles from './profileCardFront.style';
import ProfileTags from './profileTags/profileTags';

interface ProfileCardFrontProps {
    name: string;
    username: string;
    bio: string;
    profileTags: any;
    events: string[];
    onPress: () => void;
}

const ProfileCardFront = ({ name, username, bio, profileTags, events, onPress }: ProfileCardFrontProps) => {
    return (
        <TouchableOpacity style={styles.profileCardContainer} onPress={onPress}>
            <Image style={styles.profilePicture}></Image>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.username}>{username}</Text>
            <Text style={styles.bio}>{bio}</Text>
            <Text style={styles.header}>Interests:</Text>
            <ProfileTags profileTags={profileTags}/>
            <Text style={styles.header}>Recent/Upcoming Events:</Text>
            <View style={styles.eventsContainer}>
                <Text style={styles.eventText}>{events[0]}</Text>
                <Text style={styles.eventText}>{events[1]}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default ProfileCardFront;
