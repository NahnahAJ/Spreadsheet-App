import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { backEndApi } from '../api/backEndApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const SIGNUP_URL = '/signup'

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleSubmit = async () => {
    try {
      const userData = {
        user: {
          name: name,
          email: email,
          password: password
        }
      };
  
      const response = await backEndApi.post(SIGNUP_URL, JSON.stringify(userData), {
        headers: {
          'Content-Type': 'application/json',
          "withCredentials": "true"
        },
      });
      console.log(response.data);
      
      const jwtToken = response.headers.get('Authorization').split('Bearer ')[1];
      console.log(jwtToken);
      await AsyncStorage.setItem('token', jwtToken);
      navigation.navigate('Login');

    } catch (err) {
      console.log(err);
    }
  };  


  
  return (
    <View>
      <Text>Signup</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={nameInput => setName(nameInput)}
      />
      <TextInput 
        style={styles.input}
        placeholder="Email"
        value={email}
        autoCapitalize='none'
        autoCorrect={false}
        autoFocus={true}
        onChangeText={emailInput => setEmail(emailInput)}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Password"
        autoCapitalize='none'
        autoCorrect={false}
        value={password}
        onChangeText={passwordInput => setPassword(passwordInput)}
      />
      <Button title="Sign In"
        onPress={() => handleSubmit()}
      />
    </View>
  )
};

const styles = StyleSheet.create({ 
  input: { 
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default Signup;
