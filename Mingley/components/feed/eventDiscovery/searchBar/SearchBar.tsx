import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar: React.FC = () => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Search topics, people, places"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 8,
        marginVertical: 10,
    },
    input: {
        fontSize: 16,
    },
});

export default SearchBar;
