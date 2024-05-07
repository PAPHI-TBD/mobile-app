import React, { useState } from 'react';
import styles from './bio.style';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// define props interface
interface BioHeaderProps {
    // add props
    bio_img: string;
    name: string;
    occupation: string;
    description: string;
}


const BioHeader: React.FC = ({}) => {

    const [bioData, setBioData] = useState<BioHeaderProps[]>([
        {   
            bio_img: require('../../../assets/bio/bio-pic.png'), 
            name: 'John Doe', 
            occupation: 'Doctor',  
            description: 'Basketball, Food, Books',
        },
    ]);

    const [imageSource, setImageSource] = useState(require('../../../assets/bio/bio-pic.png'));

    const updateBioData = (newData: BioHeaderProps[]) => {
        setBioData(newData);
    };

    const handleReject = () => {
        // Handle reject action here
        console.log('Reject button clicked');
    };

    return (
        
        <View style={styles.bioHeaderContainer}>
            {/* Reject button */}
            <TouchableOpacity onPress={handleReject}>
                <FontAwesomeIcon icon={faTimes} size={30} color="black" style={styles.icon}/>
            </TouchableOpacity>

            {bioData.map((data, index) => (
                <View style={styles.subContainer} key={index}> {/* Added key prop to the View */}
                    <Image
                        // doesn't work when i do
                        // source={data.bio_img} for some reason
                        source={imageSource}
                        style={styles.userIcon}
                    />
                    <View style={styles.textContainer}>
                        <View style={styles.mainHeadingContainer}>
                            <Text style={styles.mainHeading}>{data.name}</Text>
                            <Text style={styles.occupation}>{data.occupation}</Text>
                        </View>
                        
                        <Text style={styles.subHeading}>{data.description}</Text>
                    </View>
                </View>
            ))}
        </View>
    );
}

export default BioHeader;