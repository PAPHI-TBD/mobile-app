import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../types'; // Adjust the import path as necessary
import styles from './kitchenCard.style';

interface KitchenCardProps {
    title: string;
    date: string;
    location: string;
}

const KitchenCard = ({ title, date, location }: KitchenCardProps) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const eventPage = () => {
        navigation.navigate('EventPage');
    };

    return (
        <TouchableOpacity style={styles.kitchenCardContainer} onPress={eventPage}>
            <View style={styles.kitchenImage}>
                {/* icon top right */}
                <View>
                    {/* load tags */}
                </View>
            </View>
            <View style={styles.kitchenInfo}>
                <View>
                    <Text style={styles.kitchenTitle}>{title}</Text>
                    {/* icon */}
                </View>
                <View>
                    {/* icon */}
                    <Text style={styles.kitchenDate}>{date}</Text>
                </View>
                <View>
                    {/* icon */}
                    <Text style={styles.kitchenLocation}>{location}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default KitchenCard;
