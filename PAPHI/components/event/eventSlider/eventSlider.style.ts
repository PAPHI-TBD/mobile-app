import { StyleSheet, Dimensions } from 'react-native';

// iPhone 14 Pro Max
const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;

const { width, height } = Dimensions.get('window');
const vw = width / (100 * 4.3);
const vh = height / (100 * 4.3);

const styles = StyleSheet.create({
    feedContainer: {
        marginLeft: 25 * vw,
        marginTop: 10 * vh,
    },
    titleText: {
        fontSize: 22,
        fontWeight: 600
    },
});

export default styles;