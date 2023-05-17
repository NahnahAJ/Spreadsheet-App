import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { ListItem, Button, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

function MainScreen() {
  const navigation = useNavigation();
  // eslint-disable-next-line no-unused-vars
  const [spreadsheets, setSpreadsheets] = useState([
    { id: '1', title: 'Spreadsheet 1' },
    { id: '2', title: 'Spreadsheet 2' },
    // Add more spreadsheets here or fetch them from an API or local storage.
  ]);

  const addProperty = (newProperty) => {
    setSpreadsheets((prevSpreadsheets) => [
      ...prevSpreadsheets,
      { id: newProperty.id, title: newProperty.title },
    ]);
  };

  const renderItem = ({ item }) => (
    <ListItem bottomDivider onPress={() => navigation.navigate('Spreadsheet', { spreadsheetId: item.id })}>
      <ListItem.Content>
        <ListItem.Title>{item.title}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={spreadsheets}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.buttonContainer}>
        <Button
          icon={<Icon name="add" />}
          title="New Spreadsheet"
          onPress={() => {
            // Implement logic to create a new spreadsheet and update the spreadsheets state.
          }}
        />
        <Button
          icon={<Icon name="search" />}
          title="Search"
          onPress={() => navigation.navigate('Search')}
        />
        <Button
          icon={<Icon name="add-circle" />}
          title="Add Property"
          onPress={() => navigation.navigate('AddProperty', { addProperty })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
});

export default MainScreen;
