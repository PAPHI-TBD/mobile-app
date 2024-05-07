import {StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const vw = width / (100 * 4.3);

const styles = StyleSheet.create({
    FlatList: {
        backgroundColor: "white",
    }
});

export default styles;