import { StyleSheet, Dimensions } from 'react-native';

const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;

const { width , height } = Dimensions.get("window");
const vw = width / (100 * 4.3);
const vh = height / (100 * 4.3);

const styles = StyleSheet.create({
  dropdown: {
      backgroundColor: '#314BD8',
      width: 120 * vw,
      paddingVertical: 8 * vw,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20 * vw,
  },
  icon: {
      marginRight: 5,
  },
  label: {
      position: 'absolute',
      backgroundColor: 'white',
      zIndex: 999,
      paddingHorizontal: 8 * vw,
      fontSize: 14,
  },
  placeholderStyle: {
      fontSize: 16,
      color: 'white',
  },
  selectedTextStyle: {
      fontSize: 16,
      color: 'white',
  },
  iconStyle: {
      width: 20,
      height: 20,
      marginLeft: 2 * vw,
  },
  inputSearchStyle: {
      height: 40,
      fontSize: 16,
  },
});

export default styles;