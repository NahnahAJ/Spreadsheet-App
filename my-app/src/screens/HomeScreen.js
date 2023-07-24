import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import SignOutButton from '../components/SignOut';

const data = [ {id: 1, name: 'Sign Up'}, {id: 2, name: 'Pricing Guide'}]

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>Alveo Hive</Text>
      <FlatList keyExtractor={(id) => id.id}
        data={data}
        renderItem={({ item }) => {
          return <Button title={item.name} onPress={() => navigation.navigate(item.name)} />
        }}
      />
      <Text> Welcome to ALVEO HUB</Text>
      <Text>Organize, advertize and share your properties</Text>
      <Button title='Add Property' onPress={() => navigation.navigate('Add Property')}/>
      <Button title='My Properties' />
      <Button title='Requests' />
      <Button title="Post Request" onPress={() => navigation.navigate('Post')} />
      <Button title='Logins' onPress={() => navigation.navigate('Login')} />
      <SignOutButton />
    </View>
  )
};

export default HomeScreen;
