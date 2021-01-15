/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

//for review
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SearchScreen from './screens/SearchScreen';
import ResturantDetail from './screens/ResturantDetail';
const Stack = createStackNavigator();

function NavStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#621FF7',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{title: 'Search Screen'}}
      />
      <Stack.Screen
        name="ResturantDetail"
        component={ResturantDetail}
        options={{title: 'Resturant Detail'}}
      />
    </Stack.Navigator>
  );
}

export function App() {
  return (
    <NavigationContainer>
      <NavStack />
    </NavigationContainer>
  );
}
