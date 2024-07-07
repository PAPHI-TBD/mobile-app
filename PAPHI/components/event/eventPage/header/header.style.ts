import { StyleSheet, Dimensions } from 'react-native';

// iPhone 14 Pro Max
const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;

const { width, height } = Dimensions.get('window');
const vw = width / (100 * 4.3);
const vh = height / (100 * 4.3);

const styles = StyleSheet.create({
    image: {
        backgroundColor: 'grey',
        height: 0.35 * height,
        width: '100%',
        margin: 0,
        paddingTop: '15%',
    },
    icons: {
        flexDirection: 'row',
        marginHorizontal: 20 * vw,
    },
    rightIcons: {
        flexDirection: 'row',
        // left: 'auto',
        marginLeft: 'auto',
    },
    icon: {
        paddingHorizontal: 5 * vw,
    }
});

export default styles;