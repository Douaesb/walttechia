// Navigation.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import HistoryScreen from './screens/HistoryScreen';
import PaymentScreen from './screens/PaymentScreen';
import MoreScreen from './screens/MoreScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="History" component={HistoryScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="More" component={MoreScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
  tabBarOptions={{
    activeTintColor: 'blue',
    inactiveTintColor: 'gray',
    style: {
      backgroundColor: '#fff',
      borderTopWidth: 1,
      borderTopColor: '#ccc',
    },
    labelStyle: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  }}
>
<Tab.Screen
  name="Home"
  component={MainStack}
  options={{
    tabBarLabel: 'Home',
    tabBarIcon: ({ color, size }) => (
      <Icon name="home" color={color} size={size} />
    ),
  }}
/><Tab.Screen name="History" component={HistoryScreen} />


</Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
