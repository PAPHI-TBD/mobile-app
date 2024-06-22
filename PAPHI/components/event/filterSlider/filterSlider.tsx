import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import styled from 'styled-components/native';
import styles from './filterSlider.style';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import RangeSlider from 'react-native-range-slider-expo';



// const Container = styled.View`
//   padding: 20px;
// `;

// const Section = styled.View`
//   margin-bottom: 20px;
// `;

// const SectionTitle = styled.Text`
//   font-size: 16px;
//   margin-bottom: 10px;
// `;

// const SliderValue = styled.Text`
//   text-align: center;
//   margin-top: 10px;
// `;

// const SliderContainer = styled.View`
//   margin-bottom: 20px;
// `;

const FilterSlider = () => {
  const [distance, setDistance] = useState(0);
  const [priceRange, setPriceRange] = useState([0, 300]);

  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(0);

  return (
    <View>
      <View style={styles.sliderContainer}>
        <View>
            <Text style={styles.title}>By distance</Text>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.value}>0 mi</Text>
                {/* <Slider
                    style={styles.slider}
                    value={distance}
                    onValueChange={value => setDistance(value)}
                    minimumValue={0}
                    maximumValue={100}
                    step={5}
                    minimumTrackTintColor="#314BD8"
                    maximumTrackTintColor="#D9D9D9"
                    thumbTintColor="white"
                /> */}
                <View style={styles.sliderWrapper}>
              <Slider
                style={styles.slider}
                value={distance}
                onValueChange={value => setDistance(value)}
                minimumValue={0}
                maximumValue={100}
                step={5}
                minimumTrackTintColor="#314BD8"
                maximumTrackTintColor="#D9D9D9"
                thumbTintColor="white"
              />
              <Text style={[styles.distanceLabel, { left: `${distance - ((distance/100) * 10)}%` }]}>{distance} mi</Text>
            </View>
               <Text style={styles.value}>100 mi</Text>
            </View>
            
            <Text style={[styles.value, { margin: 'auto' }]}>{distance} mi</Text>
        </View>
      </View>
      <View>
        <View>
          <Text style={styles.title}>By price</Text>
          {/* <RangeSlider
          min={0}
          max={300}
          fromValueOnChange={value => setPriceRange(prev => ({ ...prev, low: value }))}
          toValueOnChange={value => setPriceRange(prev => ({ ...prev, high: value }))}
          initialFromValue={0}
          initialToValue={300}
          step={5}
          fromKnobColor="white"
          toKnobColor="white"
          inRangeBarColor="#314BD8"
          outOfRangeBarColor="#D9D9D9"
        //   style={{ width: '100%', }}
          /> */}

            {/* <RangeSlider min={5} max={25}
                fromValueOnChange={value => setFromValue(value)}
                toValueOnChange={value => setToValue(value)}
                initialFromValue={11}
            /> */}
          {/* <Slider
            // style={styles.slider}
            value={priceRange[0]}
            onValueChange={value => setPriceRange([value, priceRange[1]])}
            minimumValue={0}
            maximumValue={300}
            step={5}
            minimumTrackTintColor="#314BD8"
            maximumTrackTintColor="#D9D9D9"
            thumbTintColor="white"
          /> */}
          {/* <MultiSlider
            values={[priceRange[0], priceRange[1]]}
            sliderLength={280}
            onValuesChange={(values) => setPriceRange(values)}
            min={0}
            max={300}
            step={1}
            selectedStyle={{ backgroundColor: '#4F6D7A' }}
            unselectedStyle={{ backgroundColor: '#E4E7EB' }}
            markerStyle={{
              height: 20,
              width: 20,
              backgroundColor: '#4F6D7A',
            }}
          />
          <Text style={styles.value}>From ${priceRange[0]}</Text> */}
          {/* <Slider
            value={priceRange[1]}
            onValueChange={value => setPriceRange([priceRange[0], value])}
            minimumValue={0}
            maximumValue={300}
            step={1}
            minimumTrackTintColor="#4F6D7A"
            maximumTrackTintColor="#E4E7EB"
          /> */}
          <Text style={styles.value}>To ${priceRange[1]}</Text>
        </View>
      </View>
    </View>
  );
};

export default FilterSlider;
