import React, { useState } from 'react';
import { View, Text, Animated, TouchableOpacity } from 'react-native';
import { PanGestureHandler, State, PanGestureHandlerStateChangeEvent } from 'react-native-gesture-handler';
import styles from './eventPost.style';
import Categories from './categories/categories';
import Info from './information/info';
import EventCreator from './eventCreator/eventCreator';
import ImagePost from './imagePost/imagePost';
import Attendees from './attendees/attendees';
import Icons from './icons/icons';
import { useNavigation, ParamListBase,  NavigationProp } from '@react-navigation/native';
import { AttendeesType, EventPostItem } from '../event';

// export interface EventPostItem {
//     name: string;
//     price: number;
//     labels: {
//         name: string;
//         color: string;
//     }[];
//     profile: {
//         name: string;
//         img: string;
//     };
//     description: string;
//     date: string;
//     time: string;
//     location: string;
//     image: string;
//     attendees: {
//         number: number;
//         profiles: {
//             username: string;
//             img: string;
//         }[];
//     };
//     saved: boolean;
// }

interface EventPostProps {
    eventPostData: EventPostItem[] | any[];
    currentPostIndex: number;
    attendees: AttendeesType;
    setCurrentPostIndex: (index: number) => void;
    // navigateToAttendeesPage: () => void;
    setEventPostData: React.Dispatch<React.SetStateAction<EventPostItem[] | any[]>>;
}

const EventPost: React.FC<EventPostProps> = ({ eventPostData, currentPostIndex, attendees, setCurrentPostIndex, setEventPostData }) => {
    const navigation: NavigationProp<ParamListBase> = useNavigation();

    const currentPost = eventPostData[currentPostIndex];
    console.log(`eventPostData: ${eventPostData}`);
    console.log(`currentPost: ${currentPost}`);
    const translateX = new Animated.Value(0);
    const translateY = new Animated.Value(0);

    const handleGesture = Animated.event(
        [{ nativeEvent: { translationX: translateX, translationY: translateY } }],
        { useNativeDriver: true }
    );

    const handleStateChange = ({ nativeEvent }: PanGestureHandlerStateChangeEvent) => {
        if (nativeEvent.state === State.END) {
            if (nativeEvent.translationX < -50) {
                // Swiped left
                if (currentPostIndex < eventPostData.length - 1) {
                    setCurrentPostIndex(currentPostIndex + 1);
                }
            } else if (nativeEvent.translationY < -50) {
                // Swiped up
                saveEvent();
            }
            Animated.spring(translateX, {
                toValue: 0,
                useNativeDriver: true,
            }).start();
            Animated.spring(translateY, {
                toValue: 0,
                useNativeDriver: true,
            }).start();
        }
    };

    const saveEvent = () => {
        // implement save event
    };

    const eventClicked = () => {
        try {
            navigation.navigate("IndividualEvent", { eventData: currentPost });
            console.log('event clicked');
        } catch (error) {
            console.error(error);
        }
        
    };
    
    const profile = {
        name: 'MATT DIZON',
        img: require('../../../assets/bio/bio-pic.png'),
    };

    const labels = [
        {
            name: 'public',
            color: '#9CFE50',
        }, 
        {
            name: 'concert',
            color: '#ECDC4D',
        }, 
        {
            name: 'id required',
            color: '#4DECD9',
        },
    ];


    return (

        <PanGestureHandler
            onGestureEvent={handleGesture}
            onHandlerStateChange={handleStateChange}
        >
            <Animated.View style={[styles.container, styles.shadowProp, { transform: [{ translateX }, { translateY }] }]}>
                <TouchableOpacity onPress={eventClicked}>
                    <View>
                        <View style={styles.firstRow}>
                            <Text style={styles.title}>{currentPost.name}</Text>
                            {/* <Text style={styles.price}>${currentPost.price}</Text> */}
                            <Text style={styles.price}>$35</Text>
                        </View>
                        {/* <Categories categoriesList={currentPost.labels} /> */}
                        <Categories categoriesList={labels} />
                        {/* <Info date={currentPost.date} time={currentPost.time} location={currentPost.location} /> */}
                        <Info date={currentPost.date} time={"sample time"} location={currentPost.location.city} />

                        {/* <EventCreator profile={currentPost.profile} /> */}
                        <EventCreator profile={profile} />

                        {/* <Text style={{fontSize: 18}}>{currentPost.description}</Text> */}
                        <Text style={{fontSize: 18}}>sample description !!!!!!</Text>

                        {/* <ImagePost img={currentPost.image} /> */}
                        <ImagePost img={require('../../../assets/event/sampleEvent.jpg')} />

                        <View style={styles.bottom}>
                            {/* <Attendees number={currentPost.attendees.number ? currentPost.attendees.number : 100} profileList={currentPost.attendees.profiles ? currentPost.attendees.profiles : attendees.profiles} /> */}
                            <Attendees number={attendees.number} profileList={attendees.profiles} />
                            <Icons />
                        </View>
                    </View>
                </TouchableOpacity>
            </Animated.View>
        </PanGestureHandler>
        

    );
};

export default EventPost;
