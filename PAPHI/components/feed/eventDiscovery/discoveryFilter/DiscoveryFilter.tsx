import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button, TouchableOpacity, Pressable } from 'react-native';
import styles from './DiscoveryFilter.style';
import Categories from './categories/Categories';
import DropdownMenu from './dropdownMenu/DropdownMenu';
import Toggle from './toggle/Toggle';
import RangeSliderComponent from './rangeSlider/RangeSlider';
import SliderComponent from './slider/Slider';
import RangeInput from './rangeInput/RangeInput';
import Header from './header/Header';

const DiscoveryFilter: React.FC = ({}) => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [distance, setDistance] = useState<number>(0);
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 300]);
    const [rangeInput, setRangeInput] = useState<[number, number]>([0, 0]);
    const [suggestedOnly, setSuggestedOnly] = useState(false);

    const fetchEvents = () => {};

    const handleCategorySelect = (category: string) => {
        if (selectedCategories.includes(category)) {
          setSelectedCategories(selectedCategories.filter(item => item !== category));
        } else {
          setSelectedCategories([...selectedCategories, category]);
        }
      };

    const handleResetFilters = () => {
        setSelectedCategories([]);
        setSelectedDate('Select Date');
        setDistance(0);
        setPriceRange([0, 300]);
        setSuggestedOnly(false);
        fetchEvents();
    };

    return (
        <ScrollView style={styles.container}>
            <Header></Header>
            <Text style={styles.headerText}>By Category</Text>
            <Categories 
                selectedCategories={selectedCategories} 
                onCategorySelect={handleCategorySelect} 
            />
            <Text style={styles.headerText}>By Date</Text>
            <DropdownMenu
                selectedDate={selectedDate}
                onDateChange={setSelectedDate}
            />        
            <Text style={styles.headerText}>By Distance</Text>
            <SliderComponent/>
            <Text style={styles.headerText}>By Price</Text>
            <RangeSliderComponent
                priceRange={priceRange}
                onPriceRangeChange={priceRange => setPriceRange(priceRange)}
            />        
            <Text style={styles.headerText}>Suggested Events</Text>
            <Toggle
                suggestedOnly={suggestedOnly}
                onToggleChange={setSuggestedOnly}
            />
            <View style={styles.row}>
                <Pressable style={styles.resetButton} onPress={handleResetFilters}>
                    <Text style={styles.resetText}>Reset</Text>
                </Pressable>
                <Pressable style={styles.applyButton} onPress={fetchEvents}>
                    <Text style={styles.applyText}>Apply Filters</Text>
                </Pressable>
            </View>
        </ScrollView>
        
    );
};

export default DiscoveryFilter;