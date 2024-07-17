import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface CategoryButtonProps {
    category: string;
    onPress: () => void;
    isSelected: boolean;
  }
  
  const CategoryButton: React.FC<CategoryButtonProps> = ({ category, onPress, isSelected }) => {
    return (
      <TouchableOpacity
        style={[styles.button, isSelected ? styles.selectedButton : null]}
        onPress={onPress}
      >
        <Text style={[styles.buttonText, isSelected ? styles.selectedButtonText : null]}>
          {category}
        </Text>
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    button: {
      paddingVertical: 8,
      paddingHorizontal: 15,
      marginRight: 10,
      backgroundColor: '#f0f0f0',
      borderRadius: 20,
    },
    selectedButton: {
      backgroundColor: '#123499',
    },
    buttonText: {
      color: '#000',
      fontSize: 16,
    },
    selectedButtonText: {
      color: '#fff',
    },
  });
  
  export default CategoryButton;