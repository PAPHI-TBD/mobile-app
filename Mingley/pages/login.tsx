import React from 'react';
import { View, StyleSheet, Text, TextInput, Image} from 'react-native';

export default function loginPage() {
    return (
        <View style={[styles.container, styles.content]}>
            <View style={styles.headerSection}>
                <Text style={styles.headerText}>Mingley</Text>
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
            </View>
            <View style={styles.orSection}>
                <View style={styles.line} /> {/* Left line */}
                <Text style={styles.orText}>or</Text>
                <View style={styles.line} /> {/* Right line */}
            </View>
            <View style={styles.appIconSection}>
                <Image
                    source={require('../assets/loginIcons/Ellipse 6.png')}
                    style={styles.loginIcons}
                />
                <Image
                    source={require('../assets/loginIcons/Ellipse 3.png')}
                    style={styles.loginIcons}
                />
                <Image
                    source={require('../assets/loginIcons/Ellipse 5.png')}
                    style={styles.loginIcons}
                />
                <Image
                    source={require('../assets/loginIcons/Ellipse 4.png')}
                    style={styles.loginIcons}
                />
            </View>
            <View style={styles.signUpSection}>
                <Text>
                    Don't have an account? Sign up.
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8BC0C8', // Set background color here
    },
    content: {
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    headerSection: {
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
        marginTop: 100, // Adjust the margin top as needed

    },
    headerText: {
        fontSize: 40,
        fontFamily: 'DM Serif Display', // Set the font family here
    },
    subheaderText: {
        fontSize: 16,
        fontFamily: 'Inter',
    },
    loginSection: {
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
        marginTop: 50, // Adjust the margin top as needed
    },
    loginHeaderText: {
        fontSize: 24,
        fontFamily: 'DM Serif Display', // Set the font family here
    },
    input: {
        textAlign: 'center',
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#FCF8E6',
        borderRadius: 50,
        paddingLeft: 10,
        marginTop: 20,
        marginBottom: 10,
        fontSize: 15,
        fontFamily: 'Inter',
        color: '#000',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    forgotText: {
        fontSize: 12,
        fontFamily: 'Inter',
        color: '#3A3A3A',
        textDecorationLine: 'underline', // Add underline to the text
    },
    orSection: {
        flexDirection: 'row', // Arrange items horizontally
        alignItems: 'center', // Center items vertically
        justifyContent: 'center', // Horizontally center items
        marginTop: 20, // Adjust the margin top as needed
    },
    line: {
        height: 1, // Set height of the line
        backgroundColor: '#000', // Set color of the line
        width: 149
    },
    orText: {
        marginHorizontal: 10, // Add margin to the left and right of the text
        fontSize: 18,
        fontFamily: 'Inter'
    },
    appIconSection: {
        alignItems: 'center', // Center items vertically
        flexDirection: 'row', // Arrange items horizontally
        justifyContent: 'center', // Horizontally center items
    },
    loginIcons: {
        width: 50,
        height: 50, 
        margin: 10
    },
    signUpSection: {
        alignItems: 'center',
        justifyContent: 'center', // Horizontally center items
        fontSize: 12,
        fontFamily: 'Inter',
        color: '#3A3A3A',
        textDecorationLine: 'underline', // Add underline to the text
    }
});
