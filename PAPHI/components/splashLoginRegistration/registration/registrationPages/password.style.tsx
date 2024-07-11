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
        // backgroundColor: '#8BC0C8'
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
        marginBottom: 80,
    },
    label: {
        fontSize: 30,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        marginBottom: -2,
        // color: 'white',
        color: 'rgb(236, 129, 58)',
        textAlign: 'center',
    },
    subLabel: {
        marginTop: 10,
        color: 'rgb(236, 129, 58)',
        fontSize: 15,
        fontFamily: 'Inter',
    },
    inputWrapper: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 160,
    },
    input: {
        textAlign: 'center',
        width: '90%',
        height: 50,
        borderWidth: 1,
        borderColor: 'rgb(236, 129, 58)',
        backgroundColor: '#FCF8E6',
        borderRadius: 50,
        paddingLeft: 10,
        marginTop: 0,
        marginBottom: 10,
        fontSize: 15,
        fontFamily: 'Inter',
        // color: 'rgb(236, 129, 58)',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    inputActive: {
        color: 'rgb(236, 129, 58)'
    },
    inputInactive: {
        color: '#A9A9A9'
    },
    passwordConfirmingSubBox: {
        alignItems: 'center',
        marginTop: 10
    },
    passwordConfirmingSubText: {
        fontFamily: 'Inter',
        color: 'rgb(236, 129, 58)',
        fontSize: 15
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
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    buttonEnabled: {
        backgroundColor: 'rgb(236, 129, 58)',
    },
    buttonDisabled: {
        backgroundColor: '#ccc',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});    

export default styles;