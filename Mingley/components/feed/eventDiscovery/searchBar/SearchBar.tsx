import React from 'react';
import styles from './SearchBar.style';
import { View, TextInput, Image } from 'react-native';

const SearchBar: React.FC = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../../../assets/feedPageIcons/Search Glyph.png')}
                style={styles.searchIcon}
            />
            <TextInput
                style={styles.input}
                placeholder="Search topics, people, places"
            />
        </View>
    );
}

export default SearchBar;
