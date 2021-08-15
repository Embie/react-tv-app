import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login      from "./components/login.component";
import Episode    from "./components/episodes.component";
import Character  from "./components/chracter.component";
import SearchPage from './components/search.component';
import Location   from './components/location.component';
import Search     from './components/search.component';

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Logo</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/episode"}>Episodes</Link>
              </li>  
              <li className="nav-item">
                <Link className="nav-link" to={"/search"}>Search Character</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="outer">
        <div className="inner">
          <Switch>
            <Route exact path='/'      component={Login}  />
            <Route path="/sign-in"     component={Login}  />
            <Route path="/episode"     component={Episode} />
            <Route path="/character"   component={Character} />
            <Route path="/location"    component={Location} />
            <Route path="/search-page" component={SearchPage} />
            <Route path="/search"      component={Search} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;