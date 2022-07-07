import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
  FlatList,
  SectionList,
} from 'react-native';

const Section = () => {
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
  const DATA = [
    {
      title: 'Title 1',
      data: ['Item 1-1, "Ite, 1-2', 'Item 1-3'],
    },
    {
      title: 'Title 2',
      data: ['Item 2-1, "Item, 2-2', 'Item 2-3'],
    },
    {
      title: 'Title 3',
      data: ['Item 3-1, "Item, 3-2', 'Item 3-3'],
    },
    {
      title: 'Title 1',
      data: ['Item 4-1, "Item, 4-2', 'Item 4-3'],
    },
    {
      title: 'Title 5',
      data: ['Item 5-1, "Item 5-2', 'Item 5-3'],
    },
    {
      title: 'Title 6',
      data: ['Item 6-1, "Item, 6-2', 'Item 6-3'],
    },
  ];
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setItem([...itemData, {Key: 69, title: 'Item 9'}]);
    wait(2000).then(() => setRefreshing(false));
  }, [itemData]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <SectionList
        keyExtractor={(item, index) => index.toString()}
        sections={DATA}
        renderItem={({item}) => (
          <View>
            <Text>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section}) => (
          <View style={styles.item}>
            <Text style={styles.text}>{section.title}</Text>
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

export default Section;
