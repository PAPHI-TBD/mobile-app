import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useCommunityContext } from '../../communityDetails/communityContext';
import { User } from '../../../../types';
import { Ionicons } from '@expo/vector-icons';
const carFanaticsImage = require('../../../../assets/ProfileIcons/ProfilePic.png');

const PostForm: React.FC<{ communityName: string }> = ({ communityName }) => {
  const [content, setContent] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const { addPost } = useCommunityContext();

  const user: User = { id: '1', name: 'John Doe', avatar: carFanaticsImage };

  const handleChoosePhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    if (content.trim() || image) {
      addPost(communityName, content, user, image || undefined);
      setContent('');
      setImage(null);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={user.avatar} style={styles.avatar} />
        <TextInput
          style={styles.input}
          placeholder="Write a new post..."
          value={content}
          onChangeText={setContent}
          multiline
        />
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.photoButton} onPress={handleChoosePhoto}>
          <Text style={styles.photoButtonText}>Add Photos +</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sendButton} onPress={handleSubmit}>
          <Ionicons name="send" size={16} color="white" />
          <Text style={styles.send}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    borderRadius: 20,
    padding: 5,
    paddingLeft: 10,
    fontSize: 16,
    alignContent: 'center',
  },
  photoButton: {
    marginTop: 10,
  },
  send: {
    marginLeft: 3,
    color: 'white',
    fontSize: 16,
  },
  photoButtonText: {
    marginTop: 5,
    color: 'black',
    fontSize: 16,
  },
  sendButton: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 10,
    backgroundColor: '#8E99D6',
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 25,
  },
  sendButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default PostForm;
