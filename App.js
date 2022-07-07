import * as React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenA from './src/Screen/ScreenA';
import HomeScreen from './src/Screen/HomeScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Screen_A"
          options={{header: () => null}}
          component={ScreenA}
        />
        <Stack.Screen name="ScreenB" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
