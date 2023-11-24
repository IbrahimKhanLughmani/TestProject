import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';

const Stack = createStackNavigator();

export default () => {
  return(
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={() => ({
          headerShown: false,          
        })}>
        <Stack.Screen initialRouteName="Home" name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}