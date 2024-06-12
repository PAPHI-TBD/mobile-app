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