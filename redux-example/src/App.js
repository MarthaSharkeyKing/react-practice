import "./App.css";
import logo from "./logo.svg";
import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux"

import Posts from "./components/Posts";
import PostForm from "./components/PostForm";

import store  from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

        </header>
        <PostForm /> 
        <hr />
        <Posts />
        <hr />
        
      </div>
      </Provider>

    );
  }
}

export default App;
