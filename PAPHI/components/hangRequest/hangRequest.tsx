import { View, Text } from 'react-native';
import styles from './hangRequest.style';
import RequestCard from './requestCard/RequestCard';

const feedData = [
    { id: 1, username: 'Jane Doe', desc: 'requested to hang', occupation: 'Real Estate' },
    { id: 2, username: 'Deven Shah', desc: 'matched on 4/15/24', occupation: 'Software Engineer' },
    { id: 3, username: 'Joshua De Chavez', desc: 'Hangout  @1pm 4/20/14', occupation: 'Hobo' },
    { id: 4, username: 'Heba', desc: 'cool', occupation: 'Software Engineer' },
    { id: 5, username: 'Matt Dizon', desc: 'swag', occupation: 'Business Team' },
];

export default function HangRequest() {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Hang Requests</Text>
                <View style={styles.divider}></View>
            </View>
            <View style={styles.requestContainer}>
                {feedData.map(post => (
                    <RequestCard key={post.id} id={post.id} username={post.username} desc={post.desc} occupation={post.occupation} />
                ))}
            </View>
        </View>
    );
}