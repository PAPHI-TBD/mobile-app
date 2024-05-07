import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const vw = width / (100 * 4.3);

const styles = StyleSheet.create({
    chatContainer: {
        backgroundColor: 'white',
        flex: 1,
    },
    chatBubblesContainer: {
        paddingBottom: 20 * vw,
    },

});

export default styles;