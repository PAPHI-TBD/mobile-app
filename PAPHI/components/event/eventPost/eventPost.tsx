import React, { useState } from 'react';
import { View, Text, Animated } from 'react-native';
import { PanGestureHandler, State, PanGestureHandlerStateChangeEvent } from 'react-native-gesture-handler';
import styles from './eventPost.style';
import Categories from './categories/categories';
import Info from './information/info';
import EventCreator from './eventCreator/eventCreator';
import ImagePost from './imagePost/imagePost';
import Attendees from './attendees/attendees';
import Icons from './icons/icons';

interface EventPostProps {
    name: string;
    price: number;
    labels: {
        name: string;
        color: string;
    }[];
    profile: {
        name: string;
        img: string;
    };
    description: string;
    date: string;
    time: string;
    location: string;
    image: string;
    attendees: {
        number: number;
        profiles: {
            username: string;
            img: string;
        }[];
    };
    saved: boolean;
}

// interface EventPostProps {
//     // add props
//     eventsFeed: EventPostItem[];
// }

const EventPost: React.FC = ({ }) => {

    const [eventPostData, setEventPostData] = useState<EventPostProps[]>([
        {
            name: 'ohgeesy1',
            price: 35,
            labels: [
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
            ],
            profile: {
                name: 'MATT DIZON',
                img: require('../../../assets/bio/bio-pic.png'),
            },
            description: 'we getting fucked up',
            date: 'May 10th',
            time: '9:30PM to 12:00AM',
            location: 'YiFang',
            image: require('../../../assets/event/sampleEvent.jpg'),
            attendees: {
                number: 100,
                profiles: [
                    {
                        username: 'John Doe',
                        img: require('../../../assets/bio/bio-pic.png')
                    },
                    {
                        username: 'John Doe',
                        img: require('../../../assets/bio/bio-pic.png')
                    },
                    {
                        username: 'John Doe',
                        img: require('../../../assets/bio/bio-pic.png')
                    },
                    {
                        username: 'John Doe',
                        img: require('../../../assets/bio/bio-pic.png')
                    },
                    {
                        username: 'John Doe',
                        img: require('../../../assets/bio/bio-pic.png')
                    },
                ],
            },
            saved: false,
        },
        {
            name: 'ohgeesy2',
            price: 35,
            labels: [
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
            ],
            profile: {
                name: 'MATT DIZON',
                img: require('../../../assets/bio/bio-pic.png'),
            },
            description: 'we getting fucked up',
            date: 'May 10th',
            time: '9:30PM to 12:00AM',
            location: 'YiFang',
            image: require('../../../assets/event/sampleEvent.jpg'),
            attendees: {
                number: 100,
                profiles: [
                    {
                        username: 'John Doe',
                        img: require('../../../assets/bio/bio-pic.png')
                    },
                    {
                        username: 'John Doe',
                        img: require('../../../assets/bio/bio-pic.png')
                    },
                    {
                        username: 'John Doe',
                        img: require('../../../assets/bio/bio-pic.png')
                    },
                    {
                        username: 'John Doe',
                        img: require('../../../assets/bio/bio-pic.png')
                    },
                    {
                        username: 'John Doe',
                        img: require('../../../assets/bio/bio-pic.png')
                    },
                ],
            },
            saved: false,
        },
        {
            name: 'ohgeesy3',
            price: 35,
            labels: [
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
            ],
            profile: {
                name: 'MATT DIZON',
                img: require('../../../assets/bio/bio-pic.png'),
            },
            description: 'we getting fucked up',
            date: 'May 10th',
            time: '9:30PM to 12:00AM',
            location: 'YiFang',
            image: require('../../../assets/event/sampleEvent.jpg'),
            attendees: {
                number: 100,
                profiles: [
                    {
                        username: 'John Doe',
                        img: require('../../../assets/bio/bio-pic.png')
                    },
                    {
                        username: 'John Doe',
                        img: require('../../../assets/bio/bio-pic.png')
                    },
                    {
                        username: 'John Doe',
                        img: require('../../../assets/bio/bio-pic.png')
                    },
                    {
                        username: 'John Doe',
                        img: require('../../../assets/bio/bio-pic.png')
                    },
                    {
                        username: 'John Doe',
                        img: require('../../../assets/bio/bio-pic.png')
                    },
                ],
            },
            saved: false,
        },
    ]);

    const eventClicked = () => {
        // add logic for when event is clicked
    };

    const [currentIndex, setCurrentIndex] = useState(0);
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
                if (currentIndex < eventPostData.length - 1) {
                    setCurrentIndex(currentIndex + 1);
                }
            // } else if (nativeEvent.translationX > 50) {
            //     // Swiped right
            //     if (currentIndex > 0) {
            //         setCurrentIndex(currentIndex - 1);
            //     }
            } else if (nativeEvent.translationY < -50) {
                // Swiped up
                saveEvent();
            }
            // } else if (nativeEvent.translationY > 50) {
            //     // Swiped down
            //     saveEvent();
            // }
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
        setEventPostData(prevData => {
            const newData = [...prevData];
            newData[currentIndex].saved = !newData[currentIndex].saved;
            if (newData[currentIndex].saved) {
                console.log('Event Saved', 'You have saved this event.');
            } else {
                console.log('Event Unsaved', 'You have unsaved this event.');
            }
            return newData;
        });
    };

    const currentPost = eventPostData[currentIndex];
    return (

        <PanGestureHandler
            onGestureEvent={handleGesture}
            onHandlerStateChange={handleStateChange}
        >
            <Animated.View style={[styles.container, styles.shadowProp, { transform: [{ translateX }, { translateY }] }]}>
                <View>
                    <View style={styles.firstRow}>
                        <Text style={styles.title}>{currentPost.name}</Text>
                        <Text style={styles.price}>${currentPost.price}</Text>
                    </View>
                    <Categories categoriesList={currentPost.labels} />
                    <Info date={currentPost.date} time={currentPost.time} location={currentPost.location} />
                    <EventCreator profile={currentPost.profile} />
                    <Text style={{fontSize: 18}}>{currentPost.description}</Text>
                    <ImagePost img={currentPost.image} />
                    <View style={styles.bottom}>
                        <Attendees number={currentPost.attendees.number} profileList={currentPost.attendees.profiles} />
                        <Icons />
                    </View>
                </View>
            </Animated.View>
        </PanGestureHandler>
        

    );
};

export default EventPost;
