import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { RootStackParamList } from '../../../types'; // Adjust the import path as necessary
import styles from './registration.style';

export default function RegistrationPage() {
    const [fullName, setFullName] = useState('');

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handleNext = () => {
        if (fullName.trim()) {
            navigation.navigate('Birthday', { fullName });
        }
    };

    const handleBack = () => {
        navigation.navigate('SplashPageButtons');
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} 
        >
            <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                <Icon name="close" size={30} color="rgb(236, 129, 58)" />
            </TouchableOpacity>
            <View style={styles.labelContainer}>
                <Text style={styles.label}>What is your</Text>
                <Text style={styles.label}>full name?</Text>
            </View>
            <View style={styles.inputWrapper}>
                <TextInput
                    style={[styles.input, fullName ? styles.inputActive : styles.inputInactive]}
                    value={fullName}
                    onChangeText={setFullName}
                    placeholder="Full Name"
                    placeholderTextColor="#A9A9A9"
                />
                <Text style={styles.subLabel}>This is how it will appear in the app</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={[styles.button, fullName.trim() ? styles.buttonEnabled : styles.buttonDisabled]} 
                    onPress={handleNext}
                    disabled={!fullName.trim()}
                >
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}