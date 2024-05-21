import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const vw = width / (100 * 4.3);
const vh = height / (100 * 4.3);

const styles = StyleSheet.create({
    infoContainer: {
        flexDirection: 'row',
    },
    date: {
        flexDirection: 'row',
        marginRight: 20 * vw,
    },
    dateText: {
        fontSize: 18,
        textTransform: 'uppercase',
        marginLeft: 5 * vw,
    },
    location: {
        flexDirection: 'row',
        marginLeft: 20 * vw,
        marginVertical: 'auto',
    },
    locationText: {
        fontSize: 12,
        marginLeft: 5 * vw,
    }
});

export default styles;