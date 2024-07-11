import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, FlatList } from 'react-native';
import { RouteProp, useRoute, useNavigation, NavigationProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { RootStackParamList } from '../../../../types'; // Adjust the import path as necessary
import styles from './preferences.style';

const allPreferences = [
    'Music', 'Concerts', 'Fashion', 'Technology', 'Real Estate', 
    'Movies', 'Holidays', 'Cars', 'Baking', 'Graphic Design',
    'TV Shows', 'Architecture', 'Cooking', 'Drama', 'Theater', 'Photography'
];

type PreferencesRouteProp = RouteProp<RootStackParamList, 'Preferences'>;

export default function Preferences() {
    const route = useRoute<PreferencesRouteProp>();
    const { fullName, date, gender, username, email } = route.params;

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const [selectedPreferences, setSelectedPreferences] = useState<string[]>([]);

    const handleNext = () => {
        navigation.navigate('Password', { fullName, date, gender, username, email, preferences: selectedPreferences });
    };

    const handleBack = () => {
        navigation.navigate('Email', { fullName, date, gender, username, email });
    };

    const handlePreferencesPress = (preference: string) => {
        if (selectedPreferences.includes(preference)) {
            setSelectedPreferences(selectedPreferences.filter(p => p != preference));
        } else {
            setSelectedPreferences([...selectedPreferences, preference]);
        }
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
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    My Preferences
                </Text>
                <Text style={styles.subheaderText}>
                    Please select your top 5 interests/hobbies
                </Text>
            </View>
            <TextInput
                style={[styles.searchInput]}
                placeholder="Search groups and interests"
                placeholderTextColor="#ccc"
            />
            <FlatList
                data={allPreferences}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[styles.preferenceTag, selectedPreferences.includes(item) ? styles.preferenceTagSelected : null]}
                        onPress={() => handlePreferencesPress(item)}
                    >
                        <Text 
                            style={[styles.preferenceTagText, selectedPreferences.includes(item) ? styles.preferenceTagTextSelected : styles.preferenceTagText]}
                        >
                            {item}
                        </Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item}
                contentContainerStyle={styles.preferencesContainer}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleNext}
                    style={styles.skipButton}
                >
                    <Text style={styles.skipButtonText}>
                        Skip
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.button, selectedPreferences.length >= 5 ? styles.buttonEnabled : styles.buttonDisabled]} 
                    onPress={handleNext}
                    disabled={selectedPreferences.length < 5}
                >
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}