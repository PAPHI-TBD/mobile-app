import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, TextInput, Platform } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
import * as ImagePicker from 'react-native-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';

import uuid from 'react-native-uuid';

import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faPencil, faPlus, faCalendar, faLocationDot, faDollar, faUser, faEye } from '@fortawesome/free-solid-svg-icons';

import styles from './createPost.style';


// import { RouteProp } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';

// type CreatePostProp = RouteProp<RootStackParamList, 'CreatePost'>;

const templateImages = [
    { id: uuid.v4(), uri: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbmNlcnR8ZW58MHx8MHx8fDA%3D' },
    { id: uuid.v4(), uri: 'https://images.unsplash.com/photo-1516685018646-549198525c1b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhc3RhfGVufDB8fDB8fHww' },
    { id: uuid.v4(), uri: 'https://plus.unsplash.com/premium_photo-1666913667082-c1fecc45275d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVubmlzfGVufDB8fDB8fHww' },
    { id: uuid.v4(), uri: 'https://images.unsplash.com/photo-1456086272160-b28b0645b729?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFydHxlbnwwfHwwfHx8MA%3D%3D' },
    { id: uuid.v4(), uri: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWV8ZW58MHx8MHx8fDA%3D' }
];

interface Tag {
    name: string;
    color: string;
}


function CreatePost() {
    const navigation = useNavigation();
    // const route = useRoute<CreatePostProp>();

    const goBack = () => {
        navigation.goBack();
    }

    // const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // const chooseImage = async () => {
    //     let result = await ImagePicker.launchImageLibraryAsync({
    //         mediaTypes: ImagePicker.MediaTypeOptions.All,
    //         allowsEditing: true,
    //         aspect: [4, 3],
    //         quality: 1,
    //     });

    //     if (!result.canceled) {
    //         setSelectedImage(result.assets[0].uri);
    //     }
    // };

    // const [selectedTags, setSelectedTags] = useState<Tag[]>([
    //     { name: 'public', color: '#9CFE50' },
    //     { name: 'id required', color: '#4DECD9' }
    // ]);

    // setSelectedTags([ {name: 'public', color: '#9CFE50'}, {name: 'id required', color: '#4DECD9'} ]);

    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [date, setDate] = useState<Date>(new Date());
    const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
    const [selectedTags, setSelectedTags] = useState<Tag[]>([
        { name: 'public', color: '#9CFE50' },
        { name: 'id required', color: '#4DECD9' }
    ]);

    const chooseImage = () => {
        ImagePicker.launchImageLibrary({ mediaType: 'photo' }, (response) => {
            if (!response.didCancel && !response.errorCode) {
                if (response.assets && response.assets.length > 0) {
                    setSelectedImage(response.assets[0].uri);
                }
            }
        });
    };

    const onDateChange = (event: Event, selectedDate?: Date) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(Platform.OS === 'ios');
        setDate(currentDate);
    };

    return (
        <View style={{ flex: 1 }}>
            {/* <TouchableOpacity>
                <View style={styles.mainImage}>
                    <Text style={{ fontSize: 16, color: 'white', fontWeight: '700' }}>+ Click to add media</Text>
                </View>
            </TouchableOpacity> */}
            <TouchableOpacity onPress={chooseImage}>
                <View style={styles.mainImage}>
                    {selectedImage ? (
                        <Image source={{ uri: selectedImage }} style={{ width: '100%', height: '100%' }} />
                    ) : (
                        <Text style={{ fontSize: 16, color: 'white', fontWeight: '700' }}>+ Click to add media</Text>
                    )}
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon} onPress={goBack}>
                <FontAwesomeIcon icon={faChevronLeft} size={24} color="white"/>
            </TouchableOpacity>

            {/* <View style={styles.options}>
                {templateImages.map((image) => (
                    <TouchableOpacity onPress={() => setSelectedImage(image.uri)}>
                        <Image source={{ uri: image.uri }} style={styles.imageOption} />
                    </TouchableOpacity>
                ))}
            </View> */}

            <View style={styles.options}>
                {templateImages.map((image) => (
                    <TouchableOpacity key={image.id} onPress={() => setSelectedImage(image.uri)}>
                        <Image source={{ uri: image.uri }} style={styles.imageOption} />
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.informationContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', columnGap: 10, marginBottom: 20 }}>
                    <TextInput
                        style={styles.eventTitle}
                        // onChangeText={onChangeNumber}
                        // value={number}
                        placeholder="Untitled Event"
                        // keyboardType="numeric"
                        // maxLength=
                    />
                    <FontAwesomeIcon icon={faPencil} size={24} color="black"/>
                </View>

                <View style={{ flexDirection: 'row', columnGap: 10 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', columnGap: 10, marginRight: 10 }}>
                        <FontAwesomeIcon icon={faPlus} size={20} color='black'/>
                        <Text style={{ fontSize: 14, fontWeight: '600', marginVertical: 'auto' }}>Add tags</Text>
                    </TouchableOpacity>
                    {selectedTags.map((tag) => (
                        <TouchableOpacity key={tag.name} style={styles.tag}>
                            <View style={[styles.tagColor, { backgroundColor: tag.color }]}></View>
                            <Text style={styles.tagText}>{tag.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* <View style={{ flexDirection: 'row', columnGap: 10, marginTop: 15 }}>
                    <FontAwesomeIcon icon={faCalendar} size={20} color='#BDBFCA' />
                    <TextInput
                        style={styles.header}
                        placeholder='Set a date...'
                    />
                </View> */}

                <View style={{ flexDirection: 'row', columnGap: 10, marginTop: 15 }}>
                    <FontAwesomeIcon icon={faCalendar} size={20} color='#BDBFCA' />
                    <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                        <TextInput
                            style={styles.header}
                            placeholder='Set a date...'
                            value={date.toLocaleDateString()}
                            editable={false}
                        />
                    </TouchableOpacity>
                    {showDatePicker && (
                        <DateTimePicker
                            value={date}
                            mode="date"
                            display="default"
                            onChange={onDateChange}
                        />
                    )}
                </View>

                <View style={{ flexDirection: 'row', columnGap: 10, marginTop: 15 }}>
                    <FontAwesomeIcon icon={faLocationDot} size={20} color='#BDBFCA' />
                    <View style={{ flexDirection: 'column' }}>
                        <TextInput
                            style={styles.header}
                            placeholder='Set a location...'
                        />
                        <Text style={{ fontSize: 14, fontWeight: '600', color: '#969696' }}>name, address, or link</Text>    
                    </View>
                    
                </View>

                <View style={{ flexDirection: 'row', columnGap: 10, marginTop: 15 }}>
                    <FontAwesomeIcon icon={faPencil} size={20} color='#BDBFCA' />
                    <TextInput
                        style={[styles.header, { height: 100 }]}
                        placeholder='Add a description of your event'
                        multiline={true}
                    />
                </View>

                <View style={{ flexDirection: 'row', columnGap: 10, marginTop: 15 }}>
                    <FontAwesomeIcon icon={faDollar} size={20} color='#BDBFCA' />
                    <TextInput
                        style={styles.header}
                        placeholder='Cost per person'
                        keyboardType='numeric'
                    />
                </View>

                <View style={{ flexDirection: 'row', columnGap: 10, marginTop: 15 }}>
                    <FontAwesomeIcon icon={faCalendar} size={20} color='#BDBFCA' />
                    <TextInput
                        style={styles.header}
                        placeholder='Max Capacity'
                        keyboardType='numeric'
                    />
                </View>
                
            </View>

            <View style={styles.footerContainer}>
                <View style={{ flexDirection: 'row', marginVertical: 'auto', }}>
                    {/* <View>
                        <Text style={{ color: '#969696', fontSize: 14, fontWeight: '600' }}>Price</Text>
                        <Text style={{ color: 'white', fontSize: 14, fontWeight: '600' }}>${price}</Text>
                    </View> */}
                    <TouchableOpacity style={{ flexDirection: 'row', columnGap: 10, marginVertical: 'auto' }}>
                        <FontAwesomeIcon icon={faEye} size={24} color='black' />
                        <Text style={{ fontSize: 14, fontWeight: '600', marginVertical: 'auto' }}>Preview</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                        <TouchableOpacity style={{ marginHorizontal: 10 }}>
                            <View style={[styles.button, styles.saveButton]}>
                                <Text style={styles.buttonText}>Save to Drafts</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={[styles.button, styles.shareButton]}>
                                <Text style={[styles.buttonText, { color: 'white' }]}>Share</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>


            {/* <TouchableOpacity onPress={chooseImage}>
                <View style={{ height: 200, justifyContent: 'center', alignItems: 'center' }}>
                    {selectedImage ? (
                        <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200 }} />
                    ) : (
                        <Text>Click to add media</Text>
                    )}
                </View>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row' }}>
                {templateImages.map((image) => (
                    <TouchableOpacity key={image.id} onPress={() => setSelectedImage(image.uri)}>
                        <Image source={{ uri: image.uri }} style={{ width: 50, height: 50, margin: 5 }} />
                    </TouchableOpacity>
                ))}
            </View> */}
        </View>
    );
}

export default CreatePost;
