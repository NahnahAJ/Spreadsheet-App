import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Button } from 'react-native';
import { backEndApi } from '../api/backEndApi';

const SignOutButton = () => {

  const handleLogout = async () => {
    const token = await AsyncStorage.getItem('token');
    console.log(token);
    try {
      const response = await backEndApi.delete('/logout', {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
    console.log(response.data);  
    await AsyncStorage.removeItem('token');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Button
      title="Sign Out"
      onPress={() => {
        handleLogout();
      }}
    />
  );
};

export default SignOutButton;