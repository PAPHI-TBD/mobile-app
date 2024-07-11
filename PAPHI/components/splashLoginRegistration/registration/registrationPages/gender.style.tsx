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
        marginBottom: 16,
    },
    label: {
        fontSize: 35,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        marginBottom: -2,
        color: 'rgb(236, 129, 58)',
        // color: '#212F3D',
        textAlign: 'left',
    },
    inputWrapper: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 160,
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        paddingVertical: 15,
        borderWidth: 2,
        borderColor: 'rgb(236, 129, 58)',
        backgroundColor: '#FCF8E6',
        borderRadius: 25,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    radioButtonSelected: {
        backgroundColor: 'rgb(236, 129, 58)',
        padding: 10,
    },
    radioButtonSelectedFemale: {
        backgroundColor: 'rgb(236, 129, 58)', 
        padding: 10,
    },
    radioButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        // color: "#FFFFFF",
        color: 'rgb(236, 129, 58)',
    },
    radioButtonTextSelected: {
        fontSize: 18,
        fontWeight: 'bold',
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