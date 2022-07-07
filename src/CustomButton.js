import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

const CustomButton = ({onPress, title}) => {
  return (
    <Pressable
      // onLongPress={clickHandler}
      onPress={onPress}
      hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
      android_ripple={{color: '#00f'}}
      color="red"
      style={({pressed}) => [
        {backgroundColor: pressed ? '#dddddd' : '#00ff00'},
      ]}>
      <Text style={styles.textStyle}>{title}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  text: {
    color: '#000000',
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  bbutton: {
    backgroundColor: '#4ae1f5',
  },
  textStyle: {
    padding: 10,
    textAlign: 'center',
  },
});

export default CustomButton;
