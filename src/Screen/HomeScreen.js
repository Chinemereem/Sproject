import React from 'react';

import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  ImageBackground,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {TextInputItem} from '../index';

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ImageBackground
      style={styles.viewBody}
      source={require('../../assets/laptop.jpeg')}>
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
export default HomeScreen;
