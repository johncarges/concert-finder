import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import FindConcerts from './Components/FindConcerts';
import MyConcerts from './Components/MyConcerts';
import { useState, useEffect } from 'react';

const API_URL = "https://api.seatgeek.com/2"
const auth = process.env.REACT_APP_ENCODED_AUTH
const savedConcerts = "http://localhost:4000/concert"

function App() {

  const [searchResults,setSearchResults] = useState([])
  const [myConcerts, setMyConcerts] = useState([])
  const [searchAttempted, setSearchAttempted] = useState(false)

  useEffect(() => {
      fetch(savedConcerts)
          .then((response) => response.json())
          .then((data) => setMyConcerts(data))
  }, [])

  const handleUpdateMyConcerts = newConcerts => setMyConcerts(newConcerts)

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <FindConcerts 
            searchResults={searchResults}
            handleSearchSubmit={handleSearchSubmit}
            myConcerts={myConcerts}
            handleUpdateMyConcerts={handleUpdateMyConcerts}
            searchAttempted={searchAttempted}/>
        </Route>
        <Route exact path="/my-concerts">
          <MyConcerts 
            myConcerts={myConcerts}
            handleUpdateMyConcerts={handleUpdateMyConcerts}/>
        </Route>
      </Switch>
    </div>
  );

  function handleSearchSubmit(searchQuery){
    setSearchAttempted(true)

    const { type, query } = searchQuery
    let fetchURL; 
    const headers = {
      "Authorization": `Basic ${auth}`,
      }

    function doFetch(fetchURL){
      fetch(fetchURL, {
        method: "GET",
        headers: headers,
        redirect: "follow"
      })
        .then(r=>r.json())
        .then(data=>setSearchResults(data["events"]))
        .catch(error => console.log('error', error));
    }
    
    switch (type) {
      case "band" : 
        fetchURL = `${API_URL}/events?performers.slug=${cleanUpBandName(query)}`
        doFetch(fetchURL)
        break
      case "venue":
        fetch(`${API_URL}/venues?name=${query}`, {
          method: "GET",
          headers: headers,
          redirect: "follow"
        })
        .then(r=>r.json())
        .then(data => {
          const venueId = data.venues[0].id
          fetchURL=`${API_URL}/events?venue.id=${venueId}`
          doFetch(fetchURL)
        })
        break
      case "city":
        fetchURL = `${API_URL}/events?venue.city=${query}`
        doFetch(fetchURL)
        break
    }
    
    


  }

  // Helpers
  function cleanUpBandName(bandName) {
    return bandName.toLowerCase().replaceAll(" ", "-")
  }

}

export default App;
