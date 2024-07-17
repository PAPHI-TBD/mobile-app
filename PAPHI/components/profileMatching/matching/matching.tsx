import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import styles from './matching.style';
import ProfileCardFront from './profileCard/profileCardFront/profileCardFront';
import ProfileCardBack from './profileCard/profileCardBack/profileCardBack';
import CardFlip from 'react-native-card-flip';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import FlipCard from 'react-native-card-flip';

export default function Matching() {

    // dummy data 
    const prompts = [
        'Whats your favorite color?',
        'What is an ideal hangout for you?',
        'What is your favorite music genre?',
        'Custom Prompt...',
    ]
    
    const cardData = [
        { name: 'JOHN DOE', 
        username: '@queenoftears', 
        bio: 'I’m a passionate adventurer who loves traveling to new places and exploring different cultures', 
        profileTags: [
            {name: 'Music'},
            {name: 'Architecture'},
            {name: 'Movies'},
            {name: 'Photography'},
            {name: 'Graphic Design'},
        ],
        events: ['Twice, Anime Expo']},
        { name: 'JANE SMITH', 
        username: '@wanderlust', 
        bio: 'A travel enthusiast and food lover, always looking for the next adventure.', 
        profileTags: [
            {name: 'Music'},
            {name: 'Boba'},
            {name: 'Painting'},
            {name: 'Photography'},
            {name: 'Graphic Design'},
        ],
        events: ['Twice, Anime']},
        { name: 'JOHN DOE', 
        username: '@queenoftears', 
        bio: 'I’m a passionate adventurer who loves traveling to new places and exploring different cultures', 
        profileTags: [
            {name: 'Music'},
            {name: 'Architecture'},
            {name: 'Movies'},
            {name: 'Photography'},
            {name: 'Graphic Design'},
        ],
        events: ['Twice, Anime Expo']},
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [showBack, setShowBack] = useState(false);

    const handleNextCard = () => {
        if (currentIndex < cardData.length) {
            setCurrentIndex(currentIndex + 1);
            setShowBack(false);
        }
    };

    const handlePreviousCard = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setShowBack(false);
        }
    };

    const toggleCardView = () => {
        setShowBack(!showBack);
    };

    return (

        <View style={styles.container}>
            <View style={styles.tabsContainer}>
                <View style={styles.tabs}>
                    <TouchableOpacity>Matching</TouchableOpacity>
                    <TouchableOpacity>Match Requests</TouchableOpacity>
                </View>
            </View>
            {/* <TouchableOpacity onPress={() => setSelectedTab('photos')}>
            </TouchableOpacity> */}
            {/* <TouchableOpacity onPress={() => setSelectedTab('events')}>
                </TouchableOpacity> */}
            <View style={styles.top}>
                <TouchableOpacity onPress={handlePreviousCard}>
                    <FontAwesomeIcon icon={faChevronLeft} size={20} color="black"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNextCard}>
                    <FontAwesomeIcon icon={faChevronRight} size={20} color="black" />
                </TouchableOpacity>
            </View>
            {showBack ? (
                <ProfileCardBack prompts={prompts} onPress={toggleCardView}/>
            ) : (
                currentIndex < cardData.length ? (
                    <ProfileCardFront
                        name={cardData[currentIndex].name}
                        username={cardData[currentIndex].username}
                        bio={cardData[currentIndex].bio}
                        profileTags={cardData[currentIndex].profileTags}
                        events={cardData[currentIndex].events}
                        onPress={toggleCardView}
                    />
                ) : (
                    <View style={styles.maxLimitCard}>
                        <Text style={styles.maxLimitText}>YOU HAVE REACHED THE MAXIMUM AMOUNT OF MATCHES / MATCH SUGGESTIONS FOR TODAY! {'\n\n'} COME BACK TOMORROW FOR MORE! :)</Text>
                    </View>
                )
            )}
        </View>
    );
}
