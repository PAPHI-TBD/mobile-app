import React, { useState } from 'react';
import { View, Text, Button, Platform, TouchableOpacity, TextInput } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { RootStackParamList } from '../../../../types'; // Adjust the import path as necessary
import styles from './email.style';

type EmailRouteProp = RouteProp<RootStackParamList, 'Email'>;

export default function Email() {
    const route = useRoute<EmailRouteProp>();
    const { fullName, date, gender, username } = route.params;

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const [email, setEmail] = useState('');

    const handleNext = () => {
        navigation.navigate('Password', { fullName, date, gender, username, email });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>What is your email?</Text>
            <TextInput
                style={styles.input}
                value={fullName}
                onChangeText={setEmail}
                placeholder="Enter your email"
            />
            <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}