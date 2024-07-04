import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../types'; // Adjust the import path as necessary
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './attendees.style';


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

    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const eventPage = () => {
        navigation.goBack();
    };


    const toggleTag = (tag: string) => {
        if (selectedTags.includes(tag)) {
            // removes tag (by selecting all other tags) if it is already selected (in list)
            setSelectedTags(selectedTags.filter(t => t !== tag));
        } else {
            // adds tag to list using ... operator
            setSelectedTags([...selectedTags, tag]);
        }
    };

    // filters attendees list based on the selected tags
    // if no tag is selected, show all attendees
    const filteredAttendees = selectedTags.length > 0
        ? attendeesList.filter(attendee => selectedTags.includes(attendee.tag.text))
        : attendeesList;


    const invite = () => {
        // implement inviting
        console.log('invite');
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
                <TouchableOpacity onPress={invite} style={styles.inviteButton}>
                    {/* <View style={styles.inviteButton}> */}
                        <Text style={styles.inviteButtonText}>Send Invite</Text>
                    {/* </View> */}
                </TouchableOpacity>
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
                    <TouchableOpacity onPress={() => toggleTag('Friend')}>
                        <View style={[styles.button, selectedTags.includes('Friend') && styles.selectedButton]}>
                            <Text style={[styles.buttonText, selectedTags.includes('Friend') && styles.selectedButtonText]}>Friends</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => toggleTag('Mutual')}>
                        <View style={[styles.button, selectedTags.includes('Mutual') && styles.selectedButton]}>
                            <Text style={[styles.buttonText, selectedTags.includes('Mutual') && styles.selectedButtonText]}>Mutuals</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => toggleTag('Looking for People')}>
                        <View style={[styles.button, selectedTags.includes('Looking for People') && styles.selectedButton]}>
                            <Text style={[styles.buttonText, selectedTags.includes('Looking for People') && styles.selectedButtonText]}>Looking for People</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                    {filteredAttendees.map(renderAttendee)}
                </ScrollView>

            </LinearGradient>
        </View>
    );
}

export default Attendees;