import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import { useNavigation, useRoute } from '@react-navigation/native';

function SpreadsheetDetailsScreen({ spreadsheets }) {
  const navigation = useNavigation();
  const route = useRoute();

  // Get the spreadsheetId from route parameters
  const { spreadsheetId } = route.params;

  // Find the selected spreadsheet
  const selectedSpreadsheet = spreadsheets.find((spreadsheet) => spreadsheet.id === spreadsheetId);

  const renderItem = ({ item }) => (
    <ListItem bottomDivider>
      <ListItem.Content>
        <ListItem.Title>{item.title}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={selectedSpreadsheet.properties}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SpreadsheetDetailsScreen;
