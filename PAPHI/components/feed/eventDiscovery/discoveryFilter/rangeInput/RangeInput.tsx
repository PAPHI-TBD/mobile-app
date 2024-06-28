import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './RangeInput.style';

interface RangeInputProps {
  onUpdateRange: (range: [number, number]) => void;
}

const RangeInput: React.FC<RangeInputProps> = ({ onUpdateRange }) => {
  const [minValue, setMinValue] = useState<number | undefined>(undefined);
  const [maxValue, setMaxValue] = useState<number | undefined>(undefined);

  const handleMinValueChange = (text: string) => {
    const value = parseFloat(text.replace('$', ''));
    if (!isNaN(value)) {
      setMinValue(value)
      if (maxValue !== undefined && value > maxValue) {
        onUpdateRange([value, 300]);
      } else {
        onUpdateRange([value, maxValue !== undefined ? maxValue : 300]);
      }
    } else {
      setMinValue(undefined);
    }
  };

  const handleMaxValueChange = (text: string) => {
    const value = parseFloat(text.replace('$', ''));
    if (!isNaN(value)) {
      setMaxValue(value);
      if (minValue !== undefined && minValue > value) {
        onUpdateRange([minValue, 300]);
      } else {
        onUpdateRange([minValue !== undefined ? minValue : 0, value]);
      }
    } else {
      setMaxValue(undefined);
      onUpdateRange([minValue !== undefined ? minValue : 0, 300]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>From</Text>
      <TextInput
        style={styles.input}
        value={minValue !== undefined ? `$${minValue}` : ''}
        onChangeText={handleMinValueChange}
        keyboardType="numeric"
        placeholder="$0"
      />
      <Text style={styles.text}>to</Text>
      <TextInput
        style={styles.input}
        value={maxValue !== undefined ? `$${maxValue}` : ''}
        onChangeText={handleMaxValueChange}
        keyboardType="numeric"
        placeholder="$300"
      />
    </View>
  );
};

export default RangeInput;
