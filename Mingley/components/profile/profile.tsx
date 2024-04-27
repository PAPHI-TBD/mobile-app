import React from 'react';
import styles from './profile.style';
import { View, Text, Dimensions, Image, Button, ImageStyle } from 'react-native';

const guidelineBaseWidth = 390;
const guidelineBaseHeight = 844;
const { width , height } = Dimensions.get("window");
const horizontalScale = (size: number) =>
    (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) =>
    (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) =>
    size + (horizontalScale(size) - size) * factor;

export default function Profile() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image 
                    style={styles.avatar as ImageStyle} 
                    source={{ 
                        // replace with user data
                        uri: 'https://www.bootdey.com/img/Content/avatar/avatar6.png' 
                    }} 
                />
                <View style={styles.info}>
                    <Text style={styles.name}>Finna fix this</Text>
                    <Text style={styles.username}>@johndoe</Text>
                    <Button title="Edit Profile" onPress={() => {}} />
                </View>
            </View>
            <View style={styles.stats}>
            <View style={styles.stat}>
                <Text style={styles.statLabel}>Posts</Text>
                <Text style={styles.statValue}>1,234</Text>
            </View>
            <View style={styles.stat}>
                <Text style={styles.statLabel}>Following</Text>
                <Text style={styles.statValue}>123</Text>
            </View>
            <View style={styles.stat}>
                <Text style={styles.statLabel}>Followers</Text>
                <Text style={styles.statValue}>456</Text>
            </View>
            </View>
            <Text style={styles.bio}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
        </View>
    );
};