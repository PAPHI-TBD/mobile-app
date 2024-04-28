import { View, Text } from 'react-native';
import styles from './SecondRouteProfile.style';


// Define the content for the first tab
const SecondRoute = () => (
    <View style={styles.tabContent}>
        <Text style={styles.tabText}>Content for the second tab</Text>
    </View>
);

export default SecondRoute;