const API_URL = process.env.REACT_APP_BASE_URL;

const fetchHeroes = (value) => {
    let baseURL = `${API_URL}/v1/public/characters`
    let ts = Date.now().toString()
    let apiKey = process.env.REACT_APP_API_KEY
    let privateKey = process.env.REACT_APP_PRIVATE_KEY
    let hash = getHash(ts, privateKey, apiKey)
    
    let url = `${baseURL}?ts=${ts}&apikey=${apikey}$hash=${hash}&nameStartsWith=${value}`
}