import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const vw = width / (100 * 4.3);
const vh = height / (100 * 4.3);

const styles = StyleSheet.create({
    container: {
        marginVertical: 10 * vh,
        borderRadius: 10 * vw,
    },
    image: {
        width: '100%',
        height: 120 * vh,
        resizeMode: 'cover',
        borderRadius: 10 * vw,
        borderColor: 'white',
        borderWidth: 1 * vw,
    },
    shadowProp: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.5,
        shadowRadius: 10 * vw,
    },
});

export default styles;