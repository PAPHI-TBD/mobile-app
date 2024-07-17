import { StyleSheet, Dimensions } from 'react-native';

// iPhone 14 Pro Max
const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;

const { width, height } = Dimensions.get('window');
const vw = width / (100 * 4.3);
const vh = height / (100 * 4.3);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    tabsContainer: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        width: 430 * vw,
        height: 70 * vw,
        backgroundColor: 'white', 
        justifyContent: 'flex-end',
        marginBottom: 20 * vw,
      },
      tabs: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10 * vw,
        fontSize: 14,
        color: '#2A2A2A',
      },
    top: {
        width: '100%',
        padding: 30 * vw,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    maxLimitCard: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 375 * vw,
        height: 350 * vw,
        backgroundColor: '#F9C784',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#F24C00',
        paddingHorizontal: 50 * vw,
    },
    maxLimitText: {
        color: '#F24C00',
        fontSize: 16,
        fontWeight: 700,
        textAlign: 'center',
    }
});

export default styles;