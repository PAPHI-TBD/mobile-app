import React from 'react';
import styles from './login.style';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginPage() {
    const navigation = useNavigation<any>();

    const handleRegistrationPress = () => {
        navigation.navigate('RegistrationPage');
    };

    return (
        <View style={[styles.container, styles.content]}>
            <View style={styles.headerSection}>
                <Text style={styles.headerText}>(Insert App Name)</Text>
                <Text style={styles.subheaderText}>Bringing real world connections back</Text>
            </View>
            <View style={styles.loginSection}>
                <Text style={styles.loginHeaderText}>
                    Login
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Username/Email"
                    placeholderTextColor="#A9A9A9"
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#A9A9A9"
                    keyboardType="email-address"
                />
                <Text style={styles.forgotText}>
                    Forgot Password?
                </Text>
                <TouchableOpacity style={styles.loginButton}>
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