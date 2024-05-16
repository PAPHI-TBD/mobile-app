import React, { useState } from 'react';
import { View, Text, Button, Platform, TouchableOpacity, Alert } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
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
            navigation.navigate('Password', { fullName, date, gender });
        } else {
            Alert.alert('Please select a gender.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Select your gender:</Text>
            <TouchableOpacity
                style={[styles.radioButton, gender === 'Male' ? styles.radioButtonSelected : null]}
                onPress={() => setGender('Male')}>
                <Text style={styles.radioButtonText}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.radioButton, gender === 'Female' ? styles.radioButtonSelected : null]}
                onPress={() => setGender('Female')}>
                <Text style={styles.radioButtonText}>Female</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}