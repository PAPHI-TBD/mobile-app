import React, { useState } from 'react';
import { View, Text, Button, Platform, TouchableOpacity, Alert } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { RootStackParamList } from '../../../../types'; // Adjust the import path as necessary
import styles from './gender.style';

type GenderRouteProp = RouteProp<RootStackParamList, 'Gender'>;

export default function Gender() {
    const route = useRoute<GenderRouteProp>();
    const { fullName, date } = route.params;

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const [gender, setGender] = useState('');

    const handleNext = () => {
        if (gender) {
            navigation.navigate('Username', { fullName, date, gender });
        } else {
            Alert.alert('Please select a gender.');
        }
    };

    const handleBack = () => {
        navigation.navigate('Birthday', { fullName, date, });
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                <Icon name="arrowleft" size={35} color="white" />
            </TouchableOpacity>
            <View style={styles.labelContainer}>
                <Text style={styles.label}>Select your</Text>
                <Text style={styles.label}>gender:</Text>
            </View>
            <View style={styles.inputWrapper}>
                <TouchableOpacity
                    style={[styles.radioButton, gender === 'Male' ? styles.radioButtonSelected : null]}
                    onPress={() => setGender('Male')}>
                    <Text style={[styles.radioButtonText, gender === 'Male' ? styles.radioButtonTextSelected : null]}>Male</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.radioButton, gender === 'Female' ? styles.radioButtonSelectedFemale : null]}
                    onPress={() => setGender('Female')}>
                    <Text style={[styles.radioButtonText, gender === 'Female' ? styles.radioButtonTextSelected : null]}>Female</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={[styles.button, gender ? styles.buttonEnabled : styles.buttonDisabled]} 
                    onPress={handleNext}
                    disabled={!gender}
                >
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}