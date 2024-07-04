import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button, TouchableOpacity } from 'react-native';
import styles from './Category.style';

interface CategoryProps {
    name: string;
    isSelected: boolean;
    onSelect: () => void;
  }
  
  const Category: React.FC<CategoryProps> = ({ name, isSelected, onSelect }) => {
    return (
      <TouchableOpacity
        style={[styles.button, isSelected ? styles.selectedButton : null]}
        onPress={onSelect}
      >
        <Text style={[styles.text, isSelected ? styles.selectedText: null]}>{name}</Text>
      </TouchableOpacity>
    );
  };

export default Category;