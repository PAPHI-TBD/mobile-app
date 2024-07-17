import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { Post } from '../../../../types';
import { useCommunityContext } from '../../communityDetails/communityContext';
import { formatDistanceToNow } from 'date-fns';
import { Ionicons } from '@expo/vector-icons';

const PostList: React.FC<{ communityName: string }> = ({ communityName }) => {
  const { posts, updatePostLikes, updatePostComments } = useCommunityContext();
  const communityPosts = posts.filter(post => post.communityName === communityName);
  const [reply, setReply] = useState<string>('');
  const [activePostId, setActivePostId] = useState<string | null>(null);

  const handleLikePress = (postId: string) => {
    updatePostLikes(postId);
  };

  const handleCommentSubmit = (postId: string) => {
    if (reply.trim()) {
      updatePostComments(postId, reply);
      setReply('');
      setActivePostId(null);
    }
  };

  const renderPost = ({ item }: { item: Post }) => (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <Image source={{ uri: item.user.avatar }} style={styles.avatar} />
        <View>
          <Text style={styles.userName}>{item.user.name}</Text>
          <Text style={styles.timestamp}>{formatDistanceToNow(new Date(item.timestamp))} ago</Text>
        </View>
        <Ionicons name="ellipsis-vertical" size={24} color="black" style={styles.moreIcon} />
      </View>
      {item.image && <Image source={{ uri: item.image }} style={styles.postImage} />}
      <Text style={styles.content}>{item.content}</Text>
      <View style={styles.postFooter}>
        <TouchableOpacity style={styles.likeButton} onPress={() => handleLikePress(item.id)}>
          <Ionicons name={item.isLiked ? "heart" : "heart-outline"} size={24} color={item.isLiked ? "red" : "black"} />
          <Text style={styles.likeCount}>{item.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.commentButton} onPress={() => setActivePostId(item.id)}>
          <Ionicons name="chatbubble-outline" size={24} color="black" />
          <Text style={styles.commentCount}>{item.comments.length}</Text>
        </TouchableOpacity>
      </View>
      {activePostId === item.id && (
        <View style={styles.commentSection}>
          <TextInput
            style={styles.replyInput}
            placeholder="Reply..."
            value={reply}
            onChangeText={setReply}
            onSubmitEditing={() => handleCommentSubmit(item.id)}
          />
          <TouchableOpacity style={styles.sendButton} onPress={() => handleCommentSubmit(item.id)}>
            <Ionicons name="send" size={16} color="white" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  return (
    <FlatList
      data={communityPosts}
      renderItem={renderPost}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
  },
  postContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  timestamp: {
    fontSize: 12,
    color: '#888',
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
  content: {
    marginTop: 10,
    fontSize: 16,
  },
  postFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  commentButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeCount: {
    marginLeft: 5,
    fontSize: 16,
  },
  commentCount: {
    marginLeft: 5,
    fontSize: 16,
  },
  commentSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    padding: 5,
  },
  replyInput: {
    flex: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#f0f0f0',
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#e0e0e0',
    padding: 8,
    borderRadius: 20,
  },
  moreIcon: {
    marginLeft: 'auto',
  },
});

export default PostList;
