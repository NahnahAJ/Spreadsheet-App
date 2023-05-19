import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { ListItem, Button, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

function MainScreen() {
  const navigation = useNavigation();
  const [spreadsheets, setSpreadsheets] = useState([
    { 
      id: '1', 
      title: 'Spreadsheet 1',
      properties: []
    },
    { 
      id: '2', 
      title: 'Spreadsheet 2',
      properties: []
    },
  ]);

  const addProperty = (spreadsheetId, newProperty) => {
    setSpreadsheets((prevSpreadsheets) => {
      return prevSpreadsheets.map((spreadsheet) => {
        if (spreadsheet.id === spreadsheetId) {
          return {
            ...spreadsheet,
            properties: [...spreadsheet.properties, newProperty],
          };
        } else {
          return spreadsheet;
        }
      });
    });
  };

  const renderItem = ({ item }) => (
    <ListItem bottomDivider>
      <ListItem.Content>
        <ListItem.Title onPress={() => navigation.navigate('Spreadsheet', { spreadsheetId: item.id })}>
          {item.title}
        </ListItem.Title>
        <Button
          icon={<Icon name="add-circle" />}
          title="Add Property"
          onPress={() => navigation.navigate('AddProperty', { addProperty, spreadsheetId: item.id })}
        />
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