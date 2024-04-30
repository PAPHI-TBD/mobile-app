import { StyleSheet, Dimensions } from 'react-native';

// iPhone 14 Pro Max
const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;
const { width , height } = Dimensions.get("window");
const horizontalScale = (size: number) =>
    (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) =>
    (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) =>
    size + (horizontalScale(size) - size) * factor;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    },
    header: {
        fontSize: 18,
        fontFamily: 'Inter',
        fontWeight: 'bold'
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: 'black', // Change color as needed
        marginVertical: 20, // Adjust spacing as needed:
        width: 390
    },
    requestContainer: {
        marginHorizontal: 20
    }
});

export default styles;