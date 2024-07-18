import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface CategoryButtonsProps {
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const categories = ['All', 'Events', 'Posts'];

const CategoryButtons: React.FC<CategoryButtonsProps> = ({ selectedCategory, onCategorySelect }) => {
  return (
    <View style={styles.container}>
      <Text style = {styles.title}>Categories</Text>
      <View style = {styles.buttonContainer}>
      {categories.map((category) => (
        <TouchableOpacity
          key={category}
          style={[styles.button, selectedCategory === category && styles.selectedButton]}
          onPress={() => onCategorySelect(category)}
        >
          <Text style={[styles.buttonText, selectedCategory === category && styles.selectedButtonText]}>{category}</Text>
        </TouchableOpacity>
      ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
    marginRight: 12, 
  },
  selectedButton: {
      backgroundColor: '#123499',
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
  },
  selectedButtonText: {
    color: '#fff',
  },
});

export default CategoryButtons;
