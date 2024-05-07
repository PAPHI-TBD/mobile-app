import { StyleSheet, Dimensions } from 'react-native';

const {width } = Dimensions.get('window');
const vw = width / (100 * 4.3);

const styles = StyleSheet.create({
    receivedBubble: {
        backgroundColor: "#635053",
        opacity: 0.65,
        padding: 15 * vw,
        paddingHorizontal: 20 * vw,
        marginTop: 5,
        marginLeft: "5%",
        maxWidth: '50%',
        alignSelf: 'flex-start',
        borderRadius: 20,
        borderTopLeftRadius: 0,
    },
    timestamp: {
        marginRight: 'auto',
        paddingLeft: 20 * vw,
    }
    // leftArrow: {
    //     position: "absolute",
    //     backgroundColor: "#dedede",
    //     //backgroundColor:"red",
    //     width: 20,
    //     height: 25,
    //     bottom: 0,
    //     borderBottomRightRadius: 25,
    //     left: -10
    // },
    
    // leftArrowOverlap: {
    //     position: "absolute",
    //     backgroundColor: "#eeeeee",
    //     //backgroundColor:"green",
    //     width: 20,
    //     height: 35,
    //     bottom: -6,
    //     borderBottomRightRadius: 18,
    //     left: -20
    
    // },
});

export default styles;