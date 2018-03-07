import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Book from './components/cmsPages/Book';
import FinalTable from './components/cmsPages/FinalTable';
import Workshops from './components/cmsPages/Workshops';
import About from './components/cmsPages/About';
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
              <Route extact path="/book" component={Book} />
              <Route extact path="/finaltable" component={FinalTable} />
              <Route extact path="/workshops" component={Workshops} />
              <Route extact path="/about" component={About} />
              <Route path="/contact" component={Contact} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
