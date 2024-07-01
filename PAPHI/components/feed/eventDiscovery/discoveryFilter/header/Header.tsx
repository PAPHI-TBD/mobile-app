import React from 'react';
import { View, ImageBackground, TouchableOpacity, Text } from 'react-native';
import styles from './Header.style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


// import { useNavigation, NavigationProp } from '@react-navigation/native';
// import { RootStackParamList } from '../../../../types'; 


const Header: React.FC = ({}) => {

    // const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    // const eventFeed = () => {
    //     navigation.goBack();
    // };

    return (
        <View>
            <View style={styles.container}>
                <TouchableOpacity style={[{ left: 'auto' }]} >
                    <FontAwesomeIcon icon={faArrowLeft} size={20} color="black"/>
                </TouchableOpacity>
                <Text style={styles.title}>FILTERS</Text>
            </View>
        </View>
    );

};

export default Header;