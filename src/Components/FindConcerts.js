import { useEffect } from "react"
import ResultsContainer from "./ResultsContainer"
import SearchContainer from "./SearchContainer"



const API_URL = "https://api.seatgeek.com/2"
const auth = process.env.REACT_APP_ENCODED_AUTH

function FindConcerts({searchResults, handleSearchSubmit}) {
    
    // TEST FETCH
    // useEffect(()=> {
    //     const sampleFetchURL = `${API_URL}/performers?slug=new-york-mets`
    //     const headers = {
    //         "Authorization": `Basic ${auth}`,
    //         //"Cookie": "datadome=2pTKXGZH3jbIN2PvDv9b0nQ1JvEXOJdoNDQB6FAyqs1_MM95OcfUMU0W~Q3mSy28MSPB0RrI0jKjRylg3tqmZKElrLjM5YFAWPU3UXXUrmq57hRy2ZKEMBnOb_yMQ11q"
    //     }
    //     fetch(sampleFetchURL, {
    //         method: "GET",
    //         headers: headers,
    //         redirect: "follow"
    //     })
    //         .then(r=>r.json())
    //         .then(console.log)
    //         .catch(error => console.log('error', error));

        
    // },[])
    

    return (
        <div className="find-concerts-container">
            <h1>Find Concerts component goes here</h1>
            <SearchContainer handleSubmit={handleSearchSubmit}/>
            <ResultsContainer searchResults={searchResults}/>
        </div>
    )
}

export default FindConcerts

