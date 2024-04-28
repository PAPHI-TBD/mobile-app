import { View, Text } from 'react-native';
import styles from './SecondRouteProfile.style';


// Define the content for the first tab
const SecondRoute = () => (
    <View style={styles.tabContent}>
        <View style={styles.headingContainer}>
            <Text style ={styles.headerText}>Bio/Description</Text>
        </View>
        <View style={styles.userInfoContainer}>
            <Text style={styles.subHeader}>
                Location
            </Text>
            <Text style={styles.informationText}>
                information
            </Text>
            <Text style={styles.subHeader}>
                Occupation
            </Text>
            <Text style={styles.informationText}>
                information
            </Text>
            <Text style={styles.subHeader}>
                Interests
            </Text>
            <Text style={styles.informationText}>
                information
            </Text>
            <Text style={styles.subHeader}>
                Hobbies
            </Text>
            <Text style={styles.informationText}>
                information
            </Text>
            <Text style={styles.subHeader}>
                Events
            </Text>
            <Text style={styles.informationText}>
                information
            </Text>
        </View>
    </View>
);

export default SecondRoute;