import { useState, useEffect } from "react"
import yelp from '../api/yelp'


const useSearch = ()=>{
    const [isLoading, setIsLoading] = useState(false)
    const [searchResults, setSearchResults] = useState({
        businesses: [],
        total: 0,
        region: {}
    })
    const searchApi = async(term='Food')=>{
        setIsLoading(true)
        try {
            const { data } = await yelp.get('/search', {
                params: {
                    limit: 50,
                    location: 'NYC',
                    term,
                }
            })
            setSearchResults(data)
            setIsLoading(false)
            // .then(res=>{
            //     setSearchResults(res.data)
            //     setIsLoading(false)
            // })
            // .catch((err)=>{
            //     console.log(err)
            //     setIsLoading(false)
            // })
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }

    }

    useEffect(() => {
        searchApi()
    
      return () => {
      }
    }, [])
    

    return {
        searchApi,
        searchResults,
        isLoading
    }
    
}


export default useSearch