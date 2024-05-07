import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './receivedMessage.style';

interface ReceivedMessageProps {
    // add props
    text: string;
    timestamp?: string; // Make timestamp optional
}

const ReceivedMessage: React.FC<ReceivedMessageProps> = ({ text, timestamp }) => {

    return (
        <View>
            <View style={styles.receivedBubble}>
                <Text style={{ fontSize: 16, color: "white", justifyContent: "center" }}>{ text }</Text>                          
            </View>
            {timestamp && <Text style={styles.timestamp}>{timestamp}</Text>} {/* Display timestamp if provided */}        
        </View>
    );
}

export default ReceivedMessage;