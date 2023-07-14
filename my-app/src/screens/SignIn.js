import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
// import { backEndApi } from '../api/backEndApi';

const SignIn = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <View>
      <Text>SignIn</Text>
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

export default SignIn;
