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
        height: 45 * vh,
        width: width,
        backgroundColor: '#F9C784',
        borderColor: '#F24C00',
        borderWidth: 1,
        flexDirection: 'row',
        columnGap: 15 * vw,
        paddingHorizontal: 10 * vh,
        // marginVertical: 5 * vh,
    },
    unreadCard: {
        backgroundColor: '#FFB34D',
    },
    image: {
        width: 35 * vh,
        height: 35 * vh,
        borderRadius: 17.5 * vh,  
        marginVertical: 'auto',
    },
    text: {
        flexDirection: 'column',
        marginVertical: 'auto',
        flex: 1,
        fontSize: 15
    },
    notiBubble: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: '#328EFA',
        marginVertical: 'auto',
        marginLeft: 10 * vw,
    },
    actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 45 * vh,
        // backgroundColor: '#D9D9D9',
        // marginTop: 5 * vh,
    },
    acceptContainer: {
        // flex: 1,
        backgroundColor: '#B0CECD',
    },
    rejectContainer: {
        // flex: 1,
        backgroundColor: '#EC7B7B',
    },
    actionButton: {
        width: 45 * vh,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 'auto',
        height: 45 * vh,
        // backgroundColor: '#f5f5f5',
        // marginVertical: 10,
    },
    // actionText: {
    //     fontSize: 12,
    //     marginTop: 5,
    // },
});

export default styles;