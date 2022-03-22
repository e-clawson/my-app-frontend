import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from './components/Home';
import Header from './components/Header';
import Navbar from './components/Navbar.js';
import MusicCard from './components/MusicCard';
import MusicForm from './components/MusicForm';
import MusicContainer from './containers/MusicContainer';
import UserProfile from './components/UserProfile';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Header storename="Double Bass DataBase" slogan="The Place For Music of the Double Bass!"/>
        <Switch>
          <Route path="/music/new">
            <MusicForm />
          </Route>

          <Route path="/music/:id">
            <MusicCard />
          </Route>

          <Route path="/music">
            <MusicContainer />
          </Route>

          <Route path="/profile">
            <UserProfile />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
