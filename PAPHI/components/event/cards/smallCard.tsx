import React from 'react'
import styles from './smallCard.style';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../types'; // Adjust the import path as necessary

export default function SmallCard({ title, date, location }: { title: string, date: string, location: string }) {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const eventPage = () => {
        navigation.navigate('EventPage');
    };

    return (
        <TouchableOpacity style={styles.smallCardContainer} onPress={eventPage}>
            {/* heart icon */}
            <View style={styles.smallCardInfo}>
                <View>
                    <Text style={styles.smallCardTitle}>{title}</Text>
                    {/* icon */}
                </View>
                <View>
                    {/* icon */}
                    <Text style={styles.smallCardDate}>{date}</Text>
                </View>
                <View>
                    {/* icon */}
                    <Text style={styles.smallCardLocation}>{location}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}