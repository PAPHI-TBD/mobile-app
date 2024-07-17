import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './profileTags.style';

interface ProfileTag {
    name: string;
}

interface ProfileTagProps {
    profileTags: ProfileTag[],
}

const ProfileTags = ({ profileTags }: ProfileTagProps) => {
    const renderTag = (tag: ProfileTag) => {
        return (
            <View style={styles.tagContainer}>
                <Text style={styles.text}>{ tag.name }</Text>
            </View>
        );
    };

    return (
        <View style={styles.tagsContainer}>
            {profileTags.map(renderTag)}
        </View>
    );
};

export default ProfileTags;