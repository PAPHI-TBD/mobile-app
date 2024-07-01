import { StyleSheet, Dimensions } from 'react-native';

const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;

const { width , height } = Dimensions.get("window");
const vw = width / (100 * 4.3);
const vh = height / (100 * 4.3);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        marginTop: -5 * vw,
        fontSize: 14,
    },
    switchContainer: {
        marginTop: 10 * vw,
        marginBottom: 40 * vw,
        width: 65 * vw,
        height: 30 * vw,
        borderRadius: 30,
        padding: 4,
      },
    circle: {
        width: 24 * vw,
        height: 24 * vw,
        borderRadius: 20,
    }
});

export default styles;