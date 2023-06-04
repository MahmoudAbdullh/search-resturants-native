import axios from 'axios'
// const CLIENT_ID = "HFinPIFit5kSK7PRocOEcA"
const API_KEY = "8c1c7iZFwtZzCoVDKb6YFX7B9vRok5YQSI6CbwCm4uc7PJsVAf2Zt-U7X4yxadcdQsZYdS1pohEBy4jLax7zJUb8AmnylLIaOkEdeF9bd95Ouc8T5cAGkqEWqdp5ZHYx"

const client =  axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: `Bearer ${API_KEY}`,
        accept: 'application/json'
    }
    
})

export default client