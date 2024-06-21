import React, { useState } from 'react';
import { View, Text, Platform, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
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

    const handleBack = () => {
        navigation.navigate('Username', { fullName, date, gender, username });
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} 
        >
            <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                <Icon name="arrowleft" size={30} color="white" />
            </TouchableOpacity>
            <View style={styles.labelContainer}>
                <Text style={styles.label}>What is your</Text>
                <Text style={styles.label}>email?</Text>
            </View>
            <View style={styles.inputWrapper}>
                <TextInput
                    style={[styles.input, { backgroundColor: 'transparent' }]}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Email"
                    placeholderTextColor="#ddd"
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={[styles.button, email ? styles.buttonEnabled : styles.buttonDisabled]} 
                    onPress={handleNext}
                    disabled={!email}
                >
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}