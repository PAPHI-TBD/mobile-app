import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

// Import your styles
import styles from './splashPage.style';

export default function SplashPage() {
    const navigation = useNavigation<any>(); // Manually setting the type as any for now

    useEffect(() => {
        const timer = setTimeout(() => {
            // Navigate to the login page after the delay
            navigation.navigate('SplashPageButtons');
        }, 2000); // Adjust the delay time as needed (2000 milliseconds = 2 seconds)

        return () => clearTimeout(timer); // Clear the timer on unmount
    }, [navigation]);

    return (
        <LinearGradient
            colors={['#E9CBD9', '#8BC0C8']}
            locations={[0, 0.69]}
            style={styles.container}
        >
            <View style={styles.content}>
                <Image
                    source={require('../../assets/Logo.png')}
                    style={styles.logo}
                />
            </View>
        </LinearGradient>
    );
}
