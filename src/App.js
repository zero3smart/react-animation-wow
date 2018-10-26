import React, { Component } from 'react';
import Feed from './components/Feed';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Build UI</h1>
        </header>
        <Feed />
      </div>
    );
  }
}

export default App;
