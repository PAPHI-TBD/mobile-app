import { StyleSheet, Dimensions } from 'react-native';

// iPhone 14 Pro Max
const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;

const { width, height } = Dimensions.get('window');
const vw = width / (100 * 4.3);
const vh = height / (100 * 4.3);

const styles = StyleSheet.create({
    eventPageContainer: {
        flex: 1,
    },
    headerSection: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // 10% opacity white
        width: '100%',
        height: 236,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 }, // Spread 1 in the x direction, 0 in the y direction
        shadowOpacity: 0.4, // Opacity of the shadow
        shadowRadius: 4, // Blur radius of the shadow
        elevation: 5, // This is required for the shadow effect on Android
    },
    header: {
        marginTop: '15%',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
    attendeesPage: {
        flex: 1, 
        backgroundColor: 'white', 
        padding: 15 * vw,
        paddingTop: 20 * vh,
    },
    searchSection: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default styles;