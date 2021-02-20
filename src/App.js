import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import Header from './Components/Header';
import PlantsPage from './Components/PlantsPage'
import HomePage from './Components/HomePage'



export default class App extends Component {
  render() {
      return (
          <div>
              <Router>
              <Header/>
                  <Switch>
                      <Route 
                          path="/Home" 
                          exact
                          render={(routerProps) => <HomePage {...routerProps} />} 
                      />
                      <Route 
                          path="/Plants" 
                          exact
                          render={(routerProps) => <PlantsPage {...routerProps} />} 
                      />
                     
                  </Switch>
              </Router>
          </div>
      )
  }
}
