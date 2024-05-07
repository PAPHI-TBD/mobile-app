import { Center } from '@gluestack-ui/themed';
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const vw = width / (100 * 4.3);

const styles = StyleSheet.create({
    bioHeaderContainer: {
        padding: 10 * vw,
        height: 130 * vw,
        width: width,
        // flexDirection: 'row',
        // alignItems: 'center',
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#33322E22',
        position: 'relative',
    },
    icon: {
        // marginLeft: 'auto',
        // marginBottom: 'auto',
        // padding: 5 * vw,
        position: 'absolute',
        top: 5 * vw,
        right: 5 * vw,
    },
    subContainer: {
        width: width * 0.85,
        margin: 'auto',
        flexDirection: 'row',
        // flex: 1,
        alignItems: 'center',
        // position: 'absolute',
    },
    userIcon: {
        width: 75 * vw,
        height: 75 * vw,
        borderRadius: 37.5 * vw,
        marginRight: 10 * vw,
        // flex: 1,
    },
    textContainer: {
        flex: 1,
        paddingLeft: 20 * vw,
        // textAlign: 'center',
        // justifyContent: 'flex-start',
    },
    mainHeadingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    mainHeading: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    occupation: {
        marginLeft: 15 * vw,
        fontSize: 16,
    },
    subHeading: {
        marginTop: 7 * vw,
        fontSize: 14,
    },
});

export default styles;