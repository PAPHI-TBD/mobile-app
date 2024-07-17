import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Community, Post, User } from '../../../types';

interface CommunityContextProps {
  joinedCommunities: Community[];
  joinCommunity: (community: Community) => void;
  leaveCommunity: (community: Community) => void;
  isCommunityJoined: (community: Community) => boolean;
  posts: Post[];
  addPost: (communityName: string, content: string, user: User, image?: string) => void;
  updatePostLikes: (postId: string) => void;
  updatePostComments: (postId: string, comment: string) => void;
}

const CommunityContext = createContext<CommunityContextProps | undefined>(undefined);

export const CommunityProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [joinedCommunities, setJoinedCommunities] = useState<Community[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);

  const addPost = (communityName: string, content: string, user: User, image?: string) => {
    const newPost: Post = { id: Date.now().toString(), communityName, content, user, image, timestamp: Date.now(), likes: 0, comments: [], isLiked: false };
    setPosts(prevPosts => [newPost, ...prevPosts]);
  };

  const updatePostLikes = (postId: string) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId ? { ...post, likes: post.isLiked ? post.likes - 1 : post.likes + 1, isLiked: !post.isLiked } : post
      )
    );
  };

  const updatePostComments = (postId: string, comment: string) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId ? { ...post, comments: [...post.comments, { user: { id: '1', name: 'John Doe', avatar: 'https://path/to/avatar.png' }, comment }] } : post
      )
    );
  };

  const joinCommunity = (community: Community) => {
    setJoinedCommunities(prevState => {
      if (!prevState.some(c => c.name === community.name)) {
        return [...prevState, { ...community, isRecommended: false, isTrending: false }];
      }
      return prevState;
    });
  };

  const leaveCommunity = (community: Community) => {
    setJoinedCommunities(prevState => prevState.filter(c => c.name !== community.name));
  };

  const isCommunityJoined = (community: Community) => {
    return joinedCommunities.some(c => c.name === community.name);
  };

  return (
    <CommunityContext.Provider value={{ posts, addPost, joinedCommunities, joinCommunity, leaveCommunity, isCommunityJoined, updatePostLikes, updatePostComments }}>
      {children}
    </CommunityContext.Provider>
  );
};

export const useCommunityContext = () => {
  const context = useContext(CommunityContext);
  if (context === undefined) {
    throw new Error('useCommunityContext must be used within a CommunityProvider');
  }
  return context;
};
