import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button, CheckBox } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';

function AddPropertyScreen({ route, navigation }) {
  const [propertyType, setPropertyType] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [isFeatured, setIsFeatured] = useState(false);

  const { addProperty } = route.params;

  const handleSubmit = () => {
    // Validate form data
    // Generate a unique id for the new property
    const id = new Date().getTime().toString();

    // Call the addProperty function passed from the MainScreen component
    addProperty({
      id,
      title: `${propertyType} - ${location}`,
    });

    // Navigate back to Main Screen
    navigation.goBack();
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  picker: {
    marginBottom: 20,
  },
});

export default AddPropertyScreen;
