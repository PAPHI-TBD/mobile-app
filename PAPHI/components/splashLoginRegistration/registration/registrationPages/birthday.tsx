import React, { useState } from 'react';
import { View, Text, Button, Platform, TouchableOpacity } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { RootStackParamList } from '../../../../types'; // Adjust the import path as necessary
import styles from './birthday.style';

type BirthdayRouteProp = RouteProp<RootStackParamList, 'Birthday'>;

export default function Birthday() {
    const route = useRoute<BirthdayRouteProp>();
    const { fullName } = route.params;

    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showDatepicker = () => {
        setShow(true);
    };

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handleNext = () => {
        navigation.navigate('Gender', { fullName, date });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Hello, {fullName}<br/>When is your birthday?</Text>
            <Button onPress={showDatepicker} title="Select Birthday" />
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode="date"
                    display="default"
                    onChange={onChange}
                />
            )}
            <Text style={styles.dateText}>Selected date: {date.toDateString()}</Text>
            <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}