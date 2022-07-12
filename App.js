import * as React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScreenA from './src/Screen/ScreenA';
import HomeScreen from './src/Screen/HomeScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if (route.name === 'Screen_A') {
              iconName = 'autoprefixer';
              size = focused ? 25 : 20;
              // color = focused ? '#f0f' : '#555';
            } else if (route.name === 'ScreenB') {
              iconName = 'btc';
              size = focused ? 25 : 20;
              // color = focused ? '#f0f' : '#555';
            }
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#f0f',
          inactiveTintColor: '#555',
          activeBackgroundColor: '#fff',
          inactiveBackgroundColor: '#999',
          showLabel: true,
          labelStyle: {fontSize: 14},
        }}>
        <Tab.Screen
          name="Screen_A"
          // options={{header: () => null}}
          component={ScreenA}
          options={{tabBarBadge: 3}}
        />
        <Tab.Screen name="ScreenB" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
