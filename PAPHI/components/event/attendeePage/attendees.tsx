import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../types'; // Adjust the import path as necessary
// import { RouteProp, useRoute } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './attendees.style';

// type EventPageRouteProp = RouteProp<RootStackParamList, 'EventPage'>;

interface Attendee {
    icon: string;
    username: string;
    tag: {
        color: string;
        text: string;
    };
}


function Attendees() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const attendeesList = [
        {
            icon: '',
            username: 'User Name',
            tag: {
                color: '#38FF06',
                text: 'Friend'
            }
        },
        {
            icon: '',
            username: 'User Name',
            tag: {
                color: '#38FF06',
                text: 'Friend'
            }
        },
        {
            icon: '',
            username: 'User Name',
            tag: {
                color: '#38FF06',
                text: 'Friend'
            }
        },
        {
            icon: '',
            username: 'User Name',
            tag: {
                color: '#38FF06',
                text: 'Friend'
            }
        },
        {
            icon: '',
            username: 'User Name',
            tag: {
                color: '#38FF06',
                text: 'Friend'
            }
        },
        {
            icon: '',
            username: 'User Name',
            tag: {
                color: '#4DECD9',
                text: 'Mutual'
            }
        },
        {
            icon: '',
            username: 'User Name',
            tag: {
                color: '#4DECD9',
                text: 'Mutual'
            }
        },
        {
            icon: '',
            username: 'User Name',
            tag: {
                color: '#4DECD9',
                text: 'Mutual'
            }
        },
        {
            icon: '',
            username: 'User Name',
            tag: {
                color: '#4DECD9',
                text: 'Mutual'
            }
        },
        {
            icon: '',
            username: 'User Name',
            tag: {
                color: '#FFA318',
                text: 'Looking for People'
            }
        },
        {
            icon: '',
            username: 'User Name',
            tag: {
                color: '#FFA318',
                text: 'Looking for People'
            }
        },
        {
            icon: '',
            username: 'User Name',
            tag: {
                color: '#FFA318',
                text: 'Looking for People'
            }
        },
    ]

    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const filteredAttendees = selectedTag ? attendeesList.filter(attendee => attendee.tag.text === selectedTag) : attendeesList;

    const eventPage = () => {
        navigation.goBack();
    };

    // const filterByTag = (tag: string) => {
    //     console.log('filter by', tag);
    // };
    const filterByTag = (tag: string | null) => {
        setSelectedTag(tag);
    };

    const renderAttendee = (attendee: Attendee) => {
        return (
            <View style={styles.attendeeCard}>
                <Image style={styles.userImage} />
                <View style={{ marginVertical: 'auto', marginHorizontal: 20 }}>
                    <Text style={{ fontSize: 14, fontWeight: '800', }}>{attendee.username}</Text>
                    <View style={{ flexDirection: 'row', }}>
                        <View style={[styles.tag, { backgroundColor: attendee.tag.color }]}></View>
                        <Text style={{ color: '#969696', fontSize: 12, fontWeight: '600', marginVertical: 'auto', paddingHorizontal: 5 }}>{attendee.tag.text}</Text>
                    </View>
                    
                </View>
                <View style={styles.inviteButton}>
                    <Text style={styles.inviteButtonText}>Send Invite</Text>
                </View>
            </View>
        );
    };


    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={['#8BC0C8', '#E1CAD8']}
                locations={[0, 1]}
                style={styles.attendeesPageContainer}
            >
                <TouchableOpacity style={[styles.icon, ]} onPress={eventPage}>
                    <FontAwesomeIcon icon={faArrowLeft} size={24} color="black"/>
                </TouchableOpacity>

                <Text style={{ fontSize: 24, fontWeight: '700', left: 'auto', paddingVertical: 5 }}>Attendees</Text>

                <View style={styles.buttonGroupContainer}>
                    {/* () => createPost(sharedPost) */}
                    <TouchableOpacity onPress={() => filterByTag('Friend')}>
                        <View style={[styles.button, selectedTag === 'Friend' && styles.selectedButton]}>
                            <Text style={[styles.buttonText, selectedTag === 'Friend' && styles.selectedButtonText]}>Friends</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => filterByTag('Mutual')}>
                        <View style={[styles.button, selectedTag === 'Mutual' && styles.selectedButton]}>
                            <Text style={[styles.buttonText, selectedTag === 'Mutual' && styles.selectedButtonText]}>Mutuals</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => filterByTag('Looking for People')}>
                        <View style={[styles.button, selectedTag === 'Looking for People' && styles.selectedButton]}>
                            <Text style={[styles.buttonText, selectedTag === 'Looking for People' && styles.selectedButtonText]}>Looking for People</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                    {attendeesList.map(renderAttendee)}
                </ScrollView>

            </LinearGradient>
        </View>
    );
}

export default Attendees;