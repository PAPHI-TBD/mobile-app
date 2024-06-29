import React, { useState } from 'react';
import { View } from 'react-native';
import styles from './Categories.style';
import Category from './category/Category';

interface CategoriesProps {
  selectedCategories: string[];
  onCategorySelect: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({ selectedCategories, onCategorySelect }) => {
  return (
    <View style={styles.container}>
      <Category
        name="Music"
        isSelected={selectedCategories.includes('Music')}
        onSelect={() => onCategorySelect('Music')}
      />
      <Category
        name="Sports"
        isSelected={selectedCategories.includes('Sports')}
        onSelect={() => onCategorySelect('Sports')}
      />
      <Category
        name="Food & Drink"
        isSelected={selectedCategories.includes('Food & Drink')}
        onSelect={() => onCategorySelect('Food & Drink')}
      />
      <Category
        name="Art & Culture"
        isSelected={selectedCategories.includes('Art & Culture')}
        onSelect={() => onCategorySelect('Art & Culture')}
      />
      <Category
        name="Career"
        isSelected={selectedCategories.includes('Career')}
        onSelect={() => onCategorySelect('Career')}
      />
      <Category
        name="Health"
        isSelected={selectedCategories.includes('Health')}
        onSelect={() => onCategorySelect('Health')}
      />
      <Category
        name="Travel & Outdoors"
        isSelected={selectedCategories.includes('Travel & Outdoors')}
        onSelect={() => onCategorySelect('Travel & Outdoors')}
      />
      <Category
        name="Gaming"
        isSelected={selectedCategories.includes('Gaming')}
        onSelect={() => onCategorySelect('Gaming')}
      />
    </View>
  );
};

export default Categories;
