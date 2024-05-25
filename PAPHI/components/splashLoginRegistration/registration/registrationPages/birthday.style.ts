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
        textAlign: 'left',
    },
    inputWrapper: {
        flex: 1,
        width: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 160,
    },
    subLabel: {
        fontSize: 14,
        color: '#FFFFFF',
        textAlign: 'center',
        marginTop: 5,
    },
    inputContainer: {
        height: 50,
        width: '100%',
        borderBottomColor: '#ccc',
        borderBottomWidth: 2,
        justifyContent: 'center',
        marginBottom: 10,
    },
    input: {
        height: 50,
        width: '100%',
        fontSize: 22,
        color: '#FFFFFF',
    },
    datePickerButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    cancelBirthdayButton: {
        flex: 1,
        marginRight: 10,
        backgroundColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
    },
    confirmBirthdayButton: {
        flex: 1,
        marginLeft: 10,
        backgroundColor: '#3b99ff',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
    },
    cancelBirthdayButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    confirmBirthdayButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 90,
        width: '100%',
        alignItems: 'center',
    },
    button: {
        marginTop: 20,
        borderRadius: 10,
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