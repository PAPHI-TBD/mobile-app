import React from 'react';
import styles from './toggle.style';
import { View, TouchableOpacity, Text, Switch, StyleSheet } from 'react-native';
// import Switch from 'react-native-switch-toggles';

// Define the props interface
interface ToggleProps {
    // add props
}

const Toggle: React.FC = ({}) => {
    const [isToggled, setIsFriends] = React.useState(true);
    const handleToggle = (value: boolean) => {
        setIsFriends(value);
        // Do something when toggle is switched
      };

    return (
        <View style={styles.container}>
            <View style={styles.toggleContainer}>
                <TouchableOpacity onPress={() => handleToggle(false)} style={[styles.toggleButton, !isToggled && styles.selectedToggle]}>
                    <Text style={styles.toggleButtonText}>FRIENDS</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleToggle(true)} style={[styles.toggleButton, isToggled && styles.selectedToggle]}>
                    <Text style={styles.toggleButtonText}>EVENT DISCOVERY</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    );
}

export default Toggle;
