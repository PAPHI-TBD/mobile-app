import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const vw = width / (100 * 4.3);
const vh = height / (100 * 4.3);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
        minHeight: 20 * vw,
        padding: 15 * vw,
        borderTopWidth: 1,
        borderBottomColor: 'black',
        backgroundColor: 'transparent'
    },
    commentHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    commentDate: {
        fontSize: 16,
        color: 'rgba(0, 0, 0, 0.5)',
    },
    commentText: {
        fontSize: 16,
        color: "black",
        marginTop: 8,
    },
    reactButton: {
        marginTop: 20,
        backgroundColor: 'transparent'

    },
    reactButtonText: {
        fontSize: 10,
        color: "black"
    }
});

export default styles;
