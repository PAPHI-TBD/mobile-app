import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { RouteProp, useRoute, useNavigation, NavigationProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { RootStackParamList } from '../../../../types'; // Adjust the import path as necessary
import styles from './password.style';

type PasswordRouteProp = RouteProp<RootStackParamList, 'Password'>;

interface FormData {
    fullName: string;
    username: string;
    password: string;
    confirmPassword: string;
    email: string;
    age: string;
    dob: string;
    sex: string;
}

export default function Password() {
    const route = useRoute<PasswordRouteProp>();
    const { fullName, date, gender, username, email } = route.params;
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmIsTyping, setConfirmIsTyping] = useState(false);
    
    const [formData, setFormData] = useState<FormData>({
        fullName: fullName,
        username: username,
        password: '',
        confirmPassword: '',
        email: email,
        age: '',
        dob: date.toISOString().split('T')[0],
        sex: gender
    });

    const validatePassword = () => {
        if (password && confirmPassword) {
            if (password !== confirmPassword) {
                throw new Error('Passwords do not match. Please try again.');
            }
        }
    };

    const calculateAge = (dob: string) => {
        if (dob) {
            const birthDate = new Date(dob);
            const today = new Date();
            let userAge = today.getFullYear() - birthDate.getFullYear();
            const monthDifference = today.getMonth() - birthDate.getMonth();
            if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
                userAge--;
            }
            return userAge.toString();
        }
        return '';
    };

    useEffect(() => {
        setFormData(prevState => ({
            ...prevState,
            age: calculateAge(formData.dob)
        }));
    }, [formData.dob]);

    useEffect(() => {
        if (!confirmIsTyping) {
            validatePassword();
        }
    }, [confirmIsTyping, password, confirmPassword]);

    const createUser = async (formData: FormData) => {
        console.log('Form Data:', formData);
        const response = await fetch('https://moxy-api.azurewebsites.net/api/User/CreateUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        if (!response.ok) {
            throw new Error(`Failed to create user: ${response.statusText}`);
        }
        const responseData = await response.json();
        console.log('User created successfully:', responseData);
    };

    const handleSubmit = async () => {
        try {
            validatePassword();

            const updatedFormData: FormData = {
                ...formData,
                password: password,
                confirmPassword: confirmPassword
            };

            await createUser(updatedFormData);

            Alert.alert('Success', 'User created successfully.');
            navigation.navigate('MainTabs');
        } catch (error) {
            console.error('Error in password validation:', error);
            Alert.alert('Error', 'An unexpected error occurred.');
        }
    };

    const handleBack = () => {
        navigation.navigate('Email', { fullName, date, gender, username, email });
    };
    
    return (
        <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} 
        >
            <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                <Icon name="arrowleft" size={30} color="#212F3D" />
            </TouchableOpacity>
            <View style={styles.labelContainer}>
                <Text style={styles.label}>Enter your</Text>
                <Text style={styles.label}>password:</Text>
            </View>
            <View style={styles.inputWrapper}>
                <TextInput
                    style={[styles.input, { backgroundColor: 'transparent' }]}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Password"
                    placeholderTextColor="#ddd"
                    secureTextEntry
                />
            </View>
            <View style={styles.labelContainer}>
                <Text style={styles.label}>Confirm your</Text>
                <Text style={styles.label}>password:</Text>
            </View>
            <View style={styles.inputWrapper}>
                <TextInput
                    style={[styles.input, { backgroundColor: 'transparent' }]}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    placeholder="Confirm Password"
                    placeholderTextColor="#ddd"
                    secureTextEntry
                    onFocus={() => setConfirmIsTyping(true)}
                    onBlur={() => setConfirmIsTyping(false)}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={[styles.button, password && confirmPassword ? styles.buttonEnabled : styles.buttonDisabled]} 
                    onPress={handleSubmit}
                    disabled={!password && !confirmPassword}
                >
                    <Text style={styles.buttonText}>Create User</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}
