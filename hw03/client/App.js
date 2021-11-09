// **********************************************
// * App.js for cs262-lab05                     *
// * Professor Keith VanderLinden               *
// * Done by: Kun Kang                          *
// * 30 September 2021                          *
// **********************************************

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PlayerScreen from "./screens/player";
import DetailsScreen from "./screens/details";
import RecordsScreen from "./screens/record";
import AboutScreen from "./screens/about";
import { globalStyles } from './styles/global';
import { Button, View, Text, TouchableOpacity, FlatList, DrawerLayoutAndroidComponent, KeyboardAvoidingViewBase } from 'react-native';
import React, { useState } from 'react';
import Header from "./shared/header"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Players" component={PlayerScreen} options={({ navigation }) => ({
          headerRight: () => (
            <Header navigation={navigation} />
          )
        })} />
        <Stack.Screen name="Details" component={DetailsScreen} options={({ navigation }) => ({
          headerRight: () => (
            <Header navigation={navigation} />
          )
        })} />
        <Stack.Screen name="Records" component={RecordsScreen} options={({ navigation }) => ({
          headerRight: () => (
            <Header navigation={navigation} />
          )
        })} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}