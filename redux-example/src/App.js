import "./App.css";
import logo from "./logo.svg";
import React, { Component } from "react";

import Posts from "./components/Posts";
import PostForm from "./components/PostForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1> Welcome to React </h1>

        </header>
        <PostForm /> 
        <hr />
        <Posts />
        <hr />
        
      </div>
    );
  }
}

export default App;
