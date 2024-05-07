import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const vw = width / (100 * 4.3);

const styles = StyleSheet.create({
    requestContainer: {
        width: width,
        height: 100 * vw,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        // paddingTop: 0 * vw,
        marginTop: -20 * vw,
    },
    textContainer: {
        width: width * 0.9,
        margin: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#D9D9D9',
        padding: 15 * vw,
        paddingTop: 5 * vw,
        paddingBottom: 10 * vw,
        // paddingTop: 0 * vw,
    },
    text: {
        // justifyContent: 'flex-start',
        fontSize: 16,
        flex: 1,
    },
    icon: {
        justifyContent: 'flex-end',
        // height: 50 * vw,
        marginLeft: 'auto',
        padding: 5 * vw,
    }
});

export default styles;