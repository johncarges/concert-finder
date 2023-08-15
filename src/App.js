import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import FindConcerts from './Components/FindConcerts';
import MyConcerts from './Components/MyConcerts';
import { useState } from 'react';

const API_URL = "https://api.seatgeek.com/2"
const auth = process.env.REACT_APP_ENCODED_AUTH

function App() {

  const [searchResults,setSearchResults] = useState([])

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <FindConcerts 
            searchResults={searchResults}
            handleSearchSubmit={handleSearchSubmit}/>
        </Route>
        <Route exact path="/my-concerts">
          <MyConcerts />
        </Route>
      </Switch>
    </div>
  );

  function handleSearchSubmit(searchQuery){
    
    const { type, query } = searchQuery
    let fetchURL; 
    const headers = {
      "Authorization": `Basic ${auth}`,
      }

    switch (type) {
      case "band" : 
        fetchURL = `${API_URL}/events?performers.slug=${cleanUpBandName(query)}`
        break
      case "venue":
        fetchURL=""
        break
      case "city":
        fetchURL=""
        break
    }
    
    fetch(fetchURL, {
      method: "GET",
      headers: headers,
      redirect: "follow"
  })
      .then(r=>r.json())
      .then(data=>setSearchResults(data["events"]))
      .catch(error => console.log('error', error));


  }

function cleanUpBandName(bandName) {
  return bandName.toLowerCase().replaceAll(" ", "-")
}

}

export default App;
