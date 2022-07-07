import React, {useState, useCallback} from 'react';
import {View, Text, StyleSheet, ScrollView, RefreshControl} from 'react-native';

const Item = () => {
  const [refreshing, setRefreshing] = useState(false);
  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const [itemData, setItem] = useState([
    {key: 1, items: 'item 1'},
    {key: 2, items: 'item 2'},
    {key: 3, items: 'item 9'},
    {key: 4, items: 'item 4'},
    {key: 5, items: 'item 5'},
    {key: 6, items: 'item 6'},
    {key: 7, items: 'item 8'},
    {key: 8, items: 'item 9'},
    {key: 9, items: 'item 7'},
    {key: 10, items: 'item 7'},
    {key: 11, items: 'item 7'},
    {key: 12, items: 'item 7'},
  ]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setItem([...itemData, {Key: 69, items: 'Item 9'}]);
    wait(2000).then(() => setRefreshing(false));
  }, [itemData]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.itemm}>
        {itemData.map((item, index) => {
          return (
            <View key={index}>
              <Text style={styles.item}>{item.items}</Text>
            </View>
          );
        })}
      </View>
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
export default Item;
