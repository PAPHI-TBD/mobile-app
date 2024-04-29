import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const vw = width / (100 * 4.3);

const styles = StyleSheet.create({
    container: {
        width: 85 * vw,
        height: 85 * vw,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8 * vw,
        marginRight: 53 * vw,
    },
    title: {
        fontSize: 9 * vw,
        fontWeight: 'bold',
    }
});

export default styles;
