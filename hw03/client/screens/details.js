import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, Text, TouchableOpacity, FlatList, DrawerLayoutAndroidComponent, KeyboardAvoidingViewBase } from 'react-native';
import { globalStyles } from '../styles/global';


export default function DetailsScreen({ route, navigation }) {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://hidden-sands-53588.herokuapp.com/players/')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <View style={globalStyles.container}>
            {/* Display the fields of the received movie object. */}
            <Text style={globalStyles.title}>{ route.params.email }</Text>
            <Text>ID : { route.params.id }</Text>
            <Text>Aka : { route.params.name }</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Records', route.params)}>
                <Text>Click to view Personal Record.</Text>
            </TouchableOpacity>
        </View>
    );
};