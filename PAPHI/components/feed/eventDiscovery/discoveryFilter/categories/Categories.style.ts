import { StyleSheet, Dimensions } from 'react-native';

const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;

const { width , height } = Dimensions.get("window");
const vw = width / (100 * 4.3);
const vh = height / (100 * 4.3);

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        marginBottom: 10,
        flexWrap: 'wrap',
    },
});

export default styles;