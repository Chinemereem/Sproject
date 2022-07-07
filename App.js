import React, {useState, useCallback} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  RefreshControl,
  Text,
  useColorScheme,
  View,
  ImageBackground,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {TextInputItem} from './src/index';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ImageBackground
      style={styles.viewBody}
      source={require('./assets/laptop.jpeg')}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <View>
        {/* <Section /> */}
        <TextInputItem />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  viewBody: {
    alignItems: 'center',
    flex: 1,
  },
});
export default App;
