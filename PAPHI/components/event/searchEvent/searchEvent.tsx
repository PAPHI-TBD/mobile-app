import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './searchEvent.style';

interface SearchEventProps {
    // add props
    searchTopic: string;
}

const SearchEvent: React.FC = ({}) => {

    const [searchData, setSearchData] = useState<SearchEventProps[]>([
        {
            searchTopic: 'hawaiiiii',
        },
    ]);

    const updateSearchData = (newData: SearchEventProps[]) => {
        setSearchData(newData);
    };

    const onSearchButtonClick = () => {

    };

    const [message, setMessage] = useState('');

    const handleMessageChange = (text: string) => {
        setMessage(text);
    };

    return (

        <View style={styles.searchEventContainer}>
            <TouchableOpacity style={styles.icon} onPress={onSearchButtonClick}>
                <FontAwesomeIcon icon={faSearch} size={18} color="#3C3C43"/>
            </TouchableOpacity>
            <TextInput
                style={styles.input}
                placeholder="Search events"
                value={message}
                onChangeText={handleMessageChange}
            />
        </View>

    );

}

export default SearchEvent