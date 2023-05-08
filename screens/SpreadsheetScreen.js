import React, { useState } from 'react';
import { View, FlatList, TextInput, StyleSheet } from 'react-native';
import { Header, Button } from 'react-native-elements';

const Spreadsheet = ({ numRows, numColumns }) => {
  // Dummy data for demonstration purposes
  const generateData = (rows, cols) => {
    let data = [];
    for (let i = 0; i < rows; i++) {
      let rowData = [];
      for (let j = 0; j < cols; j++) {
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
};

const SpreadsheetScreen = () => {
  return (
    <View style={styles.container}>
      <Header
        centerComponent={{ text: 'Spreadsheet', style: styles.header }}
        rightComponent={
          <Button
            title="Save"
            onPress={() => {
              // Implement save functionality here
            }}
          />
        }
      />
      <Spreadsheet numRows={10} numColumns={5} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 20,
    color: '#fff',
  },
  cell: {
    borderWidth: 1,
    borderColor: '#ccc',
    minWidth: 100,
    minHeight: 40,
    padding: 5,
  },
});

export default SpreadsheetScreen;