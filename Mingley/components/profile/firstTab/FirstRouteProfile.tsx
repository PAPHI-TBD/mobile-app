import { View, Text, ScrollView } from 'react-native';
import styles from './FirstRouteProfile.style';

// dummy data
const topics = [
    { id: 1, title: 'Topic' },
    { id: 2, title: 'Topic' },
    { id: 3, title: 'Topic' },
    { id: 4, title: 'Topic' },
    { id: 5, title: 'Topic' },
];

// Define the content for the first tab
const FirstRoute = () => (
    
    <View style={styles.tabContent}>
        <View style={styles.photoContainer}>
            <View style={styles.headingContainer}>
                <Text style ={styles.headerText}>Hot Topics</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.topicContainer}>
                    {topics.map(topic => (
                        // <UserPhoto/>
                        <Text>hi</Text>
                    ))}
                </View>
            </ScrollView>
        </View>
    </View>
);

export default FirstRoute;