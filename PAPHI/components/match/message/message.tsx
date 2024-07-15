import React from 'react';
import { View, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './message.style';
import { User } from '../matchRequest/matchRequest';
// import { RouteProp } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';

type MessageRouteProp = RouteProp<RootStackParamList, 'Message'>;


function Message() {
    // const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const navigation = useNavigation();
    const route = useRoute<MessageRouteProp>();
    const { user } = route.params;

    const goBack = () => {
        navigation.goBack();
    }

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.arrow} onPress={goBack}>
                <FontAwesomeIcon icon={faChevronLeft} color='black' size={24} />
            </TouchableOpacity>

            <View style={styles.profile}>
                <Image source={require('../../../assets/bio/bio-pic.png')} style={styles.image} />
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.username}>@{user.username}</Text>    
                </View>
                
                <Text style={styles.bio}>{user.bio}</Text>
            </View>

            <View style={styles.replyContainer}>
                <TextInput
                    style={styles.input}
                    // onChangeText={onChangeNumber}
                    // value={number}
                    placeholder="message"
                    keyboardType="default"
                />
                <TouchableOpacity>
                    <Text style={{ fontSize: 16, color: 'black', marginLeft: 'auto', marginVertical: 'auto', fontWeight: '800' }}>SEND</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Message;
