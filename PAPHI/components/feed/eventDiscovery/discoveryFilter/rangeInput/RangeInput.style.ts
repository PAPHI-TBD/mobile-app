import { StyleSheet, Dimensions } from 'react-native';

const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;

const { width , height } = Dimensions.get("window");
const vw = width / (100 * 4.3);
const vh = height / (100 * 4.3);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 20,
        width: '100%',
      },
      text: {
        color: '#343434',
        fontSize: 14,
      },
      input: {
        borderWidth: 1,
        borderColor: '#C4C4C4',
        borderRadius: 5,
        height: 30 * vw,
        width: 45 * vw,
        marginHorizontal: 10,
        textAlign: 'center',
      },
      
});

export default styles;