import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8BC0C8', // Set background color here
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
        fontFamily: 'DM Serif Display', // Set the font family here
    },
    subheaderText: {
        fontSize: 16,
        fontFamily: 'Inter',
    },
    loginSection: {
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
        marginTop: 50, // Adjust the margin top as needed
    },
    loginHeaderText: {
        fontSize: 24,
        fontFamily: 'DM Serif Display', // Set the font family here
        marginBottom: 15
    },
    input: {
        textAlign: 'center',
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#FCF8E6',
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
    orSection: {
        flexDirection: 'row', // Arrange items horizontally
        alignItems: 'center', // Center items vertically
        justifyContent: 'center', // Horizontally center items
        marginTop: 20, // Adjust the margin top as needed
    },
    line: {
        height: 1, // Set height of the line
        backgroundColor: '#000', // Set color of the line
        width: 149
    },
    orText: {
        marginHorizontal: 10, // Add margin to the left and right of the text
        fontSize: 18,
        fontFamily: 'Inter'
    },
    appIconSection: {
        alignItems: 'center', // Center items vertically
        flexDirection: 'row', // Arrange items horizontally
        justifyContent: 'center', // Horizontally center items
    },
    loginIcons: {
        width: 50,
        height: 50, 
        margin: 10
    }
});

export default styles;