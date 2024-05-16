import { StyleSheet, Dimensions } from 'react-native';

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
        // justifyContent: 'center',
        // alignItems: 'center',
        padding: 30,
        backgroundColor: '#8BC0C8'
    },
    label: {
        fontSize: 28,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        marginBottom: 8,
        color: 'white'
    },
    dateText: {
        fontSize: 16,
        marginTop: 16,
    },
    button: {
        marginTop: 10,
        borderRadius: 10,
        width: '30%',
        backgroundColor: '#007BFF',
        paddingVertical: 12,
        paddingHorizontal: 24,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});    

export default styles;