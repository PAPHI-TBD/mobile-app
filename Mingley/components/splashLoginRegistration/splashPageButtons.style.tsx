import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 142, // Adjust width as needed
        height: 178, // Adjust height as needed
    },
    headerSection: {
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
        marginTop: 100, // Adjust the margin top as needed
    },
    headerText: {
        fontSize: 40,
        fontFamily: 'DM Serif Display', // Set the font family here
    },
    subheaderText: {
        fontSize: 16,
        fontFamily: 'Inter',
    },
    buttonContainer: {
        marginTop: 20, // Adjust margin top as needed
    },
    button: {
        backgroundColor: '#fff', // Button background color
        paddingVertical: 15, // Vertical padding
        paddingHorizontal: 30, // Horizontal padding
        borderRadius: 10, // Border radius
        marginBottom: 10, // Margin bottom between buttons
    },
    buttonText: {
        fontSize: 18, // Button text size
        fontWeight: 'bold', // Button text weight
        color: '#000', // Button text color
        textAlign: 'center', // Text alignment
    },
});

export default styles;
