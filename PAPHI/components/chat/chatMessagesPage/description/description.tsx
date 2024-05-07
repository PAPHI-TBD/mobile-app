import React, { useState } from 'react';
import styles from './description.style';
import { View, Text } from 'react-native';

interface BioDescriptionProps {
    // add props
    name: string;
    commonInterest: string;
}


const BioDescription: React.FC = ({}) => {

    const [descriptionData, setDescriptionData] = useState<BioDescriptionProps[]>([
        {
            name: 'John Doe',
            commonInterest: 'Fashion',
        },
    ]);

    const updateDescriptionData = (newData: BioDescriptionProps[]) => {
        setDescriptionData(newData);  
    };

    return (
        <View style={styles.descriptionContainer}>
            {descriptionData.map((data, index) => (
                <View style={styles.textContainer} key={index}>
                    <Text style={styles.text}>This is the start of your conversation</Text>
                    <Text style={styles.text}>with {data.name}</Text>
                    <Text style={styles.interest}>Common Interest: {data.commonInterest}</Text>
                </View>
            ))}
        </View>
    );

}

export default BioDescription;