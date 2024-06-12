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
    },
    kitchenImage: {
        height: 170,
        backgroundColor: 'grey'
    },
    kitchenInfo: {
        height: 95,
        backgroundColor: 'red',
        padding: 15
    }
    
});

export default styles;