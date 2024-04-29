import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const vw = width / (100 * 4.3);

const styles = StyleSheet.create({
    postContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    searchBar: {
        marginTop: 33 * vw,
        alignItems: 'center'
    },
    locationContainer: {
        marginTop: 20 * vw,
        marginLeft: 33 * vw,
        flexDirection: 'row',
        alignItems: 'center', // Center items vertically
    },
    textContainer: {
        marginRight: 10 * vw, // Add margin to separate text and image
    },
    mainHeading: {
        fontSize: 32 * vw,
        fontFamily: 'SF Pro',
        fontWeight: 'bold', // Alternatively, you can use fontWeight property
    },
    cityState: {
        marginTop: 5 * vw,
        fontSize: 14 * vw,
        fontFamily: 'SF Pro',
    },
    locationIcon: {
        width: 24 * vw,
        height: 24 * vw,
        alignSelf: 'center'
    }
});

export default styles;
