// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//screens 
import SearchScreen from './src/screens/SearchScreen'
import ProductDetails from './src/screens/ProductDetails'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{title: 'Business Search'}} name="Home" component={SearchScreen} />
        <Stack.Screen options={{title: 'Product Details'}} name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;