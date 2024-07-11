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
        // backgroundColor: '#8BC0C8', // Set background color here
    },
    content: {
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    headerSection: {
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
        marginTop: 100, // Adjust the margin top as needed

    },
    headerText: {
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: 'DM Serif Display', // Set the font family here
        color: 'rgb(236, 129, 58)',
        marginTop: 30,
    },
    subheaderText: {
        fontSize: 16,
        fontFamily: 'Inter',
        color: 'rgb(236, 129, 58)',
    },
    loginSection: {
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
        marginTop: 'auto', // Adjust the margin top as needed
    },
    loginHeaderText: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'DM Serif Display', // Set the font family here
        color: 'rgb(236, 129, 58)',
        marginTop: 'auto',
    },
    input: {
        textAlign: 'center',
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: 'rgb(236, 129, 58)',
        backgroundColor: '#FCF8E6',
        borderRadius: 50,
        paddingLeft: 10,
        marginTop: 20,
        marginBottom: 10,
        fontSize: 15,
        fontFamily: 'Inter',
        color: '#000',
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
    forgotText: {
        fontSize: 12,
        fontFamily: 'Inter',
        color: '#3A3A3A',
        textDecorationLine: 'underline', // Add underline to the text
    },
    loginButton: {
        textAlign: 'center',
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: '#007BFF',
        backgroundColor: '#007BFF',
        borderRadius: 50,
        paddingLeft: 10,
        marginTop: 15,
        fontSize: 15,
        fontFamily: 'Inter',
        color: '#000',
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
        borderColor: 'rgb(236, 129, 58)',
    },
    buttonDisabled: {
        backgroundColor: '#ccc',
        borderColor: '#ccc'
    },
    loginButtonText: {
        marginTop: 6,
        fontSize: moderateScale(20), // Button text size
        fontFamily: 'Inter',
        fontWeight: 'bold',
        color: '#FFFFFF', // Button text color
        textAlign: 'center', // Text alignment
        justifyContent: 'center',
        alignItems: 'center'
    },
    orSection: {
        flexDirection: 'row', // Arrange items horizontally
        alignItems: 'center', // Center items vertically
        justifyContent: 'center', // Horizontally center items
        marginTop: 45, // Adjust the margin top as needed
    },
    line: {
        height: 1, // Set height of the line
        backgroundColor: 'rgb(236, 129, 58)', // Set color of the line
        width: 149
    },
    orText: {
        marginHorizontal: 10, // Add margin to the left and right of the text
        fontSize: 18,
        fontFamily: 'Inter',
        color: 'rgb(256, 129, 58)'
    },
    appIconSection: {
        alignItems: 'center', // Center items vertically
        // marginTop: 20,
        marginTop: 40,
        // marginBottom: 'auto',
        flexDirection: 'row', // Arrange items horizontally
        justifyContent: 'center', // Horizontally center items
    },
    loginIcons: {
        width: 50,
        height: 50, 
        margin: 10
    },
    signUpSection: {
        alignItems: 'center',
        justifyContent: 'center', // Horizontally center items
        fontSize: 12,
        fontFamily: 'Inter',
        color: '#3A3A3A',
        textDecorationLine: 'underline', // Add underline to the text
        marginTop: 'auto',
        marginBottom: 40,

    },
    signUpText: {
        // color: 'white',
        // fontWeight: 'bold',
    },
    dontHaveAcc: {
        textDecorationLine: 'underline'
    }
});

export default styles;