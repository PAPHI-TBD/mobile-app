import { StyleSheet, Dimensions} from 'react-native';

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
        alignItems: 'center',
    },
    logo: {
        width: horizontalScale(142), // Adjust width as needed
        height: verticalScale(178), // Adjust height as needed
        marginTop: verticalScale(200)
    },
    headerSection: {
        alignItems: 'center', // Center horizontally
        marginTop: verticalScale(80)
    },
    headerText: {
        fontSize: moderateScale(40),
        fontFamily: 'DM Serif Display', // Set the font family here
    },
    subheaderText: {
        fontSize: moderateScale(16),
        fontFamily: 'Inter',
    },
    buttonContainer: {
        marginTop: verticalScale(80), // Adjust margin top as needed
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally    
    },
    button: {
        paddingVertical: verticalScale(15), // Vertical padding
        paddingHorizontal: horizontalScale(30), // Horizontal padding
        borderRadius: moderateScale(50), // Border radius
        marginBottom: verticalScale(20), // Margin bottom between buttons
        width: horizontalScale(332),
        height: verticalScale(64),
        backgroundColor: '#FCF8E6',
        borderWidth: 1,
        borderColor: 'black',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: moderateScale(4.65),
        elevation: 6,
    },
    buttonText: {
        fontSize: moderateScale(30), // Button text size
        fontFamily: 'Inter',
        color: '#000', // Button text color
        textAlign: 'center', // Text alignment
    },
});

export default styles;
