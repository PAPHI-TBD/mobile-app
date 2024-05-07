import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './chatBubbles.style';
import SentMessage from './sentMessage/sentMessage';
import ReceivedMessage from './receivedMessage/receivedMessage';

interface ChatLogItem {
    text: string;
    type: string;
    timestamp: string;
}

interface ChatBubblesProps {
    // add props
    chatLog: ChatLogItem[];
}


const ChatBubbles: React.FC<ChatBubblesProps> = ({ chatLog }) => {
    const showTimestamp = (item: ChatLogItem) => {
        const index = chatLog.indexOf(item);
        return index === 0 || chatLog[index - 1].timestamp !== item.timestamp;
    };

    const renderItem = ({ item }: { item: ChatLogItem }) => {
        const formattedTimestamp = new Date(item.timestamp).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
        if (item.type === 'sent') {
            return <SentMessage text={item.text} timestamp={showTimestamp(item) ? formattedTimestamp : undefined} />;
        } else {
            return <ReceivedMessage text={item.text} timestamp={showTimestamp(item) ? formattedTimestamp : undefined} />;
        }
    };

    return (
        <FlatList
            style={styles.FlatList}
            data={chatLog} // Pass the chat log data as prop to the FlatList
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
        />
    );
};

export default ChatBubbles;