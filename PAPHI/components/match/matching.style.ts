import { StyleSheet, Dimensions, StatusBar } from 'react-native';

// iPhone 14 Pro Max
const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;

const { width, height } = Dimensions.get('window');
const vw = width / (100 * 4.3);
const vh = height / (100 * 4.3);

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
        paddingTop: StatusBar.currentHeight,
        backgroundColor: 'white', // Set background color of the tab bar
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
    },
});

export default styles;