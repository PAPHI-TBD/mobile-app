import { StyleSheet, Dimensions } from 'react-native';

// iPhone 14 Pro Max
const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;

const { width, height } = Dimensions.get('window');
const vw = width / (100 * 4.3);
const vh = height / (100 * 4.3);

const styles = StyleSheet.create({
    card: {
        // height: 40 * vw,
        height: 40 * vh,
        width: width,
        backgroundColor: '#D9D9D9',
        marginVertical: 5 * vh,
    },
    username: {
        paddingVertical: 30 * vw,
        paddingHorizontal: 25 * vw,
        fontSize: 16,
    },
    actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 40 * vh,
        backgroundColor: '#D9D9D9',
        marginTop: 5 * vh,
    },
    actionButton: {
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 'auto'
        // backgroundColor: '#f5f5f5',
        // marginVertical: 10,
    },
    // actionText: {
    //     fontSize: 12,
    //     marginTop: 5,
    // },
});

export default styles;