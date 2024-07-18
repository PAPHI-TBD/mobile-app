import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Swipeable } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck, faTrash, faX } from '@fortawesome/free-solid-svg-icons';
import styles from './matchRequest.style';

export interface User {
    id: string;
    username: string;
    name: string;
    bio: string;
    img: any;
    prompt: string;
    message: string;
    messageTime: string;
    unread: boolean;
}

interface MatchingRequestProps {
    user: User;
    onAccept: (userId: string) => void;
    onReject: (userId: string) => void;
}

const MatchingRequestCard = ({ user, onAccept, onReject }: MatchingRequestProps ) => {
    const renderRightActions = () => (
        <View style={styles.actionsContainer}>
            <TouchableOpacity style={[styles.actionButton, styles.rejectContainer]} onPress={() => onReject(user.id)}>
                <FontAwesomeIcon icon={faX} size={24} color="black" />
                {/* <Text style={styles.actionText}>Reject</Text> */}
            </TouchableOpacity>
            <TouchableOpacity style={[styles.actionButton, styles.acceptContainer]} onPress={() => onAccept(user.id)}>
                <FontAwesomeIcon icon={faCheck} size={24} color="black" />
                {/* <Text style={styles.actionText}>Accept</Text> */}
            </TouchableOpacity>
        </View>
    );

    return (
        <Swipeable renderRightActions={renderRightActions}>
            <View style={[styles.card, user.unread && styles.unreadCard]}>
                <Image source={user.img} style={styles.image} />
                <View style={styles.text}>
                    <Text style={[{ fontWeight: '600', fontSize: 16 }, user.unread && { fontWeight: '700' }]}>{user.name}</Text>
                    <View style={{ marginLeft: '3%'}}>
                        <Text style={[{ fontWeight: '400' }, user.unread && { fontWeight: '500' }]}>{user.prompt}</Text>
                        <Text style={[{ fontWeight: '200'}, user.unread && { fontWeight: '300' }]}>{user.message}</Text>    
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 'auto', marginVertical: 'auto' }}>
                    <Text style={[{ fontWeight: '400', fontSize: 15, marginVertical: 'auto' }, user.unread && { fontWeight: '500' }]}>{user.messageTime}</Text>
                    {user.unread && (
                        <View style={styles.notiBubble}></View>
                    )}
                </View>
            </View>
        </Swipeable>
        // <View style={styles.card}>
        //     <Text style={styles.username}>{user.username}</Text>
            
        // </View>
    );
};

export default MatchingRequestCard;