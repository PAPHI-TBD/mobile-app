import { StyleSheet, Dimensions } from 'react-native';

// iPhone 14 Pro Max
const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;

const { width, height } = Dimensions.get('window');
const vw = width / (100 * 4.3);
const vh = height / (100 * 4.3);

const styles = StyleSheet.create({
    tagsContainer: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        paddingHorizontal: 10 * vw,
    },
    tagContainer: {
        paddingHorizontal: 10 * vw,
        height: 30 * vw,
        justifyContent: 'center',
        backgroundColor: '#FC7A1E',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 50,
        marginRight: 10 * vw,
        marginBottom: 5 * vw,
    },
    text: {
        fontSize: 12,
        color: 'white',
        fontWeight: 600,
    },
});

export default styles;