import { StyleSheet, Dimensions } from 'react-native';

// iPhone 14 Pro Max
const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;

const { width, height } = Dimensions.get('window');
const vw = width / (100 * 4.3);
const vh = height / (100 * 4.3);

const styles = StyleSheet.create({
    sliderContainer: {
        
    },
    slider: {
    //     // width: 'auto',
        flex: 1,
        marginHorizontal: 10 * vw,
    },
    sliderWrapper: {
        flex: 1,
        marginHorizontal: 10 * vw,
        // position: 'relative',
    },
    title: {
        fontSize: 22,
        fontWeight: '800',
        color: '#343434',
        marginVertical: 5 * vh,
        marginBottom: 15 * vh,
    },
    value: {
        fontSize: 14,
        fontWeight: '400',
        color: '#343434',
    },
    distanceLabel: {
        position: 'absolute',
        width: '100%',
        top: -25, // Adjust as needed
        transform: [{ translateX: -10 * vw }], // Center the text
        // backgroundColor: 'white',
        padding: 5,
        borderRadius: 5,
        // elevation: 3, // For Android shadow
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 1 },
        // shadowOpacity: 0.3,
        // shadowRadius: 1.41,
        zIndex: 1,
    },
});

export default styles;