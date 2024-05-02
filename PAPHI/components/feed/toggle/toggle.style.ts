import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const vw = width / (100 * 4.3);

const styles = StyleSheet.create({
    container: {
        padding: 10 * vw,
        borderRadius: 10 * vw,
        marginVertical: 10 * vw,
        width: width * 0.9,
        flexDirection: 'row',
        margin: 'auto', // centered
    },
    toggleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 'auto', // centered
    },
    toggleButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10 * vw,
        borderWidth: 1,
        padding: 15 * vw,
        paddingTop: 10 * vw,
        paddingBottom: 10 * vw,
        borderRadius: 10 * vw,
    },
    selectedToggle: {
        backgroundColor: 'rgba(118, 118, 128, 0.12)', // 12% opacity of #767680
    },
    toggleButtonText: {
        color: 'black', // Adjust color as needed
        fontSize: 16 * vw,
    },
});

export default styles;