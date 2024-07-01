import { StyleSheet, Dimensions } from 'react-native';

// iPhone 14 Pro Max
const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;

const { width, height } = Dimensions.get('window');
const vw = width / (100 * 4.3);
const vh = height / (100 * 4.3);

const styles = StyleSheet.create({
    feedPageContainer: {
        flex: 1,
    },
    bellIcon: {
        marginVertical: '-8%',
        marginLeft: 'auto',
        marginRight: 25 * vw,
    },
    notiText: {
        color: '#FF0000',
        fontSize: 14,
        fontWeight: '600',
        marginTop: -15 * vh,
        marginLeft: 'auto',
        marginRight: -7.5 * vw,
    },
    postContainer: {
        flex: 1,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    }
});

export default styles;