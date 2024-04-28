import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const vw = width / 100;

const styles = StyleSheet.create({
    container: {
        width: 83.49 * vw, // Responsive width
        height: 69.53 * vw, // Responsive height
        backgroundColor: '#f0f0f0',
        borderRadius: 1.86 * vw, // Responsive border radius
        marginBottom: 5.81 * vw, // Responsive margin
        marginLeft: 'auto', // Horizontally center the box
        marginRight: 9.30 * vw, // Horizontally center the box
    },
    descriptionText: {
        fontSize: 3.72 * vw, // Responsive font size
        fontFamily: 'Actor',
        position: 'absolute',
        bottom: 4.65 * vw, // Responsive position
        left: 4.65 * vw, // Responsive position
    },
    usernameText: {
        fontSize: 6.51 * vw, // Responsive font size
        fontFamily: 'Actor',
        marginTop: 4.65 * vw, // Responsive margin
        marginLeft: 4.65 * vw, // Responsive margin
    }
});

export default styles;