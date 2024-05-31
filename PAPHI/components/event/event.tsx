import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './event.style';
import SearchEvent from './searchEvent/searchEvent';
import EventPost from './eventPost/eventPost';
import Filter from './filter/filter';


export interface EventPostItem {
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

export interface AttendeesType {
    number: number;
    profiles: {
        username: string;
        img: string;
    }[];
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

const attendees: AttendeesType = {
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
};


export default function Event({ }) {

    const [data, setData] = useState<EventPostItem[]>(eventPostData);
    const [currentPostIndex, setCurrentPostIndex] = useState(0);

    const [attendeesData, setAttendeesData] = useState<AttendeesType>(attendees);

    const currentPost = data[currentPostIndex];
    const [savedEventsData, setSavedEventsData] = useState<any[]>([]);
    const [eventSliderData, setEventSliderData] = useState<any[]>([]);
    const [eventDetailsData, setEventDetailsData] = useState<any[]>([]);


    const [profileData, setProfileData] = useState<any>(null);
    const username = 'josh'; // Assuming username is known
    const tag = 'hot_topics';
    const eventId = 'ce022957-4f2f-484f-8ccb-1805260ed967';

    useEffect(() => {
        fetchEventSliderData(tag, setEventSliderData, setCurrentPostIndex);
    }, [tag]);

    useEffect(() => {
        saveEventToProfile(username, eventId, setSavedEventsData);
    }, [eventId]);

    
    const filterList = [
        { name: 'Trending', tag: 'trending' },
        { name: 'Hot Topics', tag: 'hot_topics' },
        { name: 'Concert', tag: 'concert' },
        { name: 'Party', tag: 'party' },
        { name: 'Sports', tag: 'sports' },
        { name: 'Art', tag: 'art' },
        { name: 'Movies', tag: 'movies' },
    ];

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const cachedProfileData = localStorage.getItem('cachedProfileData');
                // const cachedSavedEventsData = localStorage.getItem('cachedSavedEventsData');
                if (cachedProfileData) {
                    console.log('Profile data retrieved from cache:', JSON.parse(cachedProfileData));
                    // console.log('saved events data from cache: ', JSON.parse(cachedSavedEventsData));
                    setProfileData(JSON.parse(cachedProfileData));
                    // setSavedEventsData([...JSON.parse(cachedSavedEventsData).data.events]);
                } else {
                    console.log('Fetching profile data from API...');
                    const response = await fetch(`https://moxy-api.azurewebsites.net/api/Profile/GetProfile?username=${username}`);
                    if (!response.ok) {
                        throw new Error(`Failed to fetch user data: ${response.statusText}`);
                    }
                    const userData = await response.json();
                    setProfileData(userData);
                    setSavedEventsData([...userData.data.events]);
                    localStorage.setItem('cachedProfileData', JSON.stringify(userData));
                    localStorage.setItem('cachedSavedEventsData', JSON.stringify(userData.data.events));
                    console.log('Profile data fetched from API:', userData);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchProfileData();
    }, [username]);


    const saveEventToProfile = async (eventId: string, username: string, setSavedEventsData: Function) => {
        try {
            const cachedSavedEventsData = localStorage.getItem('cachedSavedEventsData');
            if (cachedSavedEventsData) {
                console.log('saved events data from cache: ', JSON.parse(cachedSavedEventsData));
                setSavedEventsData([...JSON.parse(cachedSavedEventsData)]);
            }
            if (savedEventsData && !savedEventsData.includes(eventId)) {
                // post with azure
                const response = await fetch(`https://moxy-api.azurewebsites.net/api/Profile/AddProfileEvent?username=${username}&eventid=${eventId}`, {
                    method: 'POST',
                });

                // post with local
                // const response = await fetch(`https://localhost:7257/api/Profile/AddProfileEvent?username=${username}&eventid=${eventId}`, {
                //     method: 'POST',
                // });
                if (!response.ok) {
                    throw new Error(`Failed to save event to profile: ${response.statusText}`);
                }
                const savedEvents = await response.json();
                console.log('saved events to profile:', savedEvents);
                setSavedEventsData([...savedEvents.data.events]);
                localStorage.setItem('cachedSavedEventsData', JSON.stringify(savedEvents.data.events));
            } else {
                console.log(eventId, ' has already been saved to profile');
            }
        } catch (error) {
            console.error('error saving event to profile: ', error)
        }
    }


