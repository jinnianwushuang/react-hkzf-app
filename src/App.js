/*
 * @Date           : 2021-05-14 00:44:44
 * @FilePath       : /react-hkzf-app/src/App.js
 * @Description    :
 */
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CityList from "./pages/CityList";
import { Button } from "antd-mobile";
function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              
                <Link to="/Home">home    </Link>
              
              
            </li>
            <li>
              <Link to="/CityList"> CityList  </Link>
            </li>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/CityList">
            <CityList />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/" component={Home }>
        
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
