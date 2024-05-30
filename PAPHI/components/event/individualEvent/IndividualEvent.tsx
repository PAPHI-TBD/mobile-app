import React, { useState } from 'react';
import styles from './IndividualEvent.style';
import { View, Text,TouchableOpacity } from 'react-native';
import EventCreator from '../eventPost/eventCreator/eventCreator';
import ImagePost from '../eventPost/imagePost/imagePost';
import Attendees from '../eventPost/attendees/attendees';
import Icons from '../eventPost/icons/icons';
import CommentSection from '../../feed/eventDiscovery/commentSection/CommentSection';
import { useNavigation, useRoute } from '@react-navigation/native';
import { EventPostItem, AttendeesType } from '../../event/event';
import Info from '../eventPost/information/info';
import Categories from '../eventPost/categories/categories';
import { LinearGradient } from 'expo-linear-gradient';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import AttendeesPage from '../attendeesPage/attendeesPage';


const IndividualEvent: React.FC = ({}) => {
    const navigation = useNavigation()
    const route = useRoute();

    const { eventData, categories, profile, attendeesList } = route.params as { eventData: any, categories: [], profile: any, attendeesList: AttendeesType };
    
    const [isMainSection, setIsMainSection] = useState(true);

    const navigateToAttendeesPage = () => {
        setIsMainSection(false);
    };

    const navigateToMainSection = () => {
        setIsMainSection(true);
    };

    return (
        <View style={{flex: 1}}>
            {isMainSection ? (
                <LinearGradient
                colors={['#8BC0C8', '#E9CBD9']}
                locations={[0, 0.69]}
                style={styles.container}
                >
                    <View style={styles.individualEventContainer}>
                    <TouchableOpacity style={{ paddingBottom: 8 }}onPress={ () => navigation.goBack()}>
                        <FontAwesomeIcon icon={faAngleLeft} size={20} />
                    </TouchableOpacity>
                        <View style={styles.firstRow}>
                            <Text style={styles.title}>{eventData.name}</Text>
                            {/* <Text style={styles.price}>${eventData.price}</Text> */}
                            <Text style={styles.price}>$35</Text>
                        </View>
                        {/* <Categories categoriesList={currentPost.labels} /> */}
                        <Categories categoriesList={categories} />

                        {/* <Info date={eventData.date} time={eventData.time} location={eventData.location} /> */}
                        <Info date={eventData.date} time={"sample time"} location={eventData.location.city} />
                        
                        {/* <EventCreator profile={currentPost.profile} /> */}
                        <EventCreator profile={profile} />
                        
                        {/* <ImagePost img={currentPost.image} /> */}
                        <ImagePost img={require('../../../assets/event/sampleEvent.jpg')} />

                        {/* <Text style={styles.description}>{eventData.description}</Text> */}
                        <Text style={styles.description}>sample description !!!!!!</Text>

                        <TouchableOpacity onPress={navigateToAttendeesPage}>
                            <View style={styles.bottom}>
                                {/* <Attendees number={eventData.attendees.number} profileList={eventData.attendees.profiles} /> */}
                                <Attendees number={attendeesList.number} profileList={attendeesList.profiles} />
                                <Icons />
                            </View>
                        </TouchableOpacity>
                        
                    </View>
                    <CommentSection></CommentSection>
                </LinearGradient>
            ) : (
                <View style={styles.attendeesPage}>
                    <AttendeesPage 
                        // profileList={eventData.attendees.profiles} 
                        profileList={attendeesList.profiles}
                        navigateToMainSection={navigateToMainSection} 
                    />
                </View>
            )

            }

            
        </View>
    );
};

export default IndividualEvent;