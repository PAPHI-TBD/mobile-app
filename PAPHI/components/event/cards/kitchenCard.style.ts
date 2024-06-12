import { StyleSheet, Dimensions } from 'react-native';

// iPhone 14 Pro Max
const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;

const { width, height } = Dimensions.get('window');
const vw = width / (100 * 4.3);
const vh = height / (100 * 4.3);

const styles = StyleSheet.create({
    kitchenCardContainer: {
        width: 247,
        height: 265,
        backgroundColor: 'white',
        marginTop: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    kitchenImage: {
        height: 170,
        backgroundColor: 'grey',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    kitchenInfo: {
        height: 95,
        padding: 15,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    kitchenTitle: {
        fontWeight: 800,
        fontSize: 20,
        marginBottom: 8
    },
    kitchenDate: {
        fontWeight: 600,
        fontSize: 12,
        marginBottom: 2
    },
    kitchenLocation: {
        fontWeight: 500,
        fontSize: 12
    }
    
});

export default styles;