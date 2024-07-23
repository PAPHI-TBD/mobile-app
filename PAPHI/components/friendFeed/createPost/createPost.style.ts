import { StyleSheet, Dimensions } from 'react-native';

// iPhone 14 Pro Max
const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;

const { width, height } = Dimensions.get('window');
const vw = width / (100 * 4.3);
const vh = height / (100 * 4.3);

const styles = StyleSheet.create({
    icon: {
        position: 'absolute',
        marginTop: '15%',
        paddingHorizontal: 25 * vw,
    },
    mainImage: {
        height: height * 0.35,
        width: width,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center'
    },
    options: {
        flexDirection: 'row',
        width: '100%',
        height: 30 * vh,
    },
    imageOption: {
        height: width / 5,
        width: width / 5,
        borderColor: 'black',
        borderWidth: 1,
    }, 
    informationContainer: {
        paddingHorizontal: 25 * vw,
        paddingVertical: 30 * vh,
    },
    eventTitle: {
        fontSize: 24,
        fontWeight: '800',
        textAlign: 'center',
        flex: 1,
    },
    tag: {
        flexDirection: 'row',
        columnGap: 10 * vw,
        marginVertical: 'auto',
    },
    tagColor: {
        height: 12,
        width: 12,
        borderRadius: 6,
        marginVertical: 'auto'
    },
    tagText: {
        textTransform: 'uppercase',
        fontSize: 12,
        fontWeight: '600'
    },
    header: {
        fontSize: 14,
        fontWeight: '600',
        flex: 1,
    },
    footerContainer: {
        paddingHorizontal: 20 * vw,
        flex: 1,
        marginVertical: 'auto',
        paddingVertical: 10 * vw
        // backgroundColor: '#10152F',
    },
    button: {
        // paddingHorizontal: 30 * vw,
        width: 110,
        paddingVertical: 10 * vw,
        // borderBlockColor: '#314BD8',
        // borderBlockStartColor: '#314BD8',
        paddingHorizontal: 'auto',
        borderColor: '#314BD8',
        color: '#314BD8',
        borderWidth: 2,
        borderRadius: 7 * vw,
    },
    saveButton: {
        
    },
    shareButton: {
        
        backgroundColor: '#314BD8',
        color: 'white'
    },
    buttonText: {
        margin: 'auto',
        fontSize: 14,
        fontWeight: '600',
        // color: 'white',
        color: '#314BD8',
    }
});

export default styles;