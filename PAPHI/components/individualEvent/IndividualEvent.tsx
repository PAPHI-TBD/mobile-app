import React from 'react';
import styles from './IndividualEvent.style';
import { View, Text, StyleSheet, ScrollView, Button, TouchableOpacity } from 'react-native';
import EventCreator from '../event/eventPost/eventCreator/eventCreator';
import ImagePost from '../event/eventPost/imagePost/imagePost';
import Attendees from '../event/eventPost/attendees/attendees';
import Icons from '../event/eventPost/icons/icons';
import CommentSection from '../feed/eventDiscovery/commentSection/CommentSection';
import { useNavigation, useRoute } from '@react-navigation/native';
import { EventPostProps } from '../event/eventPost/eventPost';
import Info from '../event/eventPost/information/info';
import Categories from '../event/eventPost/categories/categories';
import { LinearGradient } from 'expo-linear-gradient';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


const IndividualEvent: React.FC = ({}) => {
    const navigation = useNavigation()
    const route = useRoute();

    const { eventData } = route.params as { eventData: EventPostProps };

    return (
        <View style={{flex: 1}}>
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
                        <Text style={styles.price}>{eventData.price}</Text>
                    </View>
                    <Categories categoriesList={eventData.labels} />
                    <Info date={eventData.date} time={eventData.time} location={eventData.location} />
                    <EventCreator profile={eventData.profile}></EventCreator>
                    <ImagePost img={eventData.image} />
                    <Text style={styles.description}>{eventData.description}</Text>
                    <View style={styles.bottom}>
                        <Attendees number={eventData.attendees.number} profileList={eventData.attendees.profiles} />
                        <Icons />
                    </View>
                </View>
                <CommentSection></CommentSection>
            </LinearGradient>
        </View>
    );
};

export default IndividualEvent;