import React, { useState, useEffect } from 'react';
import { View, FlatList, useWindowDimensions, TouchableOpacity, Animated, StatusBar } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types'; // Adjust the import path as necessary
import { RouteProp, useRoute } from '@react-navigation/native';
import styles from './matching.style';
import MatchingRequestCard from './matchRequest/matchRequest';
import { User } from './matchRequest/matchRequest';


export default function Match() {
    const layout = useWindowDimensions();
    const [userRequests, setUserRequests] = useState<User[]>([]); // Initialize with an empty array
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'matching', title: 'Matching' },
        { key: 'requests', title: 'Match Requests' },
    ]);

    useEffect(() => {
        const sampleUserRequests = [
            { id: '1', name: 'leo', username: 'username1', bio: 'I’m a passionate adventurer who loves traveling to new places and exploring different cultures', img: require('../../assets/bio/bio-pic.png'), prompt: 'What is your favorite color?', message: 'blah blah blah', messageTime: '2m', unread: true },
            { id: '2', name: 'maya', username: 'username2', bio: 'I’m a passionate adventurer who loves traveling to new places and exploring different cultures', img: require('../../assets/bio/bio-pic.png'), prompt: 'What are your hobbies?', message: 'blah blah blah', messageTime: '4d', unread: true },
            { id: '3', name: 'leo1', username: 'username3', bio: 'I’m a passionate adventurer who loves traveling to new places and exploring different cultures', img: require('../../assets/bio/bio-pic.png'), prompt: 'What music do you like?', message: 'blah blah blah', messageTime: '1w', unread: true },
            { id: '4', name: 'maya1', username: 'username4', bio: 'I’m a passionate adventurer who loves traveling to new places and exploring different cultures', img: require('../../assets/bio/bio-pic.png'), prompt: 'What is your favorite movie', message: 'blah blah blah', messageTime: '2w', unread: false },
        ];
        setUserRequests(sampleUserRequests);
    }, []);


    const onAccept = (userId: string) => {
        const user = userRequests.find((u) => u.id === userId);
        if (user) {
            // Navigate to the messaging screen with the user's info
            navigation.navigate('Message', { user });
        }
    };

    const onReject = (userId: string) => {
        setUserRequests(prevRequests => prevRequests.filter(user => user.id !== userId));
    };

    const FirstRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
      );
    
    const SecondRoute = () => (
        // <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
        <View style={{ flex: 1, backgroundColor: 'white',}}>
            <FlatList
            style={{ marginTop: '5%' }}
            data={userRequests}
            renderItem={({ item }) => <MatchingRequestCard user={item} onAccept={onAccept} onReject={onReject} />}
            keyExtractor={(item) => item.id}
            horizontal={false}
            showsVerticalScrollIndicator={false}
        />
        </View>
    );
    
    const renderScene = SceneMap({
        matching: FirstRoute,
        requests: SecondRoute,
    });

    // const renderTabBar = (props) => {
    //     const inputRange = props.navigationState.routes.map((x, i) => i);

    //     return (
    //         <View style={styles.tabBar}>
    //             {props.navigationState.routes.map((route, i) => {
    //                 const opacity = props.position.interpolate({
    //                     inputRange,
    //                     outputRange: inputRange.map((inputIndex) =>
    //                         inputIndex === i ? 1 : 0.5
    //                     ),
    //                 });

    //                 return (
    //                     <TouchableOpacity
    //                         style={styles.tabItem}
    //                         onPress={() => setIndex(i)}
    //                         key={route.key}
    //                     >
    //                         <Animated.Text style={{ opacity }}>{route.title}</Animated.Text>
    //                     </TouchableOpacity>
    //                 );
    //             })}
    //         </View>
    //     );
    // };

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <TabView
            style={{ paddingTop: '15%', backgroundColor: 'white' }}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            // renderTabBar={renderTabBar}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            />
            {/* <ScrollView showsVerticalScrollIndicator={false}>
                {sampleUserRequests.map(renderCard)}
            </ScrollView> */}
            {/* <FlatList
                data={userRequests}
                renderItem={({ item }) => <MatchingRequestCard user={item} onAccept={onAccept} onReject={onReject} />}
                keyExtractor={(item) => item.id}
                horizontal={false}
                showsVerticalScrollIndicator={false}
            /> */}
        </View>
    );
}