import { StyleSheet, Dimensions } from 'react-native';

const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;

const { width , height } = Dimensions.get("window");
const vw = width / (100 * 4.3);
const vh = height / (100 * 4.3);

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 20 * vw,
        backgroundColor: 'white',
    },
    title: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 600,
        marginBottom: 30 * vw,
    },
    headerText: {
        fontSize: 22,
        color: '#343434',
        marginBottom: 20 * vw,
        fontWeight: 600,

    },
    row: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    resetText: {
        color: '#314BD8',
        fontSize: 16,
        textAlign: 'center',
    },
    applyText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    resetButton: {
        backgroundColor: 'transparent',
        padding: 10 * vw,
        width: 150 * vw,
        marginRight: 10 * vw,
        borderRadius: 5 * vw,
        borderColor: '#3148D8',
        borderWidth: 1.5,
        textAlign: 'center',
    },
    applyButton: {
        backgroundColor: '#314BD8',
        borderColor: 'transparent',
        borderRadius: 5 * vw,
        borderWidth: 1.5,
        padding: 10 * vw,
        width: 170 * vw,
        color: 'white',
        fontSize: 16,
    }
});

export default styles;