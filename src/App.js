import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import './App.css';
import './css/normalize.css';
import './css/skeleton.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
              <Route path="/" component={Header} />
              <Route exact path="/" component={Home} />
              <Route path="/contact" component={Contact} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
