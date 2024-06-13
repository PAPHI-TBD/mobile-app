import React from 'react'
import styles from './largeCard.style';
import { View, Text } from 'react-native';

export default function LargeCard({ title, date, location }: { title: string, date: string, location: string }) {
    return (
        <View style={styles.largeCardContainer}>
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
        </View>
    )
}