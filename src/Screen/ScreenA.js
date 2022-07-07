import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
const ScreenA = ({navigation}) => {
  const onPressHandler = () => {
    navigation.navigate('ScreenB');
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => ({backgroundColor: pressed ? '#fff' : '#ff0'})}>
        <Text style={styles.text}>Go to screen B</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    color: '#000000',
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
});
export default ScreenA;
