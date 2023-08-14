import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import { Route, Switch } from 'react-router-dom';
import FindConcerts from './Components/FindConcerts';
import MyConcerts from './Components/MyConcerts';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <FindConcerts />
        </Route>
        <Route exact path="/my-concerts">
          <MyConcerts />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
