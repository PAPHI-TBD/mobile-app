import React, {useState} from 'react';
import styles from './CommentItem.style';
import { View, Text, TouchableOpacity } from 'react-native';
import CommentCreator from '../commentCreator/CommentCreator';

interface CommentItemProps {
    id: number;
    parent_id: number;
    profile: {
        name: string;
        img: string;
    };
    text: string;
    date: string;
    reactions: number;
    type: number;
}

const CommentItem: React.FC<CommentItemProps> = ({ profile, text, date }) => {
    return (
        <View style={styles.container}>
            <View style={styles.commentHeader}>
            <CommentCreator profile={profile} />
            <Text style={styles.commentDate}>{date}</Text>
            </View>
            <Text style={styles.commentText}>{text}</Text>
            <TouchableOpacity style={styles.reactButton}>
                <Text style={styles.reactButtonText}>React</Text>
            </TouchableOpacity>
        </View>
    );
}

export default CommentItem;