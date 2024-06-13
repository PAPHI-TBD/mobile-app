import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './footer.style';

interface FooterProps {
    price: number;
}

const Footer = ({ price }: FooterProps) => {

    const invite = () => {
        // implement inviting friends
    };

    const addEvent = () => {
        // implement sharing event
    };

    return (
        <View style={styles.footerContainer}>
            <View style={{ flexDirection: 'row', marginVertical: 25 }}>
                <View>
                    <Text style={{ color: '#969696', fontSize: 14, fontWeight: '600' }}>Price</Text>
                    <Text style={{ color: 'white', fontSize: 14, fontWeight: '600' }}>${price}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                    <TouchableOpacity onPress={invite} style={{ marginHorizontal: 10 }}>
                        <View style={[styles.button, styles.inviteButton]}>
                            <Text style={styles.buttonText}>Invite</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={addEvent}>
                        <View style={[styles.button, styles.addEventButton]}>
                            <Text style={styles.buttonText}>Add Event</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );

};

export default Footer;