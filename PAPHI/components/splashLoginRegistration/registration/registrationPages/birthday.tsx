import React, { useState } from 'react';
import { View, Text, Platform, TouchableOpacity, Alert, TextInput, Pressable, KeyboardAvoidingView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/AntDesign';
import { RootStackParamList } from '../../../../types'; // Adjust the import path as necessary
import styles from './birthday.style';

type BirthdayRouteProp = RouteProp<RootStackParamList, 'Birthday'>;

export default function Birthday() {
    const route = useRoute<BirthdayRouteProp>();
    const { fullName } = route.params;

    const [date, setDate] = useState(new Date());
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [show, setShow] = useState(false);

    const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const confirmDatePicker = () => {
        setDateOfBirth(date.toLocaleDateString());
        setShow(false);
    }

    const toggleDatePicker = () => {
        setShow(!show);
    };

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handleNext = () => {
        if (date) {
            navigation.navigate('Gender', { fullName, date });

        } else {
            Alert.alert('Please select your birthday');
        }
    };

    const handleBack = () => {
        navigation.navigate('RegistrationPage', { fullName });
    };

    return (
        <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} 
        >
            <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                <Icon name="arrowleft" size={35} color="rgb(236, 129, 58)" />
            </TouchableOpacity>
            <View style={styles.labelContainer}>
                <Text style={styles.label}>Hello, {fullName}</Text>
                <Text style={styles.label}>When is your birthday?</Text>
            </View>
            <View style={styles.inputWrapper}>
                <Pressable onPress={toggleDatePicker} style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="MM/DD/YYYY"
                        placeholderTextColor="rgb(255, 183, 110)"
                        value={dateOfBirth}
                        onChangeText={setDateOfBirth}
                        editable={false}
                        onPressIn={toggleDatePicker}
                        textAlign="center"
                    />
                </Pressable>
                <Text style={styles.subLabel}>Your age will be public</Text>
                {show && (
                    <View>
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode="date"
                            display="spinner"
                            onChange={onChange}
                        />
                        <View style={styles.datePickerButtons}>
                            <TouchableOpacity onPress={toggleDatePicker} style={styles.cancelBirthdayButton}>
                                <Text style={styles.cancelBirthdayButtonText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={confirmDatePicker} style={styles.confirmBirthdayButton}>
                                <Text style={styles.confirmBirthdayButtonText}>Confirm</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={[styles.button, dateOfBirth ? styles.buttonEnabled : styles.buttonDisabled]} 
                    onPress={handleNext}
                    disabled={!dateOfBirth}
                >
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}