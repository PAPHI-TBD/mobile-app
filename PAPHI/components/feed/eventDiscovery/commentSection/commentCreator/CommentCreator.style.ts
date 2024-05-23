import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const vw = width / (100 * 4.3);
const vh = height / (100 * 4.3);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 5 * vh,
    },
    userIcon: {
        height: 30 * vw,
        width: 30 * vw,
        borderRadius: 15 * vw,
    },
    name: {
        textTransform: 'uppercase',
        marginVertical: 'auto',
        marginHorizontal: 10 * vw,
        fontSize: 16,
    },
});

export default styles;