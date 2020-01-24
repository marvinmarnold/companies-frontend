import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const companies = require("./data/companies.json")

const a = 97;
const z = 123;
let alphabet = []

for(let i = a; i < z; i++) { 
    //convert the char code to string (Alphabets)
    var letter = String.fromCharCode(i);
    //print the result in console
    alphabet.push(letter)
}

class App extends Component {
  constructor() {
    super();
  }

  renderLetterLink(letter) {
    const toPath = "/directory/" + letter
    return <Link key={letter} to={toPath}>{letter}</Link>
  }

  renderNav() {
    console.log("path")
    console.log(this.props.location)
    return (
      <nav>
          <ul>
            {alphabet.map(this.renderLetterLink)}
          </ul>
        </nav>
    )
  }

  renderDirectory(node) {
        console.log("path")
    console.log(this.props.location)
    return (
      <div>
          {this.renderNav()}
          <h1>directory: {node.prefix}</h1>
      </div>
    )
  }

  renderCompany(node) {
        console.log("path")
    console.log(this.props.location)
    return (
      <div>
          {this.renderNav()}
          <h1>company: {node.prefix}</h1>
      </div>
    )
  }

  render() {

    return (
      <Router>
        <div>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/directory/:">
              {this.renderDirectory({prefix: "dir"})}
            </Route>
            <Route path="/company">
              {this.renderCompany({prefix: "company"})}
            </Route>
            <Route path="/">
              {this.renderDirectory({prefix: "a"})}

            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
