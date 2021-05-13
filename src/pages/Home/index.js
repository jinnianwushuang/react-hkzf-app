/*
 * @Date           : 2021-05-14 01:28:11
 * @FilePath       : /react-hkzf-app/src/pages/Home/index.js
 * @Description    :
 */
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import News from "../News";

export default class Home extends Component {
  render(h) {
    return (
      <div>
        <Router>
          <Route path="/Home/News" component={News}></Route>

          <div> 这是 首页</div>
        </Router>
      </div>
    );
  }
}
