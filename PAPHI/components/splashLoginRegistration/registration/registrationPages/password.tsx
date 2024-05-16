import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../../../types'; // Adjust the import path as necessary
import styles from './password.style';

type PasswordRouteProp = RouteProp<RootStackParamList, 'Password'>;

export default function Password() {
    const route = useRoute<PasswordRouteProp>();
    const { fullName, date, gender, username, email } = route.params;

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmIsTyping, setConfirmIsTyping] = useState(false);
    
    const [formData, setFormData] = useState({
        username: fullName,
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

    const createUser = async () => {
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
    
            // Update formData with password and confirm password
            setFormData(prevState => ({
                ...prevState,
                password: password,
                confirmPassword: confirmPassword
            }));
        } catch (error) {
            console.error('Error in password validation:', error);
            return;
        }
    };
    
    useEffect(() => {
        if (formData.password && formData.confirmPassword) {
            createUser().then(() => {
                Alert.alert('Success', 'User created successfully.');
            }).catch(error => {
                console.error('Error creating an account:', error);
                alert('Error creating an account. Please try again later.');
            });
        }
    }, [formData]);
    
    
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Password:</Text>
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password"
                secureTextEntry
            />
            <Text style={styles.label}>Confirm Password:</Text>
            <TextInput
                style={styles.input}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                onFocus={() => setConfirmIsTyping(true)}
                onBlur={() => setConfirmIsTyping(false)}
                placeholder="Confirm your password"
                secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Create User</Text>
            </TouchableOpacity>
        </View>
    );
}
