import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button, CheckBox } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';

const AddPropertyScreen = () => {
  const [propertyType, setPropertyType] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [isFeatured, setIsFeatured] = useState(false);

  const handleSubmit = () => {
    // Validate form data and add property to the spreadsheet
    // Navigate back to Main Screen or Spreadsheet Screen
  };

  return (
    <View style={styles.container}>
      <Input
        label="Property Type"
        value={propertyType}
        onChangeText={setPropertyType}
      />
      <Input
        label="Location"
        value={location}
        onChangeText={setLocation}
      />
      <Input
        label="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <Picker
        selectedValue={propertyType}
        onValueChange={(itemValue) => setPropertyType(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="House" value="House" />
        <Picker.Item label="Apartment" value="Apartment" />
        {/* Add more property types here */}
      </Picker>
      <CheckBox
        title="Featured"
        checked={isFeatured}
        onPress={() => setIsFeatured(!isFeatured)}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  picker: {
    marginBottom: 20,
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//   },
//   picker: {
//     height: 50,
//     width: '100%',
//   },
// });

export default AddPropertyScreen;