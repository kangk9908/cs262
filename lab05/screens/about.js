import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function AboutScreen({ navigation }) {
    return (
        <View style = {globalStyles.about}>
            <Text>This application lists movies and movie reviews.</Text>
        </View>
    );
}