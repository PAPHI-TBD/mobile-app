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
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        paddingTop: 160,
        backgroundColor: '#8BC0C8'
    },
    backButton: {
        position: 'absolute',
        top: 60,
        left: 20,
        padding: 10,
    },
    labelContainer: {
        alignItems: 'flex-start',
        width: '90%',
        marginBottom: 16,
    },
    label: {
        fontSize: 35,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        marginBottom: -2,
        color: 'white',
        // color: '#212F3D',
        textAlign: 'center',
    },
    inputWrapper: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 160,
    },
    input: {
        height: 50,
        width: '90%',
        padding: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 2,
        backgroundColor: '#fff',
        fontSize: 22,
        marginBottom: 10,
        color: '#FFFFFF'
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 90,
        width: '100%',
        alignItems: 'center',
    },
    button: {
        marginTop: 20,
        borderRadius: 30,
        width: '60%',
        backgroundColor: '#007BFF',
        paddingVertical: 12,
        paddingHorizontal: 24,
        alignItems: 'center',
    },
    buttonEnabled: {
        backgroundColor: '#007BFF',
    },
    buttonDisabled: {
        backgroundColor: '#A9A9A9',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});    

export default styles;