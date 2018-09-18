import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter,Route,Switch,NavLink} from 'react-router-dom';
import './App.css';
import routes from './routes/routes';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <NavLink exact to='/'>RouteOne</NavLink>
          <NavLink to='/two'>RouteTwo</NavLink>
          <NavLink to='/three'>RouteThree</NavLink>
        </header>
        {routes}
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
