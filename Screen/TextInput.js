import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  TouchableOpacity,
  Alert,
  Image,
  Modal,
  ImageBackground,
} from 'react-native';

function TextInputItem() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const clickHandler = () => {
    if (name.length > 3) {
      setSubmitted(!submitted);
    } else {
      setShowWarning(true);
      // Alert.alert('warning', 'The name must be longer than 3 characters', [
      //   {
      //     text: 'Cancel',
      //     onPress: () => console.log('Cancel Pressed'),
      //   },
      //   {
      //     text: 'OK',
      //     onPress: () => console.log('OK Pressed'),
      //   },
      //   {
      //     cancelable: true,
      //     onDismiss: () => console.warn('Alert dismissed'),
      //   },
      // ]);
      // ToastAndroid.show('The name must be longer than 3 characters'),
      // ToastAndroid.LONG;
    }
  };
  return (
    <View style={styles.viewBody} source={require('../assets/laptop.jpeg')}>
      <Modal
        visible={showWarning}
        onRequestClose={() => {
          setShowWarning();
        }}
        animationType="slide"
        hardwareAccelerated>
        <View style={styles.CenteredModal}>
          <View style={styles.warningModal}>
            <View style={styles.warning}>
              <Text style={styles.text}>WARNING!</Text>
            </View>
            <View style={styles.warningBody}>
              <Text style={styles.text}>
                The name must be longer than 3 characters
              </Text>
            </View>
            <Pressable
              onPress={() => {
                setShowWarning(false);
              }}
              android_ripple={{color: '#fff'}}
              style={styles.warningTextStyle}>
              <Text style={styles.text}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <TextInput
        multiline
        style={styles.input}
        placeholder="e.g Steph"
        onChangeText={value => {
          setName(value);
        }}
        // maxLength={3}
        // secureTextEntry
        // editable
      />
      <TouchableOpacity>
        <Pressable
          // onLongPress={clickHandler}
          onPress={clickHandler}
          hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
          android_ripple={{color: '#00f'}}
          color="red"
          style={({pressed}) => [
            {backgroundColor: pressed ? '#dddddd' : '#00ff00'},
          ]}>
          <Text style={styles.textStyle}>{submitted ? 'Clear' : 'Submit'}</Text>
        </Pressable>

        {submitted ? (
          <View style={styles.body}>
            <Text style={styles.text}>You are regestered {name}</Text>
            <Image
              source={require('../assets/done.png')}
              style={styles.image}
              resizeMode="stretch"
            />
          </View>
        ) : (
          <Image
            source={require('../assets/star.png')}
            style={styles.image}
            resizeMode="stretch"
            blurRadius={3}
          />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    alignItems: 'center',
  },
  body: {
    alignItems: 'center',
    flex: 1,
  },

  item: {
    margin: 10,
    padding: 10,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  textStyle: {
    padding: 10,
    textAlign: 'center',
  },
  warningModal: {
    width: 300,
    height: 300,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  CenteredModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  warning: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  warningBody: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warningText: {},
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    width: 200,
    padding: 10,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    marginBottom: 10,
    margin: 70,
  },
  bbutton: {
    backgroundColor: '#4ae1f5',
  },
  ressableStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  warningTextStyle: {
    backgroundColor: '#4ae1f5',
    padding: 10,

    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  image: {
    width: 90,
    height: 90,
    margin: 10,
  },
});
export default TextInputItem;
