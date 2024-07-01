import { StyleSheet, Dimensions } from 'react-native';

// iPhone 14 Pro Max
const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;

const { width, height } = Dimensions.get('window');
const vw = width / (100 * 4.3);
const vh = height / (100 * 4.3);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: height * 0.72,
        // margin: 10,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    overlay: {
        position: 'relative',
        left: 0,
        right: 0,
        padding: 20,
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: '800',
    },
    rating: {
        color: 'gold',
        fontSize: 18,
        marginTop: 'auto',
    },
    date: {
        color: 'white',
        fontSize: 13,
        fontWeight: '600',
        marginLeft: 'auto',
        textTransform: 'uppercase',
    },
    attendees: {
        flexDirection: 'row',
        marginTop: 10,
    },
    attendeeImage: {
        width: 26,
        height: 26,
        borderRadius: 13,
        marginRight: -5,
        borderColor: 'white',
        borderWidth: 1,
    },
    attendeeCountBubble: {
        marginRight: -5,
        width: 26,
        height: 26,
        borderRadius: 13,
        backgroundColor: '#99E8F4',
    },
    attendeeCount: {
        fontSize: 13,
        color: '#00B6CF',
        margin: 'auto',
        // textAlignVertical: 'center',
        // paddingLeft: 5,
    },
    commentText: {
        color: '#FFF4F4',
        fontSize: 13,
    },
});

export default styles;