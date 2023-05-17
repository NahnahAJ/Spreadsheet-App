import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/MainScreen';
import SpreadsheetScreen from './screens/SpreadsheetScreen';
import SearchScreen from './screens/SearchScreen';
import AddPropertyScreen from './screens/AddPropertyScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} options={{ title: 'Spreadsheets' }} />
        <Stack.Screen name="Spreadsheet" component={SpreadsheetScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="AddProperty" component={AddPropertyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
