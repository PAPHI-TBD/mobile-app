import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
const BellIcon = require('../../../assets/3lines.png');
const MenuIcon = require('../../../assets/ProfileIcons/Bell.png'); 
const CustomHeader: React.FC = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.topRow}>
          <Text style={styles.title}>COMMUNITIES</Text>
          <Image source={MenuIcon} style={styles.bellIcon} />
        </View>
        <View style={styles.searchRow}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search groups and interests"
            placeholderTextColor="#888"
          />
          <Image source={BellIcon} style={styles.icon} />
        </View>
        <TouchableOpacity style={styles.locationButton}>
          <Image source={MenuIcon} style={styles.locationIcon} />
          <Text style={styles.locationText}>Los Angeles, CA</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    headerContainer: {
      paddingHorizontal: 10,
      paddingTop: 50,
      paddingBottom: 15,
    },
    topRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center',
      flex: 1,
    },
    bellIcon: {
      width: 24,
      height: 24,
      marginLeft: 10,
    },
    searchRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 10,
    },
    searchInput: {
      flex: 1,
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 10,
    },
    icon: {
      width: 24,
      height: 24,
      marginLeft: 10,
    },
    locationButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20, 
        paddingVertical: 5,
        paddingHorizontal: 10,
        alignSelf: 'flex-start',
      },
      locationIcon: {
        width: 16,
        height: 16,
        marginRight: 5,
      },
      arrowIcon: {
        width: 16,
        height: 16,
        marginLeft: 5,
      },
      locationText: {
        fontSize: 14,
        color: '#000',
      },
    });
  
  export default CustomHeader;