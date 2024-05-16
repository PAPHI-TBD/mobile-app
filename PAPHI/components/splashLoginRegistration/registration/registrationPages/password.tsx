import React, { useState } from 'react';
import { View, Text, Button, Platform, TouchableOpacity } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { RootStackParamList } from '../../../../types'; // Adjust the import path as necessary
import styles from './password.style';

type PasswordRouteProp = RouteProp<RootStackParamList, 'Password'>;

export default function Password() {
    const route = useRoute<PasswordRouteProp>();
    const { fullName, date } = route.params;

    return (
        <View style={styles.container}>
            <Text>password page</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Create User</Text>
            </TouchableOpacity>
        </View>
    );
}