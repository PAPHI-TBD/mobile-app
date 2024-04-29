import { ViewStyle, TextStyle } from 'react-native';

const styles: { [key: string]: ViewStyle | TextStyle } = {
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    header: {
        marginTop:50,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        // use to find border
        // backgroundColor: 'red'
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    info: {
        marginLeft: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    username: {
        color: 'black',
        fontSize: 18,
    },
    tabContent: {
        flex: 1
    }
};

export default styles;