import React, { useState } from 'react';
import { View, Text, Button, Platform, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { RootStackParamList } from '../../../../types'; // Adjust the import path as necessary
import styles from './username.style';

type UsernameRouteProp = RouteProp<RootStackParamList, 'Username'>;

export default function Username() {
    const route = useRoute<UsernameRouteProp>();
    const { fullName,date, gender } = route.params;

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const [username, setUsername] = useState('');

    const handleNext = () => {
        navigation.navigate('Email', { fullName, date, gender, username });
    };

    const handleBack = () => {
        navigation.navigate('Gender', { fullName, date, gender });
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} 
        >
            <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                <Icon name="arrowleft" size={30} color="rgb(236, 129, 58)" />
            </TouchableOpacity>
            <View style={styles.labelContainer}>
                <Text style={styles.label}>Create a username</Text>
                {/* <Text style={styles.label}>username</Text> */}
                <Text style={styles.labelSubText}>
                    Create a memorable username for your account. This can be changed.
                </Text>
            </View>
            <View style={styles.inputWrapper}>
                <TextInput
                    style={[styles.input, username ? styles.inputActive : styles.inputInactive]}
                    value={username}
                    onChangeText={setUsername}
                    placeholder="Username"
                    placeholderTextColor="#ccc"
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={[styles.button, username ? styles.buttonEnabled : styles.buttonDisabled]} 
                    onPress={handleNext}
                    disabled={!username}
                >
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}