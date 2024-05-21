import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const vw = width / (100 * 4.3);
const vh = height / (100 * 4.3);

const styles = StyleSheet.create({
    container: {
        width: '90%',
        marginHorizontal: 'auto',
        flexDirection: 'row',
    },
    textContainer: {
        backgroundColor: '#D9D9D9',
        padding: 2 * vw,
        paddingHorizontal: 10 * vw,
        borderRadius: 20 * vw,
        margin: 5 * vw,
    },
    text: {
        textTransform: 'uppercase',
        fontSize: 16,
        fontWeight: 'bold',
    },
    first: {
        marginLeft: 0,
    },
    menu: {
        marginVertical: 'auto', 
        paddingHorizontal: 10 * vw,
    }
});

export default styles;