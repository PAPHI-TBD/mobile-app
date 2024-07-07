import { StyleSheet, Dimensions } from 'react-native';

const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;

const { width , height } = Dimensions.get("window");
const vw = width / (100 * 4.3);
const vh = height / (100 * 4.3);

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginBottom: 20 * vw,
    },
    sliderRow: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      width: '100%',
    },
    leftLabel: {
        fontSize: 14,
      },
    rightLabel:  {
        fontSize: 14,
    },
    slider: {
        flex: 1,
        marginHorizontal: 15 * vw,
    },
    track: {
      backgroundColor: '#D9D9D9',
      borderRadius: 4,
    },
    thumb: {
      borderColor: '#314BD8',
      borderWidth: 1,
    },
    minTrack: {
        backgroundColor: '#314BD8',
        borderRadius: 4,  
    },
    distanceLabel: {
      position: 'absolute',
      width: '100%',
      top: -25, 
      transform: [{ translateX: -10 * vw }], 
      padding: 5,
      borderRadius: 5,
      zIndex: 1,
    },
});

export default styles;