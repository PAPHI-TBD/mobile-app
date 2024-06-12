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
        width: 334,
        padding: 10 * vw,
        backgroundColor: '#EBEBEB',
        borderRadius: 10 * vw,
    },
    icon: {
        justifyContent: 'center',
        paddingRight: 10 * vw,
    },
    input: {
        flex: 1,
        fontSize: 17,
        color: '#3C3C43'
    },
});

export default styles;