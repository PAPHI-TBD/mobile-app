import React, { useState } from 'react';
import { View, Text, Dimensions, Image, ImageStyle } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import FirstRoute from './firstTab/FirstRouteProfile'
import SecondRoute from './secondTab/SecondRouteProfile'
import styles from './profile.style';

const guidelineBaseWidth = 390;
const guidelineBaseHeight = 844;
const { width , height } = Dimensions.get("window");
const horizontalScale = (size: number) =>
    (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) =>
    (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) =>
    size + (horizontalScale(size) - size) * factor;

export default function Profile() {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
    ]);

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.avatar as ImageStyle}
                    source={{
                        // replace with user data
                        uri: 'https://www.bootdey.com/img/Content/avatar/avatar6.png'
                    }}
                />
                <View style={styles.info}>
                    <Text style={styles.name}>John Doe</Text>
                    <Text style={styles.username}>@johndoe</Text>
                </View>
            </View>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                renderTabBar={(props) => (
                    <TabBar
                        {...props}
                        indicatorStyle={styles.indicator}
                        style={styles.tabBar}
                        labelStyle={styles.label}
                    />
                )}
            />
        </View>
    );
}