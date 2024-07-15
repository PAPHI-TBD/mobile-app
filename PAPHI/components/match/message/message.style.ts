import { StyleSheet, Dimensions } from 'react-native';

// iPhone 14 Pro Max
const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;

const { width, height } = Dimensions.get('window');
const vw = width / (100 * 4.3);
const vh = height / (100 * 4.3);

const styles = StyleSheet.create({
    arrow: {
        marginTop: '15%',
        marginHorizontal: 20 * vw,
    },
    profile: {
        margin: 'auto',
        flexDirection: 'column',
        backgroundColor: '#8BC0C8',
        padding: 20 * vh,
        marginHorizontal: 30 * vw,
        alignItems: 'center',
        borderRadius: 25,
        borderColor: 'black',
        borderWidth: 1,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderColor: '#ADC9D1',
        borderWidth: 3,
    },
    nameContainer: {
        marginVertical: 5 * vh,
    },
    name: {
        fontSize: 16,
        fontWeight: '800',
        textTransform: 'uppercase',
        color: '#2A2A2A',
        textAlign: 'center',
    },
    username: {
        fontSize: 10,
        fontWeight: '800',
        color: '#3B5359',
        textAlign: 'center',
    },
    bio: {
        fontSize: 12,
        fontWeight: '500',
        color: '#181818',
        textAlign: 'center',
    },
    replyContainer: {
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 1,
        height: 50,
        paddingVertical: 5 * vh,
        paddingHorizontal: 10 * vw,
        columnGap: 5 * vw,
    },
    input: {
        flex: 1,
        marginRight: 'auto',
        fontSize: 16,
    }
});

export default styles;