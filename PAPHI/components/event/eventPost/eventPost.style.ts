import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const vw = width / (100 * 4.3);
const vh = height / (100 * 4.3);

const styles = StyleSheet.create({
    container: {
        margin: 'auto',
        width: '90%',
        backgroundColor: 'white',
        padding: 10 * vw,
        borderRadius: 10 * vw,
    },
    firstRow: {
        flexDirection: 'row',

    },
    title: {
        flex: 1,
        textTransform: 'uppercase',
        fontSize: 22,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
    },
    shadowProp: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.5,
        shadowRadius: 10 * vw,
    },
    bottom: {
        flexDirection: 'row',
    }
});

export default styles;