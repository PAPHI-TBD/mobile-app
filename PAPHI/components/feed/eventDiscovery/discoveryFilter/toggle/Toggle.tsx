import React, { useState } from 'react';
import { View, Text } from 'react-native';
import SwitchToggle from 'react-native-switch-toggle';
import styles from './Toggle.style'; // Ensure this file exists and is correctly defined

interface ToggleProps {
  suggestedOnly: boolean;
  onToggleChange: (value: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({ suggestedOnly, onToggleChange }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
          {suggestedOnly ? 'On' : 'Off'}
      </Text>
      <SwitchToggle
          switchOn={suggestedOnly}
          onPress={() => onToggleChange(!suggestedOnly)}          
          circleColorOn='white'
          circleColorOff='white'
          backgroundColorOn='#314BD8'
          backgroundColorOff='#CACACA'
          containerStyle={styles.switchContainer}
          circleStyle={styles.circle}
      />
    </View>
  );
};

export default Toggle;