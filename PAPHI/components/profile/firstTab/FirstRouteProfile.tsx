import { View, Text, ScrollView } from 'react-native';
import styles from './FirstRouteProfile.style';
import PhotosItem from './photosItem/PhotosItem';
import UserPost from './userPosts/UserPost';
// dummy data
const feedData = [
    { id: 1, username: 'Topic', desc: 'description here...', picture: '' },
    { id: 2, username: 'Topic', desc: 'description here...', picture: '' },
    { id: 3, username: 'Topic', desc: 'description here...', picture: '' },
    { id: 4, username: 'Topic', desc: 'description here...', picture: '' },
    { id: 5, username: 'Topic', desc: 'description here...', picture: '' },
];

// Define the content for the first tab
const FirstRoute = () => (
    <View style={styles.tabContent}>
        <View style={styles.photoContainer}>
            <View style={styles.headingContainer}>
                <Text style ={styles.headerText}>Photos</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.topicContainer}>
                    {feedData.map(topic => (
                        <PhotosItem key={topic.id} id={topic.id} username={topic.username} />
                    ))}
                </View>
            </ScrollView>
        </View>
        <View style={styles.userPostContainer}>
            <View style={styles.headingContainer}>
                <Text style ={styles.headerText}>Recent Posts</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Load Posts */}
                {feedData.map(post => (
                    <UserPost key={post.id} id={post.id} username={post.username} desc={post.desc} picture={post.picture} />
                ))}
            </ScrollView>
        </View>
    </View>
);

export default FirstRoute;