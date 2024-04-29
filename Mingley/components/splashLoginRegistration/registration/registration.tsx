import React from 'react';
import styles from './registration.style';
import { View, StyleSheet, Text, TextInput, Image} from 'react-native';

export default function registrationPage() {
    return (
        <View style={[styles.container, styles.content]}>
            <View style={styles.headerSection}>
                <Text style={styles.headerText}>(Insert App Name)</Text>
                <Text style={styles.subheaderText}>Bringing real world connections back</Text>
            </View>
            <View style={styles.loginSection}>
                <Text style={styles.loginHeaderText}>
                    Sign Up
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="#A9A9A9"
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#A9A9A9"
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#A9A9A9"
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    placeholderTextColor="#A9A9A9"
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Birthday"
                    placeholderTextColor="#A9A9A9"
                    keyboardType="email-address"
                />
            </View>
            <View style={styles.orSection}>
                <View style={styles.line} /> {/* Left line */}
                <Text style={styles.orText}>or</Text>
                <View style={styles.line} /> {/* Right line */}
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
        </View>
    );
}