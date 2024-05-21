import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const vw = width / (100 * 4.3);
const vh = height / (100 * 4.3);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
    },
    number: {
        fontSize: 12,
        marginVertical: 'auto',
        marginRight: 10 * vw,
    },
    userIcon: {
        height: 25 * vw,
        width: 25 * vw,
        borderRadius: 15 * vw,
        marginLeft: -5 * vw,
    },
    first: {
        marginLeft: 0,
    },
});

export default styles;