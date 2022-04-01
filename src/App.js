import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from './components/Home';
import Header from './components/Header';
import Navbar from './components/Navbar.js';
import MusicCard from './components/Music/MusicCard';
import MusicForm from './components/Music/MusicForm';
import MusicContainer from './containers/MusicContainer';
import UserProfile from './components/User/UserProfile';
import About from './components/About';
import Login from './components/User/Login';
import Logout from './components/User/Logout';
import { UserContext } from './context/user';
import { useEffect, useContext } from 'react';
import SignUp from './components/User/SignUp';
// import { Notification } from './components/Notification';


function App() {
  const {user, setUser} = useContext(UserContext);

  useEffect(() => {
    fetch ("http://127.0.0.1:9393/me")
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => {
          setUser(user)
        });
      } else {
        resp.json().then((error) => console.log(error.error))
      }
    })
    .catch(e => console.log(e))
  }, [user, setUser]);

  return (
    <div className="App">
      <Router>
       {/* <Notification />  */}
        <Navbar user={user}/>
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

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/logout">
            <Logout />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
        {/* <Notification /> */}
      </Router>
    </div>
  );
}

export default App;