import React, { useState } from 'react';
import {
  View, FlatList, TextInput, StyleSheet
} from 'react-native';
import { Header, Button } from 'react-native-elements';

function Spreadsheet({ numRows, numColumns }) {
  // Dummy data for demonstration purposes
  const generateData = (rows, cols) => {
    const data = [];
    for (let i = 0; i < rows; i += 1) {
      const rowData = [];
      for (let j = 0; j < cols; j += 1) {
        rowData.push('');
      }
      data.push(rowData);
    }
    return data;
  };

  const [data, setData] = useState(generateData(numRows, numColumns));

  const updateCell = (rowIndex, columnIndex, value) => {
    const newData = [...data];
    newData[rowIndex][columnIndex] = value;
    setData(newData);
  };

  const renderRow = ({ item: rowData, index: rowIndex }) => {
    const renderCell = ({ item, index: columnIndex }) => (
      <TextInput
        style={styles.cell}
        value={item}
        onChangeText={(value) => updateCell(rowIndex, columnIndex, value)}
      />
    );

    return (
      <FlatList
        data={rowData}
        renderItem={renderCell}
        keyExtractor={(item, index) => `${rowIndex}-${index}`}
        horizontal
      />
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderRow}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

function SpreadsheetScreen() {

  return (
    <View style={styles.container}>
      <Header
        centerComponent={{ text: 'Spreadsheet', style: styles.header }}
        rightComponent={(
          <Button
            title="Save"
            onPress={() => {
              // Implement save functionality here
            }}
          />
        )}
      />
      <Spreadsheet numRows={10} numColumns={5} />
    </View>
  );
}
const WHITE = '#fff';
const LIGHT_GRAY = '#ccc';
const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  header: {
    fontSize: 20,
    color: WHITE,
  },
  cell: {
    borderWidth: 1,
    borderColor: LIGHT_GRAY,
    minWidth: 100,
    minHeight: 40,
    padding: 5,
  },
});

export default SpreadsheetScreen;
