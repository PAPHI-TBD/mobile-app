import { StyleSheet, Dimensions } from 'react-native';

// iPhone 14 Pro Max
const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;

const { width, height } = Dimensions.get('window');
const vw = width / (100 * 4.3);
const vh = height / (100 * 4.3);

const styles = StyleSheet.create({
    attendeesPageContainer: {
        paddingTop: '15%',
        paddingHorizontal: 25 * vw,
        margin: 0,
        height: '100%',
    },
    icon: {
        // paddingHorizontal: 5 * vw,
    },
    buttonGroupContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5 * vh,
        marginBottom: 10 * vh,
        // marginHorizontal: 'auto',
    },
    button: {
        // margin: 'auto',
        paddingHorizontal: 20 * vw,
        paddingVertical: 7 * vw,
        borderColor: '#314BD8',
        borderWidth: 1,
        borderRadius: 15 * vw,
    },
    buttonText: {
        color: '#314BD8',
        fontSize: 14,
        fontWeight: '500',
    },
    selectedButton: {
        backgroundColor: '#314BD8',
    },
    selectedButtonText: {
        color: 'white',
    },
    attendeeCard: {
        backgroundColor: 'white',
        padding: 20,
        paddingVertical: 15,
        width: '100%',
        flexDirection: 'row',
        marginBottom: 15 * vw,
        borderRadius: 5,
    },
    userImage: {
        height: 38 * vw,
        width: 38 * vw,
        borderRadius: 19 * vw,
        backgroundColor: '#666161',
    },
    tag: {
        height: 10,
        width: 10,
        borderRadius: 5,
        marginVertical: 'auto',
    },
    inviteButton: {
        marginLeft: 'auto',
        backgroundColor: '#314BD8',
        paddingHorizontal: 20 * vw,
        paddingVertical: 10 * vw,
        borderRadius: 5 * vw,
    },
    inviteButtonText: {
        fontSize: 14,
        margin: 'auto',
        fontWeight: '600',
        color: 'white',
    },
    
});

export default styles;