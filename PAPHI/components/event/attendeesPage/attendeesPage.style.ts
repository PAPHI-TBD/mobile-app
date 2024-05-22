import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const vw = width / (100 * 4.3);
const vh = height / (100 * 4.3);

const styles = StyleSheet.create({
    page: {
        // marginTop: 20 * vh,
        padding: 20 * vw,
    },
    text: {
        textTransform: 'uppercase',
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 'auto',
        paddingHorizontal: 15 * vw,
    },
    attendeeContainer: {
        paddingVertical: 10 * vw,
        flexDirection: 'row',
        // marginVertical: 'auto',
    },
    userIcon: {
        height: 60 * vw,
        width: 60 * vw,
        borderRadius: 30 * vw,
    },
    first: {
        paddingTop: 15 * vh,
    },
});

export default styles;