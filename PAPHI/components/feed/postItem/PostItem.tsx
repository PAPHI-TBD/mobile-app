import React from 'react';
import styles from './PostItem.style'; // Import styles from feed.style
import { View, Text, ScrollView, Button, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

interface PostItemsProps {
    id: number;
    username: string;
    desc: string;
    picture: string;
    navigation: NavigationProp<any>;
}

const PostItem: React.FC<PostItemsProps> = ({ username, desc, navigation }) => {
    const handleUsernamePress = () => {
        navigation.navigate('Profile');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleUsernamePress}>
                <Text>{username}</Text>
            </TouchableOpacity>
            <Text style={styles.descriptionText}>{desc}</Text>
        </View>
    );
}

export default PostItem;