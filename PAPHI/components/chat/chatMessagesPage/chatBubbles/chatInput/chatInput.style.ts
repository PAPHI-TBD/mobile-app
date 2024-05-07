import {StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const vw = width / (100 * 4.3);

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center', 
        paddingHorizontal: 10 * vw, 
        paddingVertical: 10 * vw,
        // marginTop: 10 * vw,
    },
    plusIcon: {
        padding: 5 * vw,
        backgroundColor: '#F7F8F9',
        borderRadius: 12.5 * vw,
        marginRight: 10 * vw,
    },
    input: { 
        flex: 1, 
        // borderWidth: 1, 
        // borderColor: '#ccc', 
        backgroundColor: '#F7F8F9',
        borderRadius: 5 * vw, 
        padding: 15 * vw, 
        marginRight: 10 * vw,
        fontSize: 16 * vw,
    },
    // sendButton: {
    //     color: 'black',
    // }
});

export default styles;