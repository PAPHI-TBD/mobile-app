import React, { useState } from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Dimensions } from 'react-native';
import styles from './commentSection.style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart, faComment, faArrowCircleRight, faClose } from '@fortawesome/free-solid-svg-icons';
import { Comment } from '../friendEventPost';

interface CommentSectionProps {
    comments: Comment[];
    disableComments: () => void;
}

const CommentSection = ({ comments, disableComments }: CommentSectionProps) => {
    const [commentData, setCommentData] = useState(
        comments.map(comment => ({ ...comment, liked: false }))
    );

    const [newReply, setNewReply] = useState('');
    const [inputHeight, setInputHeight] = useState(40);

    const { width, height } = Dimensions.get('window');
    const vw = width / (100 * 4.3);
    const vh = height / (100 * 4.3);
    const maxInputHeight = 100 * vh;
    const paddingHeight = 25 * vw;

    const handleLike = (commentId: string) => {
        setCommentData(prevComments =>
            prevComments.map(comment =>
                comment.id === commentId
                    ? {
                          ...comment,
                          likes: comment.liked ? comment.likes - 1 : comment.likes + 1,
                          liked: !comment.liked,
                      }
                    : comment
            )
        );
    };


    const handleReplySubmit = () => {
        if (newReply.trim() !== '') {
            const newComment: Comment = {
                id: Math.random().toString(36).substr(2, 9), // Generate a random ID
                name: 'Current User', // Placeholder name for the current user
                text: newReply,
                img: require('../../../../assets/bio/bio-pic.png'), // Placeholder image path
                likes: 0,
                liked: false,
                comments: 0,
                timeSent: 'Just now',
            };
            setCommentData(prevComments => [newComment, ...prevComments]);
            setNewReply('');
            setInputHeight(40); // Reset input height after submitting
        }
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            <View style={[{ flex: 1 }, styles.commentSectionContainer]}>

                <View style={styles.exitContainer}>
                    <TouchableOpacity style={styles.exit} onPress={disableComments}>
                        <Text style={styles.exitText}>EXIT</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={
                    [
                        {
                            height: Math.max(height * 0.6 - inputHeight - paddingHeight, height * 0.6 - maxInputHeight - paddingHeight), 
                            marginBottom: Math.min(inputHeight + paddingHeight, maxInputHeight + paddingHeight),
                            marginTop: '10%'
                        }
                    ]}
                    showsVerticalScrollIndicator={true}>

                    {commentData.map(comment => (
                        <View key={comment.id} style={styles.commentContainer}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={{ uri: comment.img }} style={styles.profileImg} />
                                <View style={styles.commentTextContainer}>
                                    <Text style={[styles.username, { textTransform: 'uppercase' }]}>{comment.name}</Text>
                                    <Text style={styles.commentText}>{comment.text}</Text>
                                </View>
                                <Text style={[styles.username, { marginLeft: 'auto' }]}>{comment.timeSent}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                                <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                                    <TouchableOpacity onPress={() => handleLike(comment.id)}>
                                        <FontAwesomeIcon icon={faHeart} size={18} color={comment.liked ? 'red' : 'white'} />
                                    </TouchableOpacity>
                                    <Text style={styles.likesComments}>{comment.likes}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity>
                                        <FontAwesomeIcon icon={faComment} size={18} color='white' />
                                    </TouchableOpacity>
                                    <Text style={styles.likesComments}>{comment.comments}</Text>
                                </View>
                            </View>
                        </View>
                    ))}
                </ScrollView>

                <View style={[styles.postCommentContainer, { flexDirection: 'row', justifyContent: 'space-evenly' }]}>
                    <TextInput
                        style={[styles.replyContainer, { height: Math.max(40, inputHeight) }]}
                        placeholder='Post your reply'
                        placeholderTextColor='#3C3C43'
                        value={newReply}
                        onChangeText={setNewReply}
                        multiline
                        onContentSizeChange={(e) => setInputHeight(e.nativeEvent.contentSize.height)}
                    />
                    <TouchableOpacity onPress={handleReplySubmit}>
                        <FontAwesomeIcon style={styles.sendMessage} icon={faArrowCircleRight} size={26} color='white' />
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
        
    );
}

export default CommentSection;