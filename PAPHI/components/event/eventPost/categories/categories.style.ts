import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const vw = width / (100 * 4.3);
const vh = height / (100 * 4.3);

const styles = StyleSheet.create({
    categoriesContainer: {
        flexDirection: 'row',
        marginVertical: 5 * vw,
    },
    color: {
        height: 5 * vh,
        width: 5 * vh,
        borderRadius: 2.5 * vh,
    },
    name: {
        fontSize: 10,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginHorizontal: 5 * vw,
        marginRight: 10 * vw,
    }
});

export default styles;