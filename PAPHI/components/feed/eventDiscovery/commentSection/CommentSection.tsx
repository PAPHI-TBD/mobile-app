import React, {useState} from 'react';
import styles from './CommentSection.style';
import { View, ScrollView, TextInput, Button, TextInputKeyPressEventData, NativeSyntheticEvent } from 'react-native';
import CommentItem from './commentItem/CommentItem';

const CommentSection: React.FC = () => {
    const [inputText, setInputText] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    // const [activeReaction, setActiveReaction] = useState(false);

    // dummy data
    const [comments, setComments] = useState([
        { id: 2, parent_id: 1, profile: {name: 'MATT DIZON', img: require('../../../../assets/bio/bio-pic.png')}, text: 'This event sucked', date: 'May 20', reactions: 0, type: 0 },
        { id: 3, parent_id: 2, profile: {name: 'MATT DIZON', img: require('../../../../assets/bio/bio-pic.png')}, text: 'hello', date: 'May 20', reactions: 0, type: 0},
        { id: 4, parent_id: 3, profile: {name: 'MATT DIZON', img: require('../../../../assets/bio/bio-pic.png')}, text: 'hi', date: 'May 20', reactions: 0, type: 0 },
    ]);

    const handleAddComment = () => {
        if (inputText.trim() !== '') {
            const newComment = {
                id: comments.length + 1, 
                parent_id: 0, 
                profile: {
                    name: 'MATT DIZON',
                    img: require('../../../../assets/bio/bio-pic.png'),
                },
                text: inputText,
                date: new Date().toLocaleDateString(),
                reactions: 0,
                type: 0
            };
            setComments([newComment, ...comments]);
        }
    }
    
    const handleKeyPress = (event: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
        if (event.nativeEvent.key === 'Enter') {
            handleAddComment();
            setInputText('');
        }
    };

    // const handleAddReaction = () => {
    //     if (inputText.trim() !== '') {
    //         const newComment = {
    //             id: comments.length + 1,
    //             parent_id: comment.id,
    //             username: 'Your username',
    //             text: inputText,
    //             date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    //             reactions: 0,
    //             type: 1
    //         };
    //         setComments([newComment, ...comments]);
    //     }
    // }

    return (
        <ScrollView>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder = 'Write a reaction...'
                    onFocus={() => {setIsFocused(true)}}
                    onChangeText={setInputText}
                    onKeyPress={handleKeyPress}
                    value={inputText}
                    style={[styles.input, isFocused && styles.inputFocused]}
                />
            </View>
            <View style={styles.commentContainer}>
                {[...comments].map(comment => (
                    <CommentItem
                        key={comment.id} 
                        id={comment.id} 
                        parent_id={comment.parent_id} 
                        profile={comment.profile}
                        text={comment.text} 
                        date={comment.date}
                        reactions={comment.reactions}
                        type={comment.type}
                        />
                    ))}
                </View>
                <View>{comments.length}</View>
        </ScrollView>
    );
}

export default CommentSection;