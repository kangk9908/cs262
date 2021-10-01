import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList, DrawerLayoutAndroidComponent, KeyboardAvoidingViewBase } from 'react-native';
import { globalStyles } from '../styles/global';


export default function DetailsScreen({ route, navigation }) {
    return (
        <View>
            {/* Display the fields of the received movie object. */}
            <Text style = {globalStyles.title}>{ route.params.title }</Text>
            <Text>{ route.params.rating }</Text>
            <Text>{ route.params.description }</Text>
        </View>
    );
}