import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const vw = width / (100 * 4.3);
const vh = height / (100 * 4.3);

const styles = StyleSheet.create({
    searchEventContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: 'auto',
        marginVertical: 7 * vh,
        width: '80%',
        padding: 10 * vw,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 10 * vw,
        opacity: 0.5,
    },
    icon: {
        justifyContent: 'center',
        paddingRight: 10 * vw,
    },
    input: {
        flex: 1,
        fontSize: 17,
    },
});

export default styles;