import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
// import MapView from 'react-native-maps';

import yelp from '../api/yelp'
const ProductDetails = ({ route, navigation }) => {
    const { id } = route?.params || {}
    const [details, setDetails] = useState({})
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        yelp.get(`/${id}`)
            .then(response => {
                setLoading(false)
                setDetails(response.data)
            })
            .catch(err => {
                setLoading(false)
                setDetails(response.data)
            })

        return () => {

        }
    }, [id])
    // console.log(details)
    return (
        <View style={{ margin: 15 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 5, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                {details.name}
            </Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 5 }}>
                {details.is_closed ? (
                    <>
                        <FontAwesome5 name="door-closed" size={24} color="#ff0e0e" /> Closed
                    </>
                ) : (
                    <>
                        <FontAwesome5 name="door-open" size={24} color="#22bb33" /> Open
                    </>
                )}
            </Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 5 }}>Phone: {details.display_phone}</Text>
            <View>
                <FlatList
                    horizontal
                    data={details?.photos || []}
                    keyExtractor={(photo) => photo}
                    renderItem={({ item }) => (
                        <Image source={{ uri: item }} style={{ width: 250, height: 150, margin: 5 }} />
                    )}
                />
            </View>

            <View marginVertical={20} style={{ height: 300 }}>
                {/* <MapView
                    initialRegion={{
                        latitude: details.coordinates?.latitude,
                        longitude: details.coordinates?.longitude,
                    }}
                /> */}
            </View>
        </View>
    )
}

export default ProductDetails

const styles = StyleSheet.create({})