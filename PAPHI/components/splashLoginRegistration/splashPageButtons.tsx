import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './splashPageButtons.style';

const SplashPageButtons: React.FC = () => {
    const navigation = useNavigation<any>();

    const handleLoginPress = () => {
        navigation.navigate('LoginPage');
    };
    const handleRegistrationPress = () => {
        navigation.navigate('RegistrationPage');
    };

    return (
        <LinearGradient
            colors={['#E9CBD9', '#8BC0C8']}
            locations={[0.21, 0.49]}
            style={styles.container}
        >
            <Image
                source={require('../../assets/Logo.png')}
                style={styles.logo}
            />
            <View style={styles.headerSection}>
                <Text style={styles.headerText}>(Insert App Name)</Text>
                <Text style={styles.subheaderText}>Bringing real world connections back</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleRegistrationPress}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}

export default SplashPageButtons;
