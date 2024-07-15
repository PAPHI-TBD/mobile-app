import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Swipeable } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from './matchRequest.style';

export interface User {
    id: string;
    username: string;
    name: string;
    bio: string;
}

interface MatchingRequestProps {
    user: User;
    onAccept: (userId: string) => void;
    onReject: (userId: string) => void;
}

const MatchingRequestCard = ({ user, onAccept, onReject }: MatchingRequestProps ) => {
    const renderRightActions = () => (
        <View style={styles.actionsContainer}>
            <TouchableOpacity style={styles.actionButton} onPress={() => onReject(user.id)}>
                <FontAwesomeIcon icon={faTrash} size={24} color="red" />
                {/* <Text style={styles.actionText}>Reject</Text> */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton} onPress={() => onAccept(user.id)}>
                <FontAwesomeIcon icon={faCheck} size={24} color="green" />
                {/* <Text style={styles.actionText}>Accept</Text> */}
            </TouchableOpacity>
        </View>
    );

    return (
        <Swipeable renderRightActions={renderRightActions}>
            <View style={styles.card}>
                <Text style={styles.username}>{user.username}</Text>
            </View>
        </Swipeable>
        // <View style={styles.card}>
        //     <Text style={styles.username}>{user.username}</Text>
            
        // </View>
    );
};

export default MatchingRequestCard;