import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './event.style';
import SearchEvent from './searchEvent/searchEvent';
import EventPost from './eventPost/eventPost';
import Filter from './filter/filter';
import AttendeesPage from './attendeesPage/attendeesPage';

interface EventPostItem {
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

const eventPostData: EventPostItem[] = [
    // Your event post data...
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
            img: require('../../assets/bio/bio-pic.png'),
        },
        description: 'we getting fucked up',
        date: 'May 10th',
        time: '9:30PM to 12:00AM',
        location: 'YiFang',
        image: require('../../assets/event/sampleEvent.jpg'),
        attendees: {
            number: 100,
            profiles: [
                {
                    username: 'John Doe',
                    img: require('../../assets/bio/bio-pic.png')
                },
                {
                    username: 'Jane Doe',
                    img: require('../../assets/bio/bio-pic.png')
                },
                {
                    username: 'Jack Doe',
                    img: require('../../assets/bio/bio-pic.png')
                },
                {
                    username: 'Jill Doe',
                    img: require('../../assets/bio/bio-pic.png')
                },
                {
                    username: 'Jan Doe',
                    img: require('../../assets/bio/bio-pic.png')
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
            img: require('../../assets/bio/bio-pic.png'),
        },
        description: 'we getting fucked up',
        date: 'May 10th',
        time: '9:30PM to 12:00AM',
        location: 'YiFang',
        image: require('../../assets/event/sampleEvent.jpg'),
        attendees: {
            number: 100,
            profiles: [
                {
                    username: 'John Doe',
                    img: require('../../assets/bio/bio-pic.png')
                },
                {
                    username: 'John Doe',
                    img: require('../../assets/bio/bio-pic.png')
                },
                {
                    username: 'John Doe',
                    img: require('../../assets/bio/bio-pic.png')
                },
                {
                    username: 'John Doe',
                    img: require('../../assets/bio/bio-pic.png')
                },
                {
                    username: 'John Doe',
                    img: require('../../assets/bio/bio-pic.png')
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
            img: require('../../assets/bio/bio-pic.png'),
        },
        description: 'we getting fucked up',
        date: 'May 10th',
        time: '9:30PM to 12:00AM',
        location: 'YiFang',
        image: require('../../assets/event/sampleEvent.jpg'),
        attendees: {
            number: 100,
            profiles: [
                {
                    username: 'John Doe',
                    img: require('../../assets/bio/bio-pic.png')
                },
                {
                    username: 'David',
                    img: require('../../assets/bio/bio-pic.png')
                },
                {
                    username: 'Jane Doe',
                    img: require('../../assets/bio/bio-pic.png')
                },
                {
                    username: 'Mary Doe',
                    img: require('../../assets/bio/bio-pic.png')
                },
                {
                    username: 'John Doe',
                    img: require('../../assets/bio/bio-pic.png')
                },
            ],
        },
        saved: false,
    },
];

export default function Event({ }) {

    const [data, setData] = useState<EventPostItem[]>(eventPostData);
    const [isMainSection, setIsMainSection] = useState(false);
    const [currentPostIndex, setCurrentPostIndex] = useState(0);

    const currentPost = data[currentPostIndex];

    const navigateToAttendeesPage = () => {
        setIsMainSection(false);
    };

    const navigateToMainSection = () => {
        setIsMainSection(true);
    };

    return (

        // <View style={{flex: 1}}>
        //     <LinearGradient
        //     colors={['#8BC0C8', '#E9CBD9']}
        //     locations={[0, 0.69]}
        //     style={styles.eventPageContainer}
        //     >
        //         <Text style={styles.header}>EVENT DISCOVERY</Text>
        //         <SearchEvent />
        //         <Filter />
        //         <EventPost />
        //     </LinearGradient>
        // </View>
        <View style={{flex: 1}}>
            {isMainSection ? (
                <View style={{flex: 1}}>
                    <LinearGradient
                    colors={['#8BC0C8', '#E9CBD9']}
                    locations={[0, 0.69]}
                    style={styles.eventPageContainer}
                    >
                        <Text style={styles.header}>EVENT DISCOVERY</Text>
                        <SearchEvent />
                        <Filter />
                        <EventPost 
                            eventPostData={eventPostData} 
                            currentPostIndex={currentPostIndex} 
                            setCurrentPostIndex={setCurrentPostIndex} 
                            navigateToAttendeesPage={navigateToAttendeesPage} 
                            setEventPostData={setData}
                        />
                    </LinearGradient>
                </View>
            ) : (
                <View style={styles.attendeesPage}>
                    <AttendeesPage 
                        profileList={currentPost.attendees.profiles} 
                        navigateToMainSection={navigateToMainSection} 
                    />
                </View>
            )
        
            }
        </View>

        // <View style={styles.attendeesPage}>
        //     <AttendeesPage profileList={currentPost.attendees.profiles} />
        // </View>
        
    );

}
