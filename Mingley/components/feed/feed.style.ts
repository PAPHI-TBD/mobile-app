import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    searchBar: {
        marginTop: 33,
        alignItems: 'center'
    },
    locationContainer: {
        marginTop: 20,
        marginLeft: 33,
        flexDirection: 'row',
        alignItems: 'center', // Center items vertically
    },
    textContainer: {
        marginRight: 10, // Add margin to separate text and image
    },
    mainHeading: {
        fontSize: 32,
        fontFamily: 'SF Pro',
        fontWeight: 'bold', // Alternatively, you can use fontWeight property
    },
    cityState: {
        marginTop: 5,
        fontSize: 14,
        fontFamily: 'SF Pro',
    },
    locationIcon: {
        width: 24,
        height: 24,
        alignSelf: 'center'
    }
});

export default styles;
