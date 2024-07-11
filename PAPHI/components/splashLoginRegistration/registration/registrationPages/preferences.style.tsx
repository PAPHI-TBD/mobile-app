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
    headerContainer: {
        alignItems: 'center',
        marginBottom: 16,
    },
    headerText: {
        fontSize: 35,
        fontFamily: 'DM Sans Serif',
        fontWeight: 'bold',
        marginBottom: -2,
        color: 'rgb(236, 129, 58)',
        // color: '#212F3D',
        textAlign: 'center',
    },
    subheaderText: {
        marginTop: 10,
        fontSize: 16,
        fontFamily: 'Inter',
        color: 'rgb(236, 129, 58)',
    },
    searchInput: {
        textAlign: 'center',
        width: '90%',
        height: 45,
        borderWidth: 1,
        borderColor: 'rgb(236, 129, 58)',
        backgroundColor: '#FCF8E6',
        borderRadius: 50,
        paddingLeft: 10,
        fontSize: 15,
        fontFamily: 'Inter',
        color: 'rgb(236, 129, 58)',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    preferencesContainer: {
        borderWidth: 1,
        borderRadius: 20,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        // backgroundColor: '#fff',
        borderColor: 'rgb(236, 129, 58)',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 65,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    preferenceTag: {
        borderWidth: 1,
        borderColor: 'rgb(236, 129, 58)',
        borderRadius: 20,
        padding: 10,
        margin: 5,
        backgroundColor: '#FCF8E6',
    },
    preferenceTagSelected: {
        backgroundColor: 'rgb(236, 129, 58)',
    },
    preferenceTagText: {
        fontSize: 15,
        fontFamily: 'Inter',
        color: '#000',
        fontWeight: 'bold',
    },
    preferenceTagTextSelected: {
        color: '#fff'
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 90,
        width: '100%',
        alignItems: 'center',
    },
    skipButton: {
        padding: 10,
    },
    skipButtonText: {
        fontSize: 16,
        fontFamily: 'Inter',
        // color: '#A9A9A9'
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