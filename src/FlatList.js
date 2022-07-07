import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
  FlatList,
} from 'react-native';

const FlatItems = () => {
  const [refreshing, setRefreshing] = useState(false);
  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  const [itemData, setItem] = useState([
    {key: '1', name: 'item 1'},
    {key: '2', name: 'item 2'},
    {key: '3', name: 'item 9'},
    {key: '4', name: 'item 4'},
    {key: '5', name: 'item 5'},
    {key: '6', name: 'item 6'},
    {key: '7', name: 'item 8'},
    {key: '8', name: 'item 9'},
    {key: '9', name: 'item 7'},
    {key: '10', name: 'item 7'},
    {key: '11', name: 'item 7'},
    {key: '12', name: 'item 7'},
  ]);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setItem([...itemData, {Key: 69, name: 'Item 9'}]);
    wait(2000).then(() => setRefreshing(false));
  }, [itemData]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <FlatList
        numColumns={2}
        //   keyExtractor={(item, index) => index.toString()}
        data={itemData}
        renderItem={({item}) => (
          <View>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
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
    fontSize: 45,
    fontStyle: 'italic',
    margin: 10,
  },
});
export default FlatItems;
