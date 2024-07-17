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
        borderColor: '#F24C00',
        borderRadius: 25,
        borderWidth: 1 * vw,
        paddingHorizontal: 40 * vw,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    prompt: {
        alignSelf: 'flex-start',
        fontSize: 14,
        color: '#181818',
        marginBottom: 20 * vw,
    },
    input: {
        height: 36 * vw,
        width: 290 * vw,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white',
        padding: 10,
        marginBottom: 20 * vw,
      },
      topArea: {
        height: 40 * vh,
        backgroundColor: 'transparent',
        width: '100%',
    },
    bottomArea: {
        height:40 * vh,
        backgroundColor: 'transparent',
        width: '100%',
    },
    contentArea: {
        flex: 1,
        paddingHorizontal: 40 * vw,
        justifyContent: 'center',
    },
});

export default styles;