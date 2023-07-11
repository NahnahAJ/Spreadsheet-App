import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Home Screen</Text>
      <Button title='Home'
        onPress={()=> navigation.navigate('Home')}
      />
    </View>
  )
};

export default HomeScreen;