    useEffect(() => {
        // let tag = 'trending'
        const fetchSliderData = async(tag: string) => {
            try {
                // fetching from azure
                const response = await fetch(`https://moxy-api.azurewebsites.net/api/Event/listEventsByTag?tag=${tag}`);

                // fetching from local 
                // const response = await fetch(`https://localhost:7257/api/Event/listEventsByTag?tag=${tag}`);
                const eventData = await response.json()

                console.log('Event slider data fetched from API:', eventData);
                setEventSliderData([...eventData.data.eventIdList]); // Store event slider data in state
                setCurrentPostIndex(0);
            } catch (err) {
                console.log('got an error, it didnt work')
                console.log(err)
            }
        }
        fetchSliderData(tag);
    }, [tag]);

    const fetchEventSliderData = async (tag: string, setEventSliderData: Function, setCurrentPostIndex: Function) => {
        try {
            // fetching from azure
            const response = await fetch(`https://moxy-api.azurewebsites.net/api/Event/listEventsByTag?tag=${tag}`);
    
            // fetching from local 
            // const response = await fetch(`https://localhost:7257/api/Event/listEventsByTag?tag=${tag}`);
            // console.log('Fetching event slider data from API...');
            if (!response.ok) {
                throw new Error(`Failed to fetch event slider data: ${response.statusText}`);
            }
            const eventData = await response.json();
            console.log('Event slider data fetched from API:', eventData);
            setEventSliderData([...eventData.data.eventIdList]); // Store event slider data in state
            setCurrentPostIndex(0);
        } catch (error) {
            console.error('Error fetching event slider data:', error);
        }
    };

    useEffect(() => {
        const fetchEventData = async() => {
            if (eventSliderData) {

                try {
                    console.log(eventSliderData)
                    // const eventDetails = await Promise.all(eventSliderData.map(eventid => {
                    //     console.log(eventid)
    
                    //     fetch(`https://localhost:7257/api/Event/GetEvent?eventid=${eventid}`)
                    //         .then(response => {
                    //             if (!response.ok) {
                    //                 throw new Error(`Failed to fetch event data: ${response.statusText}`);
                    //             }
                    //             return response.json();
                    //     })
                    // }));
                    let arr = [];
                    for (let i = 0; i < eventSliderData.length; i++) {
                        console.log(eventSliderData[i]);
                        // fetch from azure api
                        const response = await fetch(`https://moxy-api.azurewebsites.net/api/Event/GetEvent?eventid=${eventSliderData[i]}`)
                        // fetch from local
                        // const response = await fetch(`https://localhost:7257/api/Event/GetEvent?eventid=${eventSliderData[i]}`);
                        const data = await response.json();
                        arr.push(data.data);
                    }
                    console.log('Event details data fetched from API:');
                    console.log(arr);
                    setEventDetailsData([...arr]); // Store event details data in state
    
                } catch (err) {
                    console.log('got an error, it didnt work');
                    console.log(err);
                }
            }
        }
        fetchEventData();
    }, [eventSliderData]);

    console.log(eventSliderData);
    console.log(eventDetailsData);

    return (

        <View style={{flex: 1}}>
            <LinearGradient
            colors={['#8BC0C8', '#E9CBD9']}
            locations={[0, 0.69]}
            style={styles.eventPageContainer}
            >
                <Text style={styles.header}>EVENT DISCOVERY</Text>
                <SearchEvent />
                <Filter filterList={filterList} clickEventSlider={(tag) => fetchEventSliderData(tag, setEventSliderData, setCurrentPostIndex)} />
                <EventPost 
                    username={username}
                    eventPostData={eventDetailsData.length === 0 ? eventPostData : eventDetailsData} 
                    // eventPostData={eventPostData}
                    currentPostIndex={currentPostIndex} 
                    attendees={attendeesData}
                    setCurrentPostIndex={setCurrentPostIndex} 
                    setEventPostData={setData}
                    saveEventToProfile={(eventId) => saveEventToProfile(eventId, username, setSavedEventsData)}
                    setSavedEventsData={setSavedEventsData}
                />
            </LinearGradient>
        </View>

        
    );

}
