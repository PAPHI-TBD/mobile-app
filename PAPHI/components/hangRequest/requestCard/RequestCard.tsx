import React from 'react';
import styles from './RequestCard.style'
import { View, Text, Image } from 'react-native';

interface RequestCardProps {
    id: number;
    username: string;
    desc: string;
    occupation: string;
}

const RequestCard: React.FC<RequestCardProps> = ({ username, occupation, desc }) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.friendProfilePicture}>
                {/* once we get data get the image link for the user profile */}
                <Image></Image>
                {/* replace white circle */}
                <View style={styles.whiteCircle}></View>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.userInfoContainer}>
                    <Text style={styles.usernameText}>{username}</Text>
                    <Text style={styles.userOccupationText}>{occupation}</Text>
                </View>
                <View style={styles.statusInfo}>
                    <Text style={styles.textDescription}>{desc}</Text>
                </View>
            </View>
            <View style={styles.iconContainer}>
                <Image style={styles.icon}></Image>
                <Image style={styles.icon}></Image>
            </View>
            {/* <Text style={styles.usernameText}>{username}</Text> */}
            {/* <Text style={styles.descriptionText}>{desc}</Text> */}
        </View>
    );
}

export default RequestCard;