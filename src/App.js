import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './components/home.js'
import Header from './components/header.js';
import Footer from './components/footer.js';
import Suggestion from './components/suggestion.js';

class App extends Component {
  render() {
    return (
      

      <div className="App">
      <MuiThemeProvider>
        
          <Header/> 
          <Home/>
          <Suggestion/>
          <Footer/>
          </MuiThemeProvider>
      </div>
      
    );
  }
}

export default App;
