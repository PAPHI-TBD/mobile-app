import { StyleSheet, Dimensions } from 'react-native';

const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;
const { width , height } = Dimensions.get("window");

const vw = width / (100 * 4.3);

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    individualEventContainer: {
        padding: 15 * vw
    },
    firstRow: {
        flexDirection: 'row',
    },
    title: {
        flex: 1,
        textTransform: 'uppercase',
        fontSize: 22,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
    },
    description: {
        marginTop: 5 * vw,
        marginBottom: 30 * vw,
        fontSize: 18,
    },
    shadowProp: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.5,
        shadowRadius: 10 * vw,
    },
    bottom: {
        flexDirection: 'row',
    }
});

export default styles;