import React from 'react';
import styles from './categories.style';
import { View, Text, FlatList } from 'react-native';

// define props interface
interface CategoriesItem {
    name: string;
    color: string;
}

interface CategoriesProps {
    categoriesList: CategoriesItem[];
}

const Categories: React.FC<CategoriesProps> = ({ categoriesList }) => {

    const renderItem = ({ item }: {item: CategoriesItem}) => {
        return (
            <View style={styles.categoriesContainer}>
                <View style={[styles.color, {backgroundColor: item.color}]}></View>
                <Text style={styles.name}>{item.name}</Text>
            </View>
        );
    }

    return (
        <FlatList
            style={styles.categoriesContainer}
            data={categoriesList}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        />
    );
}

export default Categories;