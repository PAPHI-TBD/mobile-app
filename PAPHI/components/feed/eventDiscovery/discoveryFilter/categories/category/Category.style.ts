import { StyleSheet, Dimensions } from 'react-native';

const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;

const { width , height } = Dimensions.get("window");
const vw = width / (100 * 4.3);
const vh = height / (100 * 4.3);

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#D9EDFF',
        borderRadius: 15,
        paddingVertical: 4,
        paddingHorizontal: 25,
        alignSelf: 'flex-start',
        flexShrink: 1,
        marginRight: 8,
        marginBottom: 8,
        alignItems: 'center',
    },
    text: {
        color: 'black',
        fontSize: 15,
        fontWeight: 600,
    },
    selectedButton: {
        backgroundColor: '#465BCC',
    },
    selectedText: {
        color: 'white',
    }
});

export default styles;