import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, View, StyleSheet } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import Entypo from '@expo/vector-icons/Entypo';


// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  //return <Entypo name="home" size={24} color="black" />
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}



export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Domov',
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />,
          headerRight: () => (
            <View>
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Entypo name="info" size={25} color={Colors[colorScheme ?? 'light'].text} style={{marginRight: 15, opacity: pressed ? 0.5 : 1}} />
              //    <FontAwesome
              //      name="wifi"
              //      size={25}
              //      color={Colors[colorScheme ?? 'light'].text}
              //      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
              //      
              //    />/*, backgroundColor: rgb*/
                )}
              </Pressable>
            </Link>

            <Link href="/kontakti" asChild>
            <Pressable>
              {({ pressed }) => (
                <Entypo name="phone" size={25} color={Colors[colorScheme ?? 'light'].text} style={{marginRight: 5, opacity: pressed ? 0.5 : 1}} />
            
              )}
            </Pressable>
          </Link>
          </View>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Video',
          tabBarIcon:({ color }) => <Entypo name="youtube" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: 'Koledar',
          tabBarIcon: ({ color }) => <FontAwesome name="book" size={24} color={color} />,
        }}//<TabBarIcon name="code" color={color} />,
      />
      <Tabs.Screen
        name="four"
        options={{
          title: 'Dogotki',
          tabBarIcon: ({ color }) => <Entypo name="calendar" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="five"
        options={{
         title: 'Radijo',
          tabBarIcon: ({ color }) => <Entypo name="beamed-note" size={24} color={color} />,
        }}
        
      />
      
    </Tabs>
    
  );
}
