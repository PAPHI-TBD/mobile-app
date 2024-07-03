import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image, Modal, Dimensions } from 'react-native';
import styles from './eventPost.style';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import CommentSection from './commentSection/commentSection';
import { PanGestureHandler } from 'react-native-gesture-handler';

interface Attendee {
    id: string;
    img: string;
}

export interface Comment {
    id: string;
    name: string;
    text: string;
    img: string;
    likes: number;
    liked: boolean;
    comments: number;
    timeSent: string;
}

interface FriendEvent {
    id: string;
    title: string;
    rating: number;
    date: string;
    attendees: Attendee[];
    description: string;
    comments: Comment[];
    address: string;
    image: any;
}

interface FriendEventPostProps {
    event: FriendEvent;
}

const EventPost = ({ event }: FriendEventPostProps) => {
    const [showComments, setShowComments] = useState(false);
    const maxAttendeesToShow = 4;
    const attendeesToShow = event.attendees.slice(0, maxAttendeesToShow);

    const handleCommentsToggle = () => {
        console.log('open / close comment section');
        setShowComments(!showComments);
    };

    const handleSwipeDown = (event: any) => {
        if (event.nativeEvent.translationY > 200) {
            setShowComments(false);
        }
    };

    const { height } = Dimensions.get('window');

    return (
        <View style={styles.container}>
            <ImageBackground source={event.image} resizeMode="cover" style={styles.image}>
                {/* header */}
                <LinearGradient
                    colors={['rgba(0, 0, 0, 0.8)', 'rgba(0, 0, 0, 0)']}
                    locations={[0, 1]}
                    style={[styles.overlay, { marginBottom: 'auto' }]}
                >
                    <View style={{ flexDirection: 'row', columnGap: 20 }}>
                        <Text style={styles.title}>{event.title}</Text>
                        <Text style={styles.rating}>{"★".repeat(event.rating)}</Text>
                        <Text style={styles.date}>{event.date}</Text>
                    </View>
                    
                    <View style={styles.attendees}>
                        {attendeesToShow.map(attendee => (
                            <Image key={attendee.id} source={{ uri: attendee.img }} style={styles.attendeeImage} />
                        ))}

                        {(event.attendees.length > maxAttendeesToShow) &&
                            <View style={styles.attendeeCountBubble}>
                                <Text style={styles.attendeeCount}>+{event.attendees.length - maxAttendeesToShow}</Text>
                            </View>
                        }

                        <Text style={{ color: '#C9C9C9', fontSize: 12, marginLeft: 20, marginTop: 'auto' }}>From your friends</Text>
                    </View>
                </LinearGradient>

                {/* footer */}
                <LinearGradient
                    colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.8)']}
                    locations={[0, 1]}
                    style={[styles.overlay, { marginTop: 'auto' }]}
                >
                    <Text style={styles.commentText}>{event.description}</Text>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <TouchableOpacity onPress={handleCommentsToggle}>
                            <Text style={{ color: '#C9C9C9', fontSize: 13, textTransform: 'uppercase', textDecorationLine: 'underline' }}>{event.comments.length} Comments</Text>
                        </TouchableOpacity>
                        
                        <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                            <FontAwesomeIcon style={{ paddingHorizontal: 5 }} icon={faLocationDot} size={16} color='#C9C9C9'/>
                            <Text style={{ color: '#C9C9C9', fontSize: 13, textTransform: 'uppercase' }}>{event.address}</Text>
                        </View>
                    </View>
                    
                </LinearGradient>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showComments}
                    onRequestClose={() => setShowComments(false)}
                >
                    <PanGestureHandler onGestureEvent={handleSwipeDown}>
                        <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0)' }}>
                            <TouchableOpacity style={{ flex: 1 }} onPress={() => setShowComments(false)} />
                            <CommentSection comments={event.comments} disableComments={handleCommentsToggle} />
                        </View>
                    </PanGestureHandler>
                </Modal>

                {/* {showComments && 
                    (<CommentSection comments={event.comments} disableComments={handleCommentsToggle} />)
                } */}
            </ImageBackground>
        </View>
    );
}

export default EventPost;