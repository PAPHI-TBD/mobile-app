import React from 'react';
import { View, StyleSheet, Image} from 'react-native';
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
                    source={require('../assets/Logo.png')}
                    style={styles.logo}
                />
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 142, // Adjust width as needed
        height: 178, // Adjust height as needed
    },
});
