import React from 'react';
import styles from './logoPage.style';
import { View, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function logoPage() {
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