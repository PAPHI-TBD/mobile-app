import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './sentMessage.style';

interface SentMessageProps {
    // add props
    text: string;
    timestamp?: string; // Make timestamp optional
} 

const SentMessage: React.FC<SentMessageProps> = ({ text, timestamp }) => {

    // const [sentData, setSentData] = useState<SentMessageProps[]>([
    //     {
    //         text: 'Meep Mop',
    //     },
    // ]);

    return (
        <View>
            <View style={styles.sentBubble}>
                <Text style={{ fontSize: 16, color: "#fff" }}>{ text }</Text>
            </View>   
            {timestamp && <Text style={styles.timestamp}>{timestamp}</Text>} {/* Display timestamp if provided */}         
        </View>
        
    );
}

export default SentMessage;