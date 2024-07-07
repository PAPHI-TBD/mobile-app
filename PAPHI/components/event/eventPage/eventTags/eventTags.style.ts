import { StyleSheet, Dimensions } from 'react-native';

// iPhone 14 Pro Max
const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;

const { width, height } = Dimensions.get('window');
const vw = width / (100 * 4.3);
const vh = height / (100 * 4.3);

const styles = StyleSheet.create({
    tagsContainer: {
        marginVertical: 5 * vw,
    },
    tagContainer: {
        flexDirection: 'row',
    },
    color: {
        height: 15 * vw,
        width: 15 * vw,
        borderRadius: 7.5 * vw,
    },
    text: {
        textTransform: 'uppercase',
        fontSize: 12,
        color: '#3A3939',
        fontWeight: '700',
        marginLeft: 5 * vw,
        marginRight: 10 * vw,
    },
});

export default styles;