import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import styles from './profileCardBack.style';

interface ProfileCardBackProps {
    prompts: string[];
    onPress: () => void;
}

const ProfileCardBack = ({ prompts, onPress }: ProfileCardBackProps) => {

    const [text, onChangeText] = React.useState('Send mingle');

    return (
        <View style={styles.profileCardContainer}>
            <TouchableOpacity style={styles.topArea} onPress={onPress}>
                {/* Top touchable area */}
            </TouchableOpacity>

            <View style={styles.contentArea}>
                <Text style={styles.prompt}>{prompts[0]}</Text>
                <TextInput style={styles.input} onChangeText={onChangeText} placeholder='Send mingle' />

                <Text style={styles.prompt}>{prompts[1]}</Text>
                <TextInput style={styles.input} onChangeText={onChangeText} placeholder='Send mingle' />

                <Text style={styles.prompt}>{prompts[2]}</Text>
                <TextInput style={styles.input} onChangeText={onChangeText} placeholder='Send mingle' />

                <Text style={styles.prompt}>{prompts[3]}</Text>
                <TextInput style={styles.input} onChangeText={onChangeText} placeholder='Send mingle' />
            </View>

            <TouchableOpacity style={styles.bottomArea} onPress={onPress}>
                {/* Bottom touchable area */}
            </TouchableOpacity>
        </View>
    );
};

export default ProfileCardBack;
