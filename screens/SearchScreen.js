import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { SearchBar, ListItem } from 'react-native-elements';
import Fuse from 'fuse.js';

const SearchScreen = () => {
  // Dummy data for demonstration purposes
  const data = [
    { id: '1', type: 'House', location: 'New York', price: 500000 },
    { id: '2', type: 'Apartment', location: 'Los Angeles', price: 300000 },
    // Add more properties here or fetch them from the app state
  ];

  // Initialize Fuse.js with the appropriate configuration
  const fuse = new Fuse(data, {
    keys: ['type', 'location', 'price'],
    threshold: 0.3,
  });

  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (search) {
      setSearchResults(fuse.search(search).map(({ item }) => item));
    } else {
      setSearchResults([]);
    }
  }, [search]);

  const renderItem = ({ item }) => (
    <ListItem bottomDivider>
      <ListItem.Content>
        <ListItem.Title>{item.type}</ListItem.Title>
        <ListItem.Subtitle>{item.location}</ListItem.Subtitle>
        <ListItem.Subtitle>${item.price}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Type here..."
        onChangeText={setSearch}
        value={search}
      />
      <FlatList
        data={searchResults}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SearchScreen;