import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const ResultsList = ({ title, results }) => {
    if (!results.length) {
        return null
    }
    const { navigate } = useNavigation()
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigate('ProductDetails', { id: item.id })}>
                        <View style={{ margin: 5 }}>
                            <Image source={{ uri: item.image_url }} style={{ width: 250, height: 150 }} />
                            <Text style={{ margin: 5 }}>{item.name}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text>{item.rating} Stars</Text>
                                <Text style={{ marginHorizontal: 5 }}>|</Text>
                                <Text>{item.review_count} Review</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default ResultsList

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 10
    }
})