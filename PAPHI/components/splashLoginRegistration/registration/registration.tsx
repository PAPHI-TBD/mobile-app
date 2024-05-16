import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../types'; // Adjust the import path as necessary
import styles from './registration.style';

export default function RegistrationPage() {
    const [fullName, setFullName] = useState('');

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handleNext = () => {
        navigation.navigate('Birthday', { fullName });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>What is your full name?</Text>
            <TextInput
                style={styles.input}
                value={fullName}
                onChangeText={setFullName}
                placeholder="Enter your first name"
            />
            <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}