import React, { useState } from 'react';
import { View, Text, Button, Platform, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { RootStackParamList } from '../../../../types'; // Adjust the import path as necessary

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

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Hello, {fullName}! When is your birthday?</Text>
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    label: {
        fontSize: 18,
        marginBottom: 16,
    },
    dateText: {
        fontSize: 16,
        marginTop: 16,
    },
});
