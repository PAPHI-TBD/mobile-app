import React from 'react';
import { View, Text, Dimensions, Image, Button, ViewStyle, ImageStyle, TextStyle } from 'react-native';

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

const styles: { [key: string]: ViewStyle | TextStyle } = {
    container: {
        backgroundColor: '#fff',
    },
    header: {
        marginTop:50,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    info: {
        marginLeft: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    username: {
        color: '#999',
        fontSize: 18,
    },
    stats: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },
    stat: {
        flex: 1,
        alignItems: 'center',
    },
    statLabel: {
        color: '#999',
        fontSize: 14,
    },
    statValue: {
        fontSize: 18,
    },
    bio: {
        padding: 20,
        fontSize: 16,
        color: '#333',
    },
};