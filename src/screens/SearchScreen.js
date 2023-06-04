// In App.js in a new project

import * as React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar'
import useSearch from '../hooks/useSearch';
import ResultsList from '../components/ResultsList';

function SearchScreen() {
    const [searchText, setSearchText] = React.useState('food')
    const {searchApi, searchResults, isLoading} = useSearch(searchText)
    
    const onSubmitEditing = ()=>{
        searchApi(searchText)
    }

    const groupingWithPrice = (price='')=>{
        return searchResults.businesses.filter(item=>item.price === price)
    }
    return (
        <View style={styles.wrapper}>
                <SearchBar onChange={setSearchText} searchTextValue={searchText} onSubmitted={onSubmitEditing} />
                <ScrollView>
                <View style={{margin: 15}}>
                    <Text>Home Screen: {searchText}</Text>
                    <Text>results: {searchResults?.businesses?.length}</Text>
                    <Text>total: {searchResults?.total}</Text>
                    {isLoading&&<Text>loading...</Text>}
                    {!searchResults?.total?<Text>No Data!!!!!</Text>:(
                        <>
                            <ResultsList results={groupingWithPrice('$')} title='Cost Effictive' />
                            <ResultsList results={groupingWithPrice('$$')} title='Bit Pricer' />
                            <ResultsList results={groupingWithPrice('$$$')} title='Big spender' />
                            <ResultsList results={groupingWithPrice('$$$$')} title='Big Big spender' />
                        </>
                    )}
                </View>
        </ScrollView>
            </View>

    );
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#FFF',
    }
})

export default SearchScreen