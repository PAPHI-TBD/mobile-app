import React, { useState } from 'react';
import styles from './login.style';
import { View, Text, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation<any>();

    const apiBaseUrl = 'https://moxy-api.azurewebsites.net';

    const handleRegistrationPress = () => {
        navigation.navigate('RegistrationPage');
    };

    const handleLoginPress = async () => {
        try {
            const response = await fetch(`${apiBaseUrl}/api/User/GetUser?username=${username}`);
            if (!response.ok) {
                throw new Error(`Failed to fetch user data: ${response.statusText}`);
            }

            const userData = await response.json();

            // Check if user exists and password matches
            if (userData.data.username === username && userData.data.password === password) {
                // localStorage.setItem('isLoggedIn', 'true');
                // AsyncStorange.setItem('isLoggedIn', 'true'); // if using AsyncStorage for persistence
                navigation.navigate('MainTabs');
            } else {
                Alert.alert('Invalud username or password');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            Alert.alert('Error logging in, please try again later.');
        }
    }

    return (
        <View style={[styles.container, styles.content]}>
            <View style={styles.headerSection}>
                <Text style={styles.headerText}>(Insert App Name)</Text>
                <Text style={styles.subheaderText}>Bringing real world connections back</Text>
            </View>
            <View style={styles.loginSection}>
                <Text style={styles.loginHeaderText}>
                    Log in here
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="#A9A9A9"
                    keyboardType="email-address"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#A9A9A9"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <Text style={styles.forgotText}>
                    Forgot Password?
                </Text>
                <TouchableOpacity 
                    style={[styles.loginButton, username && password ? styles.buttonEnabled : styles.buttonDisabled]} 
                    onPress={handleLoginPress}
                    disabled={!username && !password}
                    >
                    <Text style={styles.loginButtonText}>Log in</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.orSection}>
                <View style={styles.line} />
                <Text style={styles.orText}>or</Text>
                <View style={styles.line} />
            </View>
            <View style={styles.appIconSection}>
                <Image
                    source={require('../../../assets/loginIcons/Ellipse 6.png')}
                    style={styles.loginIcons}
                />
                <Image
                    source={require('../../../assets/loginIcons/Ellipse 3.png')}
                    style={styles.loginIcons}
                />
                <Image
                    source={require('../../../assets/loginIcons/Ellipse 5.png')}
                    style={styles.loginIcons}
                />
                <Image
                    source={require('../../../assets/loginIcons/Ellipse 4.png')}
                    style={styles.loginIcons}
                />
            </View>
            <View style={styles.signUpSection}>
                <Text>
                    Don't have an account? <Text style={styles.signUpText}onPress={handleRegistrationPress}>Sign up</Text>
                </Text>
            </View>
        </View>
    );
}
