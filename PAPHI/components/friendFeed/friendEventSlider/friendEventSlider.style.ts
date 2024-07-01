import { StyleSheet, Dimensions } from 'react-native';

// iPhone 14 Pro Max
const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;

const { width, height } = Dimensions.get('window');
const vw = width / (100 * 4.3);
const vh = height / (100 * 4.3);

const styles = StyleSheet.create({
    friendEventSliderContainer: {
        marginHorizontal: 25 * vw,
        marginTop: 15 * vh,
        marginBottom: 8 * vh,
    },
    eventImage: {
        // width: '22%',
        // height: 80 * vh,
        // backgroundColor: '#3D3A3A',
        marginRight: 15 * vw,
        marginTop: 5 * vw,
    },
    image: {
        width: 83 * vw,
        height: 80 * vw,
        borderRadius: 10 * vw,
    }
});

export default styles;