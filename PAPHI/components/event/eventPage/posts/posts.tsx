import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './posts.style';

interface Post {
    img: string;
    // name: string;
}

interface PostsProps {
    postList: Post[];
}

const Posts = ({ postList }: PostsProps) => {

    const renderPost = (post: Post) => {
        return (
            <Image style={styles.post}/>
        );
    };

    const clickPost = () => {
        // implement showing individual post
    };

    const showMore = () => {
        // implement showing more posts
    };

    return (
        <View style={styles.postsContainer}>

            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                <Text style={{ color: 'black', fontSize: 14, fontWeight: '600', marginBottom: 10 }}>Posts from this Event</Text>
                <TouchableOpacity>
                    <Text style={{ fontSize: 10, textDecorationLine: 'underline', paddingHorizontal: 5, marginTop: 4, fontWeight: '500' }}>show more</Text>
                </TouchableOpacity>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.postsScroll}>
                {postList.map(renderPost)}
            </ScrollView>

        </View>
    );
};

export default Posts;