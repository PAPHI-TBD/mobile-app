import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import styles from './feed.style';
import FriendEventSlider from './friendEventSlider/friendEventSlider';
import EventPost from './eventPost/eventPost';


export default function Feed() {

    const friendEventSlider = [{id: '', img: ''}, {id: '', img: ''}, {id: '', img: ''}, {id: '', img: ''}, {id: '', img: ''}, {id: '', img: ''}, {id: '', img: ''}, {id: '', img: ''}]

    const friendEventPosts = [
        {
            id: '1',
            title: 'OhGeesy',
            rating: 3,
            date: 'Fri, July 7',
            attendees: [{ id: '1', img: require('../../assets/bio/bio-pic.png') }, { id: '2', img: require('../../assets/bio/bio-pic.png') }, { id: '3', img: require('../../assets/bio/bio-pic.png') }, { id: '4', img: require('../../assets/bio/bio-pic.png') }, { id: '5', img: require('../../assets/bio/bio-pic.png') }, { id: '6', img: require('../../assets/bio/bio-pic.png') }],
            description: 'event description',
            comments: [
                {id: '1', name: 'Matt Dizon', text: 'This event sucked', img: require('../../assets/bio/bio-pic.png'), likes: 0, liked: false, comments: 0, timeSent: '2h'},
                {id: '2', name: 'Matt Dizon', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', img: require('../../assets/bio/bio-pic.png'), likes: 32, liked: false, comments: 6, timeSent: '3d'},
                {id: '3', name: 'Matt Dizon', text: 'This event sucked', img: require('../../assets/bio/bio-pic.png'), likes: 0, liked: false, comments: 0, timeSent: '2h'},
                {id: '4', name: 'Matt Dizon', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', img: require('../../assets/bio/bio-pic.png'), likes: 32, liked: false, comments: 6, timeSent: '3d'},
                {id: '5', name: 'Matt Dizon', text: 'This event sucked', img: require('../../assets/bio/bio-pic.png'), likes: 0, liked: false, comments: 0, timeSent: '2h'},
                {id: '6', name: 'Matt Dizon', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', img: require('../../assets/bio/bio-pic.png'), likes: 32, liked: false, comments: 6, timeSent: '3d'},

            ],
            address: '2123 New Avenue',
            image: require('../../assets/event/sampleEvent.jpg')
        },
        {
            id: '2',
            title: 'OhGeesy 2',
            rating: 4,
            date: 'Fri, July 7',
            attendees: [{ id: '1', img: require('../../assets/bio/bio-pic.png') }, { id: '2', img: require('../../assets/bio/bio-pic.png') }, { id: '3', img: require('../../assets/bio/bio-pic.png') }, { id: '4', img: require('../../assets/bio/bio-pic.png') }, { id: '5', img: require('../../assets/bio/bio-pic.png') }, { id: '6', img: require('../../assets/bio/bio-pic.png') }],
            description: 'event description',
            comments: [
                {id: '1', name: 'Matt Dizon', text: 'This event sucked', img: require('../../assets/bio/bio-pic.png'), likes: 0, liked: false, comments: 0, timeSent: '2h'},
                {id: '2', name: 'Matt Dizon', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', img: require('../../assets/bio/bio-pic.png'), likes: 32, liked: false, comments: 6, timeSent: '3d'},
                {id: '3', name: 'Matt Dizon', text: 'This event sucked', img: require('../../assets/bio/bio-pic.png'), likes: 0, liked: false, comments: 0, timeSent: '2h'},
                {id: '4', name: 'Matt Dizon', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', img: require('../../assets/bio/bio-pic.png'), likes: 32, liked: false, comments: 6, timeSent: '3d'},
                {id: '5', name: 'Matt Dizon', text: 'This event sucked', img: require('../../assets/bio/bio-pic.png'), likes: 0, liked: false, comments: 0, timeSent: '2h'},
                {id: '6', name: 'Matt Dizon', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', img: require('../../assets/bio/bio-pic.png'), likes: 32, liked: false, comments: 6, timeSent: '3d'},

            ],
            address: '2123 New Avenue',
            image: require('../../assets/event/sampleEvent.jpg')
        },
        {
            id: '3',
            title: 'OhGeesy 3',
            rating: 5,
            date: 'Fri, July 7',
            attendees: [{ id: '1', img: require('../../assets/bio/bio-pic.png') }, { id: '2', img: require('../../assets/bio/bio-pic.png') }, { id: '3', img: require('../../assets/bio/bio-pic.png') }, { id: '4', img: require('../../assets/bio/bio-pic.png') }, { id: '5', img: require('../../assets/bio/bio-pic.png') }, { id: '6', img: require('../../assets/bio/bio-pic.png') }],
            description: 'event description',
            comments: [
                {id: '1', name: 'Matt Dizon', text: 'This event sucked', img: require('../../assets/bio/bio-pic.png'), likes: 0, liked: false, comments: 0, timeSent: '2h'},
                {id: '2', name: 'Matt Dizon', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', img: require('../../assets/bio/bio-pic.png'), likes: 32, liked: false, comments: 6, timeSent: '3d'},
                {id: '3', name: 'Matt Dizon', text: 'This event sucked', img: require('../../assets/bio/bio-pic.png'), likes: 0, liked: false, comments: 0, timeSent: '2h'},
                {id: '4', name: 'Matt Dizon', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', img: require('../../assets/bio/bio-pic.png'), likes: 32, liked: false, comments: 6, timeSent: '3d'},
                {id: '5', name: 'Matt Dizon', text: 'This event sucked', img: require('../../assets/bio/bio-pic.png'), likes: 0, liked: false, comments: 0, timeSent: '2h'},
                {id: '6', name: 'Matt Dizon', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', img: require('../../assets/bio/bio-pic.png'), likes: 32, liked: false, comments: 6, timeSent: '3d'},

            ],
            address: '2123 New Avenue',
            image: require('../../assets/event/sampleEvent.jpg')
        }
        // Add more events as needed
    ];    

    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={['#8BC0C8', '#E1CAD8']}
                locations={[0, 1]}
                style={styles.feedPageContainer}
            >
                {/* header */}
                <View style={{ marginTop: '15%' }}>
                    <Text style={{ textTransform: 'uppercase', color: 'white', fontSize: 16, fontWeight: '800', marginHorizontal: 'auto' }}>friend feed</Text>
                    <TouchableOpacity style={styles.bellIcon}>
                        <FontAwesomeIcon icon={faBell} size={23} color='white'/>
                        <View style={styles.notiTextCircle}>
                            <Text style={styles.notiText}>3</Text>
                        </View>
                        
                    </TouchableOpacity>
                </View>

                {/* Slider */}
                <FriendEventSlider eventList={[{id: '', img: ''}, {id: '', img: ''}, {id: '', img: ''}, {id: '', img: ''}, {id: '', img: ''}, {id: '', img: ''}, {id: '', img: ''}, {id: '', img: ''}]}/>

                {/* Event Posts */}
                <FlatList
                    style={styles.postContainer}
                    data={friendEventPosts}
                    renderItem={({ item }) => <EventPost event={item} />}
                    keyExtractor={(item) => item.id}
                    initialScrollIndex={0}
                    pagingEnabled
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    snapToAlignment="start"
                    decelerationRate="fast"
                />

            </LinearGradient>
        </View>
    );
}