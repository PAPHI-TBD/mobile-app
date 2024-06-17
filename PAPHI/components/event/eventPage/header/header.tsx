import React from 'react';
import { View, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './header.style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faShare, faHeart, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
// import { Icon } from 'react-native-gradient-icon';

// import Entypo from '@react-native-vector-icons/entypo';

import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../types'; // Adjust the import path as necessary


// import { Icon } from 'react-native-gradient-icon';
//     <Icon  
//         size={50}
//         colors={[
//             {color:"gold",offset:"0",opacity:"1"},
//             {color:"red",offset:"1",opacity:"1"},
//         ]}
//         name="font-awesome-5" type="fire-alt" />  

interface HeaderProps {
    imageList: string[];
}

const Header = ({ imageList }: HeaderProps) => {

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const eventFeed = () => {
        navigation.goBack();
    };

    const shareEvent = () => {
        // implement sharing event
    }

    const likeEvent = () => {
        // implement liking event
    }

    const clickMenu = () => {
        // implement clicking menu
    }

    return (
        <View>
            <ImageBackground resizeMode="cover" style={styles.image}>
                <View style={styles.icons}>
                    <TouchableOpacity style={[styles.icon, { left: 'auto' }]} onPress={eventFeed}>
                        <FontAwesomeIcon icon={faArrowLeft} size={24} color="white"/>
                    </TouchableOpacity>

                    <View style={styles.rightIcons}>
                        <TouchableOpacity style={[styles.icon]} onPress={shareEvent}>
                            <FontAwesomeIcon icon={faShare} size={24} color="white"/>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.icon]} onPress={likeEvent}>
                            <FontAwesomeIcon icon={faHeart} size={24} color="white"/>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.icon} onPress={clickMenu}>
                            <FontAwesomeIcon icon={faEllipsisVertical} size={24} color="white"/>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
            

            
        </View>
    );

};

export default Header;