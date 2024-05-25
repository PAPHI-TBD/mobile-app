import React, { useState } from 'react';
import { View, ScrollView, Button, TextInput } from 'react-native';
import styles from './chat.style';
import BioHeader from './chatMessagesPage/bio/bio';
import BioDescription from './chatMessagesPage/description/description';
import ChatRequest from './chatRequest/chatRequest';

import ChatBubbles from './chatMessagesPage/chatBubbles/chatBubbles';
import ChatInput from './chatMessagesPage/chatBubbles/chatInput/chatInput';

export default function Chat({ chatLog }: { chatLog?: { text: string; type: string, timestamp: string }[] }) {
    // Default or empty chat log data if not provided
    const defaultChatLog = [
        // { text: 'Meep Mop', type: 'sent', timestamp: },
        // { text: 'Meep Mop Meep Mop Meep Mop', type: 'received' },
        // { text: 'no no', type: 'received' },
        // { text: 'yes hello there meep mop', type: 'sent' },
        // { text: 'Meep Mop', type: 'sent' },
        // { text: 'Meep Mop Meep Mop Meep Mop', type: 'received' },
        // { text: 'no no', type: 'received' },
        // { text: 'yes hello there meep mop', type: 'sent' },
        // { text: 'Meep Mop', type: 'sent' },
        // { text: 'Meep Mop Meep Mop Meep Mop', type: 'received' },
        // { text: 'no no', type: 'received' },
        // { text: 'yes hello there meep mop', type: 'sent' },
        {
            text: "Hello!",
            type: "sent",
            timestamp: "2024-05-10T12:30:00" // Example timestamp in ISO 8601 format
        },
        {
            text: "Hi there!",
            type: "received",
            timestamp: "2024-05-10T12:30:00"
        },
        {
            text: "How are you?",
            type: "sent",
            timestamp: "2024-05-10T12:32:00"
        },
        {
            text: "I'm good, thanks!",
            type: "received",
            timestamp: "2024-05-10T12:33:00"
        },
        {
            text: "What are you up to?",
            type: "sent",
            timestamp: "2024-05-10T12:34:00"
        },
        {
            text: "Just chilling at home.",
            type: "received",
            timestamp: '2024-05-10T12:35:00'
        },
        {
            text: "Sounds nice!",
            type: "sent",
            timestamp: "2024-05-10T12:36:00"
        },
        {
            text: "Yeah, it's pretty relaxing.",
            type: "received",
            timestamp: "2024-05-10T12:37:00"
        },
        {
            text: "Got any plans for the weekend?",
            type: "sent",
            timestamp: "2024-05-10T12:38:00"
        },
        {
            text: "Not yet, probably just hanging out with friends.",
            type: "received",
            timestamp: "2024-05-10T12:39:00"
        },
        {
            text: "MEEP MOP",
            type: "sent",
            timestamp: "2024-05-10T16:00:00",
        },
        {
            text: "MEEP MOP MEEP MOP",
            type: "sent",
            timestamp: "2024-05-10T16:00:00",
        },
        {
            text: "MEEP MOP",
            type: "received",
            timestamp: "2024-05-10T16:05:00",
        },
        {
            text: "MEEP MOP MEEP MOP",
            type: "received",
            timestamp: "2024-05-10T16:05:00",
        },

    ];

    const handleSendMessage = (message: string) => {
        // Implement your logic to send the message
        console.log('Sending message:', message);
    };

    const handlePlusButtonClick = () => {
        // Implement your logic when the plus button is clicked
        console.log('Plus button clicked!');
    };

    return (
        <View style={styles.chatContainer}>
            <BioHeader />
            <ScrollView showsVerticalScrollIndicator={false}>

                <BioDescription />
                <ChatRequest />
                <View style={styles.chatBubblesContainer}>
                    <ChatBubbles chatLog={chatLog || defaultChatLog} />
                </View>

            </ScrollView>

            <ChatInput onSendMessage={handleSendMessage} onPlusButtonClick={handlePlusButtonClick} />
            
        </View>
    );
}
