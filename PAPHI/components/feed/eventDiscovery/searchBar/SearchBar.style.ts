import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const vw = width / (100 * 4.3);

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(118, 118, 128, 0.12)', // 12% opacity of #767680
        padding: 10 * vw,
        borderRadius: 10 * vw,
        marginVertical: 10 * vw,
        // marginVertical: 0,
        width: 358 * vw,
        flexDirection: 'row', // Arrange items horizontally
    },
    searchIcon: {
        width: 25 * vw,
        height: 25 * vw
    },
    input: {
        marginLeft: 10 * vw,
        fontFamily: 'SF Pro',
        fontSize: 17 * vw,
        color: '#3C3C43',
        width: 200 * vw
    },
});

export default styles;