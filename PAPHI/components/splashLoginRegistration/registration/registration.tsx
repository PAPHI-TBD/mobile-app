import React, { useState } from 'react';
import styles from './registration.style';
import { Platform, View, StyleSheet, Text, TextInput, Image, Pressable, TouchableOpacity, Button } from 'react-native';
import DateTimePicker from "@react-native-community/datetimepicker";

export default function registrationPage() {
    const [date, setDate] = useState(new Date());
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [isDatePickVisible, setDatePickVisible] = useState(false);
    const [isDateSelected, setIsDateSelected] = useState(false);

    const toggleDatePicker = () => {
        setDatePickVisible(!isDatePickVisible);
    };
    
    const onPickerChange = ({ type }, selectedDate) => {
        if (type === "set") {
            const currDate = selectedDate;
            setDate(currDate);

        } else {
            toggleDatePicker();
        }
    };

    const handleConfirmDate = () => {
        setDateOfBirth(date.toDateString());
        setIsDateSelected(true);
        toggleDatePicker();
    }

    const handleCancel = () => {
        setDateOfBirth("");
        setIsDateSelected(false);
        toggleDatePicker();
    }

    return (
        <View style={[styles.container, styles.content]}>
            <View style={styles.headerSection}>
                <Text style={styles.headerText}>(Insert App Name)</Text>
                <Text style={styles.subheaderText}>Bringing real world connections back</Text>
            </View>
            <View style={styles.loginSection}>
                <Text style={styles.loginHeaderText}>Sign Up</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="#A9A9A9"
                    keyboardType="default"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#A9A9A9"
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="Password"
                    placeholderTextColor="#A9A9A9"
                    keyboardType="default"
                />
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="Confirm Password"
                    placeholderTextColor="#A9A9A9"
                    keyboardType="default"
                />
                {isDatePickVisible ? (
                    <DateTimePicker
                        mode="date"
                        value={date}
                        display="spinner"
                        is24Hour={true}
                        onChange={onPickerChange}
                        style={styles.datePicker}
                    />
                ) : null}
                {!isDatePickVisible ? (
                    <TextInput 
                        style={[
                            styles.input, 
                            { color: isDateSelected ? 'black' : '#A9A9A9' }
                        ]}
                        placeholder="Birthday"
                        placeholderTextColor="#A9A9A9"
                        value={dateOfBirth}
                        onChangeText={setDateOfBirth}
                        editable={false}
                        onPressIn={toggleDatePicker}
                    />
                ) : null}
                {isDatePickVisible ? (
                    <View
                        style={{ flexDirection: "row" ,
                                 justifyContent: "space-around" }}
                    >
                        <TouchableOpacity 
                            style={styles.dateCancelButton}
                            onPress={handleCancel}
                        >
                            <Text style={{ color: 'white' }}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.dateConfirmButton}
                            onPress={handleConfirmDate}
                        >
                            <Text style={{ color: 'white' }}>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                ): null}
                <TouchableOpacity style={styles.signupButton}>
                    <Text style={styles.signupButtonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.orSection}>
                <View style={styles.line} />
                <Text style={styles.orText}>or</Text>
                <View style={styles.line} />
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