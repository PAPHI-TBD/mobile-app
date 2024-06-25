import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Slider } from '@react-native-assets/slider';
import styles from './Slider.style';

interface SliderComponentProps {
    distance: number;
    onDistanceChange: (newDistance: number) => void;
}

const SliderComponent: React.FC<SliderComponentProps> = ({ distance, onDistanceChange }) => {
    return (
        <View style={styles.container}>
            <View style={styles.sliderRow}>
                <Text style={styles.leftLabel}>0 mi</Text>
                <Slider
                    style={styles.slider}
                    value={distance} // double check this
                    minimumValue={0}
                    maximumValue={100}
                    step={1}
                    thumbTintColor='white'
                    minTrackStyle={styles.minTrack}
                    trackHeight={4}
                    thumbSize={20}
                    trackStyle={styles.track}
                    thumbStyle={styles.thumb}
                    slideOnTap={true}
                    onValueChange={onDistanceChange}
                />
                 {distance !== 0 && distance !== 100 && (
                    <Text style={[styles.distanceLabel, { left: `${distance - ((distance/100) * 10)}%` }]}>{distance} mi</Text>
                 )}
                <Text style={styles.rightLabel}>100 mi</Text>
            </View>
        </View>
    );
};

export default SliderComponent;
