import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Button,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {transform} from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const AppScreen = () => {
  const [name, setName] = useState('Steph');
  const [session, setSession] = useState({number: 6, title: 'state'});
  const [current, setCurrent] = useState(true);
  const [increment, setIncrement] = useState(1);
  const [clicked, setClicked] = useState(1);
  const onPressHandler = () => {
    setName('Anie');
    setSession({number: 7, title: 'Style'});
    setCurrent(false);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{name}</Text>
      <Text style={styles.textStyle}>
        This is session number {session.number} and about {session.title}
      </Text>
      <Text style={styles.textStyle}>
        {current ? 'current session' : 'Next session'}
      </Text>

      <Text style={styles.textStyle}>{increment}</Text>
      <View style={styles.button}>
        <Button color="red" title="update state" onPress={onPressHandler} />
      </View>
      <Text style={styles.textStyle}>clicked {clicked} times</Text>
      <View style={styles.button}>
        <Button
          color="#f194ff"
          title="Add"
          onPress={() => {
            setIncrement(increment + 2);
            setClicked(clicked + 1);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    margin: 40,
  },
  textStyle: {
    color: '#000000',
    fontSize: 15,

    // textTransform: "uppercase",
  },
  button: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    width: '50%',

    padding: 10,
    ...Platform.select({
      ios: {
        backgroundColor: '#24a0ed',
      },
    }),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
});
export default AppScreen;
