import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const vw = width / (100 * 4.3);
const vh = height / (100 * 4.3);

const styles = StyleSheet.create({
    commentContainer: {
        flexDirection: 'column'
    },
    inputContainer: {
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        borderTopWidth: 1,
        borderBottomColor: 'black',
        minHeight: 80 * vw,
    },
    input: {
        flex: 1, 
        borderColor: 'transparent',
        fontSize: 16,
        color: 'rgba(0, 0, 0, 0.8)',
        paddingLeft: 10
    },
    inputFocused: {
        borderColor: 'none'
    }
});

export default styles;