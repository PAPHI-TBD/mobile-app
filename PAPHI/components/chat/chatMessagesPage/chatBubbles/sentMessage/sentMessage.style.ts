import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const vw = width / (100 * 4.3);

const styles = StyleSheet.create({
    sentBubble: {
        backgroundColor: "#635053",
        padding: 15 * vw,
        paddingHorizontal: 20 * vw,
        marginLeft: '45%',
        marginTop: 5,
        marginRight: "5%",
        maxWidth: '50%',
        alignSelf: 'flex-end',
        borderRadius: 20,
        borderBottomRightRadius: 0,
    },
    timestamp: {
        marginLeft: 'auto',
        paddingRight: 20 * vw,
    }
    // rightArrow: {
    //     position: "absolute",
    //     backgroundColor: "#0078fe",
    //     //backgroundColor:"red",
    //     width: 20,
    //     height: 25,
    //     bottom: 0,
    //     borderBottomLeftRadius: 25,
    //     right: -10
    // },
    
    // rightArrowOverlap: {
    //     position: "absolute",
    //     backgroundColor: "#eeeeee",
    //     //backgroundColor:"green",
    //     width: 20,
    //     height: 35,
    //     bottom: -6,
    //     borderBottomLeftRadius: 18,
    //     right: -20
    
    // },
});

export default styles;