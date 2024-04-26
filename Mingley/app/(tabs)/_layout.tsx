import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  // navbar
  return (
    <Tabs
        screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="live"
        options={{
          title: 'Live Page',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="feed"
        options={{
          title: 'Feed Page',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      {/* Add a new tab screen */}
      <Tabs.Screen
        name="post"
        options={{
          title: 'Post', // Set the title for the new tab
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />, // Set the icon for the new tab
        }}
      />
      {/* Add a new tab screen */}
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat', // Set the title for the new tab
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />, // Set the icon for the new tab
        }}
      />
      {/* Add a new tab screen */}
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile', // Set the title for the new tab
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />, // Set the icon for the new tab
        }}
      />
    </Tabs>
  );
}
