import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const vw = width / (100 * 4.3);

const styles = StyleSheet.create({
    descriptionContainer: {
        backgroundColor: 'white',
        height: 100 * vw,
        // padding: 15 * vw,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        // textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {

    },
    interest: {
        paddingTop: 10 * vw,
    },
});

export default styles;