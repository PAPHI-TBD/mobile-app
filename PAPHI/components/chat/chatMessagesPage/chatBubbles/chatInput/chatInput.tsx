import React, { useState } from 'react';
import { View, TextInput, Button, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './chatInput.style';

interface ChatInputProps {
    onSendMessage: (message: string) => void;
    onPlusButtonClick: () => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, onPlusButtonClick }) => {
    const [message, setMessage] = useState('');

    const handleMessageChange = (text: string) => {
        setMessage(text);
    };

    const sendMessage = () => {
        if (message.trim() !== '') {
            onSendMessage(message);
            setMessage('');
        }
    };

    return (
        <View style={styles.inputContainer}>
            {/* plus sign button */}
            <TouchableOpacity style={styles.plusIcon} onPress={onPlusButtonClick}>
                    <FontAwesomeIcon icon={faPlus} size={18} color="black"/>
            </TouchableOpacity>

            <TextInput
                style={styles.input}
                placeholder="chat..."
                value={message}
                onChangeText={handleMessageChange}
            />
            {/* <View style={styles.sendButton}> */}
                <Button color={'#635053'} title="Send" onPress={sendMessage} />
            {/* </View> */}
        </View>
    );
};

export default ChatInput;
