import { ViewStyle, TextStyle } from 'react-native';

const styles: { [key: string]: ViewStyle | TextStyle } = {
    container: {
        backgroundColor: '#fff',
    },
    header: {
        marginTop:50,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
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
        color: '#999',
        fontSize: 18,
    },
    stats: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },
    stat: {
        flex: 1,
        alignItems: 'center',
    },
    statLabel: {
        color: '#999',
        fontSize: 14,
    },
    statValue: {
        fontSize: 18,
    },
    bio: {
        padding: 20,
        fontSize: 16,
        color: '#333',
    },
};

export default styles;