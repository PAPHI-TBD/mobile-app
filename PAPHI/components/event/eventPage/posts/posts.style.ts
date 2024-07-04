import { StyleSheet, Dimensions } from 'react-native';

// iPhone 14 Pro Max
const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;

const { width, height } = Dimensions.get('window');
const vw = width / (100 * 4.3);
const vh = height / (100 * 4.3);

const styles = StyleSheet.create({
    postsContainer: {
        paddingVertical: 10 * vh,
        // marginHorizontal: -20 * vw,
    },
    postsScroll: { 
        marginTop: 5, 
        marginBottom: 15,
        marginHorizontal: -20 * vw,
    },
    post: {
        height: 60 * vh,
        width: 60 * vh,
        borderRadius: 5 * vh,
        backgroundColor: '#666161',
        marginHorizontal: 20 * vw,
        marginRight: 0 * vw,
    }
});

export default styles;