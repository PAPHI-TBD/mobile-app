import { StyleSheet, Dimensions } from 'react-native';

// iPhone 14 Pro Max
const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;

const { width, height } = Dimensions.get('window');
const vw = width / (100 * 4.3);
const vh = height / (100 * 4.3);

const styles = StyleSheet.create({
    smallCardContainer: {
        width: 247,
        height: 170,
        backgroundColor: 'grey',
        borderRadius: 8,
        padding: 20,
        marginTop: 20,
        marginRight: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    smallCardInfo: {

    }, 
    smallCardTitle: {
        fontWeight: 800,
        fontSize: 20,
        marginBottom: 8
    },
    smallCardDate: {
        fontWeight: 600,
        fontSize: 12,
        marginBottom: 2
    },
    smallCardLocation: {
        fontWeight: 500,
        fontSize: 12
    }
    
});

export default styles;