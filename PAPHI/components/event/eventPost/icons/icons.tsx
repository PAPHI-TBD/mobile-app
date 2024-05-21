import React, { useState } from 'react';
import styles from './icons.style';
import { View, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart, faMessage, faShare } from '@fortawesome/free-solid-svg-icons';

const Icons: React.FC = ({ }) => {
    const [isHeartLiked, setIsHeartLiked] = useState(false);

    const handleHeart = () => {
        setIsHeartLiked(!isHeartLiked);
    };

    const handleReact = () => {

    };

    const handleShare = () => {

    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleHeart}>
                <FontAwesomeIcon icon={faHeart} size={20} color={isHeartLiked ? 'red' : 'black'} />
            </TouchableOpacity>

            <TouchableOpacity style={{paddingHorizontal: 10}} onPress={handleReact}>
                <FontAwesomeIcon icon={faMessage} size={20} color='black' />
            </TouchableOpacity>

            <TouchableOpacity onPress={handleShare}>
                <FontAwesomeIcon icon={faShare} size={20} color='black' />
            </TouchableOpacity>
        </View>
    );
}

export default Icons;