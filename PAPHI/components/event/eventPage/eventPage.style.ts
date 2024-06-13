import { StyleSheet, Dimensions } from 'react-native';

// iPhone 14 Pro Max
const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;

const { width, height } = Dimensions.get('window');
const vw = width / (100 * 4.3);
const vh = height / (100 * 4.3);

const styles = StyleSheet.create({
    eventPageContainer: {
        height: 'auto',
    },
    eventInfoContainer: {
        margin: 20 * vw,
        // marginRight: 0,
    },
    iconTextContainer: {
        flexDirection: 'row',
        marginVertical: 5 * vw,
    },
    boldText: {
        color: '#181818',
        fontWeight: '600',
        fontSize: 14,
        marginLeft: 5 * vw,
    }
});

export default styles;