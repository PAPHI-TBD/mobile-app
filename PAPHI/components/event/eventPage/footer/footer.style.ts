import { StyleSheet, Dimensions } from 'react-native';

// iPhone 14 Pro Max
const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;

const { width, height } = Dimensions.get('window');
const vw = width / (100 * 4.3);
const vh = height / (100 * 4.3);

const styles = StyleSheet.create({
    footerContainer: {
        padding: 20 * vw,
        backgroundColor: '#10152F',
    },
    button: {
        paddingHorizontal: 30 * vw,
        paddingVertical: 10 * vw,
        // borderBlockColor: '#314BD8',
        // borderBlockStartColor: '#314BD8',
        borderColor: '#314BD8',
        borderWidth: 2,
        borderRadius: 7 * vw,
    },
    inviteButton: {
        
    },
    addEventButton: {
        
        backgroundColor: '#314BD8',
    },
    buttonText: {
        margin: 'auto',
        fontSize: 14,
        fontWeight: '600',
        color: 'white',
    }
});

export default styles;