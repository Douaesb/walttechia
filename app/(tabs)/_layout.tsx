import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';


function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: '#61636B',
        tabBarActiveTintColor: '#045CB4',
        // tabBarActiveBackgroundColor: '#045CB4',
        headerShown: useClientOnlyValue(false, false),
        tabBarStyle: { backgroundColor: 'white',borderTopWidth:2, borderTopColor:'#E1E3ED' },
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          tabBarIcon: ({ color }) => <TabBarIcon name="history" color={color} />,
        }}
      />
      <Tabs.Screen
        name="qrcode"
        options={{
          title: 'Qrcode',
          tabBarIcon: ({ color }) => <TabBarIcon name="qrcode" color={color} />,
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: 'More',
          tabBarIcon: ({ color }) => <TabBarIcon name="bars" color={color} />,
        }}
      />
    </Tabs>
  );
}
