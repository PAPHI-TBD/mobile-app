import { StyleSheet, Dimensions } from 'react-native';

// iPhone 14 Pro Max
const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;

const { width, height } = Dimensions.get('window');
const vw = width / (100 * 4.3);
const vh = height / (100 * 4.3);

const styles = StyleSheet.create({
    attendeesContainer: {
        // borderTopColor: '#6D728D',
        borderBottomColor: '#6D728D',
        // borderTopWidth: 1,
        borderBottomWidth: 1,
        paddingVertical: 10 * vh,
        // marginHorizontal: -20 * vw,
    },
    attendeesScroll: { 
        marginTop: 5, 
        marginBottom: 15,
        marginHorizontal: -20 * vw,
    },
    userImage: {
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: '#666161',
        marginLeft: 20 * vw,
        marginRight: -10 * vw,
        // marginBottom: 15 * vw,
    },
    number: {
        color: 'black',
        fontSize: 12,
        fontWeight: '600',
    }
});

export default styles;