// About.tsx
import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface AboutProps {
  about: string;
  isPublic: boolean;
  members: number;
  category: string;
  isJoined: boolean;
  handleJoin: () => void;
  handleLeave: () => void;
}

const About: React.FC<AboutProps> = ({ about, isPublic, members, category, isJoined, handleJoin, handleLeave }) => {
  const [isChatJoined, setIsChatJoined] = useState(false);
  const handleJoinChat = () => {
    setIsChatJoined(true);
  };
  return (
    <View style={styles.aboutSection}>
      <Text style = {styles.about}> About</Text>
      <Text style={styles.description}>{about}</Text>
      <Text style={styles.details}>
        {isPublic ? 'Public' : 'Private'} · {members} members
      </Text>
      <View style={styles.buttonContainer}>
        {isJoined ? (
          <TouchableOpacity style={[styles.button, styles.joinedButton]} onPress={handleLeave}>
            <Text style={styles.buttonText}>Joined</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={[styles.button, styles.joinButton]} onPress={handleJoin}>
            <Text style={styles.buttonText}>Join</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={[styles.button, styles.chatButton, isChatJoined && styles.joinedChatButton]}
          onPress={isChatJoined ? undefined : handleJoinChat}
        >
          <Text style={styles.buttonText}>{isChatJoined ? 'Joined Chat' : 'Join Chat'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.shareButton]} onPress={() => console.log('Share')}>
          <Text style={styles.shareButtonText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  about: {
    marginLeft: 12,
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
  },
  aboutSection: {
    marginLeft: 12,
    padding: 20,
  },
  description: {
    marginLeft: 12,
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
    marginTop: 10,
  },
  details: {
    marginLeft: 12,
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
    marginTop: 15,
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  joinButton: {
    backgroundColor: '#0000ff',
    flex: 1,
  },
  joinedButton: {
    backgroundColor: '#000080',
    flex: 1,
  },
  chatButton: {
    backgroundColor: '#4169e1',
    flex: 1,
  },
  joinedChatButton: {
    backgroundColor: '#000080',
    flex: 1,
  },
  shareButton: {
    backgroundColor: '#1e90ff',
    width: 50,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  shareButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default About;
