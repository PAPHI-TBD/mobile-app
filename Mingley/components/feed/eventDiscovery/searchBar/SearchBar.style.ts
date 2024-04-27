import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(118, 118, 128, 0.12)', // 12% opacity of #767680
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        width: 358,
        flexDirection: 'row', // Arrange items horizontally
    },
    searchIcon: {
        width: 25,
        height: 25
    },
    input: {
        marginLeft: 10,
        fontFamily: 'SF Pro',
        fontSize: 17,
        color: '#3C3C43',
        width: 200
    },
});

export default styles;