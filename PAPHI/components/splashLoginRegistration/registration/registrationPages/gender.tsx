import React, { useState } from 'react';
import { View, Text, Button, Platform, TouchableOpacity } from 'react-native';
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

    const handleNext = () => {
        navigation.navigate('Password', { fullName, date });
    };

    return (
        <View style={styles.container}>
            <Text>gender page</Text>
            <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}