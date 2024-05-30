import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './event.style';
import SearchEvent from './searchEvent/searchEvent';
import EventPost from './eventPost/eventPost';
import Filter from './filter/filter';
import AttendeesPage from './attendeesPage/attendeesPage';

interface EventSliderData {
    statusCode: number;
    statusMessage: string;
    statusMessageText: string;
    timestamp: string;
    data: {
        eventIdList: string[]
    }
}

interface EventDetails {
    statusCode: number,
    statusMessage: string,
    statusMessageText: string,
    timestamp: string,
    data: {
        name: string,
        location: {
            city: string,
            state: string,
            street: string,
            country: string,
            zipcode: string,
        },
        category: string,
        date: Date,
        eventId: string,
        eventDiscoveryTag: string,
    }
}

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

const fetchEventSliderData = async (tag: string, setEventSliderData: Function) => {
    try {
        console.log('Fetching event slider data from API...');
        const response = await fetch(`https://localhost:7257/api/Event/listEventsByTag?tag=${tag}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch event slider data: ${response.statusText}`);
        }
        const eventData = await response.json();
        console.log('Event slider data fetched from API:', eventData);
        setEventSliderData(eventData);
    } catch (error) {
        console.error('Error fetching event slider data:', error);
    }
};

export default function Event({ }) {

    const [data, setData] = useState<EventPostItem[]>(eventPostData);
    const [currentPostIndex, setCurrentPostIndex] = useState(0);

    // const currentPost = data[currentPostIndex];


    const [profileData, setProfileData] = useState(null);
    const [eventSliderData, setEventSliderData] = useState<EventSliderData | null>(null); // State to store event slider data
    const [eventDetails, setEventDetails] = useState<EventDetails[] | null>(null); // State to store detailed event data
    const username = 'josh'; // Assuming username is known
    const tag = 'hot_topics';

    useEffect(() => {
        fetchEventSliderData(tag, setEventSliderData);
    }, [tag]);

    useEffect(() => {
        const fetchEventSliderData = async (tag: string) => {
            try {
                console.log('Fetching event slider data from API...');
                // fetching from azure
                // const response = await fetch(`https://moxy-api.azurewebsites.net/api/Event/listEventsByTag?tag=${tag}`);

                // fetching from local 
                const response = await fetch(`https://localhost:7257/api/Event/listEventsByTag?tag=${tag}`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch event slider data: ${response.statusText}`);
                }
                const eventData = await response.json();
                console.log('Event slider data fetched from API:', eventData);
                setEventSliderData(eventData); // Store event slider data in state
                setCurrentPostIndex(0);
            } catch (error) {
                console.error('Error fetching event slider data:', error);
            }
        };

        fetchEventSliderData(tag);
    }, [tag]);

    useEffect(() => {
        const fetchEventData = async () => {
            try {
                let cachedEventData = localStorage.getItem('cachedEventData');
                if (cachedEventData) {
                    // Use cached data if available
                    setEventDetails(JSON.parse(cachedEventData));
                    console.log('Event details data retrieved from cache:', JSON.parse(cachedEventData));
                } else if (eventSliderData && eventSliderData.data && eventSliderData.data.eventIdList) {
                    console.log('Fetching event details data from API...');
                    const eventDetails = await Promise.all(eventSliderData.data.eventIdList.map(eventid =>
                        fetch(`https://moxy-api.azurewebsites.net/api/Event/GetEvent?eventid=${eventid}`)
                            .then(response => {
                                if (!response.ok) {
                                    throw new Error(`Failed to fetch event data: ${response.statusText}`);
                                }
                                return response.json();
                            })
                    ));
                    console.log('Event details data fetched from API:', eventDetails);
                    setEventDetails(eventDetails); // Store event details data in state
    
                    // Cache the fetched event data
                    localStorage.setItem('cachedEventData', JSON.stringify(eventDetails));
                    console.log('Event details data cached.');
                } else {
                    console.log('Event slider data is not fully loaded yet.');
                }
            } catch (error) {
                console.error('Error fetching event details data:', error);
            }
        };
    
        fetchEventData();
    }, [eventSliderData]);



    const filterList = [
        { name: 'Trending', tag: 'trending' },
        { name: 'Hot Topics', tag: 'hot_topics' },
        { name: 'Concert', tag: 'concert' },
        { name: 'Party', tag: 'party' },
        { name: 'Sports', tag: 'sports' },
        { name: 'Art', tag: 'art' },
        { name: 'Movies', tag: 'movies' },
    ];

    return (

        <View style={{flex: 1}}>
            <LinearGradient
            colors={['#8BC0C8', '#E9CBD9']}
            locations={[0, 0.69]}
            style={styles.eventPageContainer}
            >
                <Text style={styles.header}>EVENT DISCOVERY</Text>
                <SearchEvent />
                <Filter filterList={filterList} clickEventSlider={() => fetchEventSliderData(tag, setEventSliderData)} />
                <EventPost 
                    eventPostData={eventPostData} 
                    currentPostIndex={currentPostIndex} 
                    setCurrentPostIndex={setCurrentPostIndex} 
                    // navigateToAttendeesPage={navigateToAttendeesPage} 
                    setEventPostData={setData}
                />
            </LinearGradient>
        </View>

        
    );

}
