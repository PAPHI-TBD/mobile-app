import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { RangeSlider } from '@react-native-assets/slider';
import styles from './RangeSlider.style';
import RangeInput from '../rangeInput/RangeInput';

interface RangeSliderComponentProps {
  priceRange: [number, number];
  onPriceRangeChange: (newPriceRange: [number, number]) => void;
}

const RangeSliderComponent: React.FC<RangeSliderComponentProps> = ({ priceRange, onPriceRangeChange }) => {
  return (
    <View style={styles.container}>
      <View style={styles.sliderRow}>
        <Text style={styles.leftLabel}>$0</Text>
        <RangeSlider
          style={styles.slider}
          range={priceRange}
          minimumValue={0}
          maximumValue={300}
          step={1}
          minimumRange={0}
          crossingAllowed={false}
          thumbTintColor='white'
          trackStyle={styles.track}
          thumbStyle={styles.thumb}
          midTrackStyle={styles.midTrack}
          enabled={true}
          trackHeight={4}
          thumbSize={20}
          slideOnTap={true}
          onValueChange={onPriceRangeChange}
        />
        <Text style={styles.rightLabel}>$300</Text>
      </View>
      <RangeInput 
        onUpdateRange={onPriceRangeChange}>
      </RangeInput>
      </View>
  );
};

export default RangeSliderComponent;