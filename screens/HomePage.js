import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function HomePageScreen({ navigation }) {
  const handleAddProperty = () => {
    navigation.navigate('AddProperty');
  };

  const handleMyProperties = () => {
    // Navigation logic for My Properties screen
  };

  const handleRequests = () => {
    // Navigation logic for Requests screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>Alveo Hub</Text>
      <Text style={styles.signInText}>Sign In</Text>
      <Text style={styles.pricingGuideText}>Pricing Guide</Text>
      <Text style={styles.welcomeText}>Welcome to Alveo Hub</Text>
      <Text style={styles.subtitleText}>Organize, Advertise and Share Your Properties</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleAddProperty}>
          <Text style={styles.buttonText}>Add Property</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleMyProperties}>
          <Text style={styles.buttonText}>My Properties</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleRequests}>
          <Text style={styles.buttonText}>Requests</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logoText: {
    position: 'absolute',
    top: 20,
    left: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  signInText: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  pricingGuideText: {
    position: 'absolute',
    top: 20,
    right: 100,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitleText: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    backgroundColor: '#3f51b5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomePageScreen;
