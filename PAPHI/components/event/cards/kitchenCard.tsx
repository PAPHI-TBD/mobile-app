import React from 'react'
import styles from './kitchenCard.style';
import { View, Text } from 'react-native';

function KitchenCard({ title, date, location }: { title: string, date: string, location: string }) {
    return (
        <View style={styles.kitchenCardContainer}>
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
        </View>
    )
}

export default KitchenCard