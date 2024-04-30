import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    cardContainer: {
        width: 354,
        height: 85,
        backgroundColor: '#D9D9D9',
        marginBottom: 30,
        flexDirection: 'row',
        alignItems: 'center',
    },
    friendProfilePicture: {
        marginLeft: 20
    },
    whiteCircle: {
        width: 70,
        height: 70,
        borderRadius: 35, // To make it a circle
        backgroundColor: 'white',
    },
    infoContainer: {
        marginLeft: 20,
    },
    userInfoContainer: {
        flexDirection: 'row',
    },
    usernameText: {
        fontSize: 18,
        fontFamily: 'Inter',
        fontWeight: 'bold'
    },
    userOccupationText: {
        fontSize: 18,
        fontFamily: 'Inter',
        marginLeft: 5
    },
    statusInfo: {

    },
    textDescription: {
        fontSize: 18,
        fontFamily: 'Inter',
    },
    iconContainer: {

    },
    icon: {
        width: 23,
        height: 23
    }
});

export default styles;