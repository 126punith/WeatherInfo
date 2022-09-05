import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import CountryDetails from '../screens/CountryDetails';

import SearchScreen from '../screens/SearchScreen';

import WeatherDetail from '../screens/WeatherDetail';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='SearchCountries' component={SearchScreen} />
      <Stack.Screen name='CountryDetails' component={CountryDetails} />
      <Stack.Screen name='WeatherDetail' component={WeatherDetail} />
    </Stack.Navigator>
  );
}
