// Include all the required imports.
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, Text, TouchableOpacity, FlatList, DrawerLayoutAndroidComponent, KeyboardAvoidingViewBase } from 'react-native';
import { globalStyles } from '../styles/global';

export default function RecordsScreen({ route, navigation }) {
    /* Hardcode a "database"/list of movies. */
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log(route.params.id)
        fetch(`https://hidden-sands-53588.herokuapp.com/players/${route.params.id}/pr`)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (

        <View style={{ flex: 1, padding: 24 }}>
            {isLoading ? <ActivityIndicator /> : (
                <Text>Personal Record : {data[0].max}</Text>
            )}
        </View>
    );
};
