import React, { useState } from 'react';
import styles from './chatRequest.style';
import { View, Text, TouchableOpacity } from 'react-native';

// run sudo npm install --save @fortawesome/fontawesome-svg-core \
//  @fortawesome/free-solid-svg-icons \
//  @fortawesome/react-native-fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

interface ChatRequestProps {
    // add props
    name: string;
}

const ChatRequest: React.FC = ({}) => {
    
    const [requestData, setRequestData] = useState<ChatRequestProps[]>([
        {
            name: 'John Doe',
        },
    ]);

    const updateRequestData = (newData: ChatRequestProps[]) => {
        setRequestData(newData);
    };

    const handleAccept = () => {
        // Handle accept action here
        console.log('Accept button clicked');
    };

    const handleReject = () => {
        // Handle reject action here
        console.log('Reject button clicked');
    };

    return (
        <View style={styles.requestContainer}>
            {requestData.map((data, index) => (
                <View style={styles.textContainer} key={index}>
                    
                    <Text style={styles.text}>{data.name} has requested to Mingle</Text>

                    {/* Accept button */}
                    <TouchableOpacity onPress={handleAccept}>
                        <FontAwesomeIcon icon={faCheck} size={36} color="black" style={styles.icon}/>
                    </TouchableOpacity>

                    {/* Reject button */}
                    <TouchableOpacity onPress={handleReject}>
                        <FontAwesomeIcon icon={faTimes} size={36} color="black" style={styles.icon}/>
                    </TouchableOpacity>

                </View>
            ))}
        </View>
    );

}

export default ChatRequest;