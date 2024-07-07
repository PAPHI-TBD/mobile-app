import { StyleSheet, Dimensions } from 'react-native';

// iPhone 14 Pro Max
const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;

const { width, height } = Dimensions.get('window');
const vw = width / (100 * 4.3);
const vh = height / (100 * 4.3);

const styles = StyleSheet.create({
    // titleContainer: {
    //     flexDirection: 'row'
    // },
    ticketText: {
        // textDecorationStyle: 'solid',
        textDecorationLine: 'underline',
        textDecorationColor: '#181818',
        fontWeight: '600',
        fontSize: 10,
        color: '#181818',
        paddingHorizontal: 5 * vw,
        marginTop: 14,
    }
});

export default styles;