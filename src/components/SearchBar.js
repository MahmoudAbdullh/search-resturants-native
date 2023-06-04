import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ searchTextValue, onChange, onSubmitted }) => {
    return (
        <View style={styles.background}>
            <Feather name="search" size={35} color="black" style={styles.iconStyles} />
            <TextInput placeholder='search' style={styles.inputStyle} value={searchTextValue} onChangeText={onChange} onSubmitEditing={onSubmitted} />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 10

    },
    inputStyle: {
        flexGrow: 1,
        fontSize: 18,
    },
    iconStyles: {
        marginEnd: 10,
        alignSelf: 'center',
        marginHorizontal: 15,
    }
})