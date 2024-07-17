import { StyleSheet, Dimensions } from 'react-native';

// iPhone 14 Pro Max
const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;

const { width, height } = Dimensions.get('window');
const vw = width / (100 * 4.3);
const vh = height / (100 * 4.3);

const styles = StyleSheet.create({
    profileCardContainer: {
        width: 375 * vw,
        height: 500 * vw,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F9C784',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#F24C00',
        paddingHorizontal: 40 * vw,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    profilePicture: {
        height: 120 * vw,
        width: 120 * vw,
        borderRadius: 120,
        backgroundColor: 'white',
        borderColor: '#F24C00',
        borderWidth: 4,
        marginBottom: 8 * vw,
    },
    name: {
        textTransform: 'uppercase',
        fontWeight: 700,
        fontSize: 16,
    },
    username: {
        fontWeight: 700,
        fontSize: 10,
        color: '#3B5359',
        marginBottom: 10 * vw,
    },
    bio: {
        fontSize: 12,
        color: '#181818',
        textAlign: 'center',
    },
    header: {
        fontWeight: 700,
        alignSelf: 'flex-start',
        fontSize: 14,
        color: '#181818',
        textAlign: 'left',
        paddingVertical: 10 * vw,
    },
    eventsContainer: {
        flexDirection: 'column',
        alignSelf: 'flex-start'
    },
    eventText: {
        fontSize: 12,
        color: '#181818',
        marginBottom: 10 * vw,
    }
});

export default styles;