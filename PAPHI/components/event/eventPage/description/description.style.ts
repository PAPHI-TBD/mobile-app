import { StyleSheet, Dimensions } from 'react-native';

// iPhone 14 Pro Max
const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;

const { width, height } = Dimensions.get('window');
const vw = width / (100 * 4.3);
const vh = height / (100 * 4.3);

const styles = StyleSheet.create({
    descriptionContainer: {
        borderTopColor: '#6D728D',
        borderBottomColor: '#6D728D',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        paddingVertical: 10 * vh,
    },
    eventCreator: {
        flexDirection: 'row',
        paddingTop: 15 * vh,
    },
    userImage: {
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: '#666161',
        marginRight: 10 * vw,
    },
    creatorText: {
        fontSize: 14,
        fontWeight: 'regular',
        color: 'black',
        marginVertical: 'auto',
    },
});

export default styles;