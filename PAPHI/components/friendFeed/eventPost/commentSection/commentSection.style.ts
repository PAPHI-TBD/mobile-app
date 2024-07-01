import { StyleSheet, Dimensions } from 'react-native';

// iPhone 14 Pro Max
const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;

const { width, height } = Dimensions.get('window');
const vw = width / (100 * 4.3);
const vh = height / (100 * 4.3);

const styles = StyleSheet.create({
    commentSectionContainer: {
        maxHeight: height * 0.6,
        width: width,
        backgroundColor: '#3D3A3A',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },

    exitContainer: {
        backgroundColor: 'rgba(61, 58, 58, 1)',
        width: width,
        paddingVertical: 15 * vw,
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        zIndex: 1,
    },
    exit: {
        alignSelf: 'center',
    },
    exitText: {
        color: '#FFF4F4',
        textAlign: 'center',
    },

    commentContainer: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        paddingVertical: 10 * vh,
        paddingHorizontal: 20 * vw,
    },
    profileImg: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    commentTextContainer: {
        paddingHorizontal: 10 * vw,
        flex: 1,
    },
    username: {
        color: '#FFF4F4',
        fontSize: 16,
    },
    commentText: {
        color: '#FFF4F4',
        fontSize: 13,
    },
    likesComments: {
        color: 'white',
        fontSize: 12,
        fontWeight: '600',
        paddingHorizontal: 5 * vw,
        marginVertical: 'auto'
    },
    postCommentContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(61, 58, 58, 1)',
        flex: 1,
        paddingVertical: 15 * vw,
        borderTopColor: 'white',
        borderTopWidth: 1,
    },
    replyContainer: {
        width: '85%',
        padding: 10 * vw,
        backgroundColor: 'white',
        borderRadius: 20 * vw,
        maxHeight: 100 * vh
    },
    sendMessage: {
        marginVertical: 'auto',
    }
});

export default styles;
