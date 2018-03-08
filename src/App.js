import React, { Component } from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
// import Book from './components/Book/Book';
import Page from './components/Page/Page';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';
import './css/normalize.css';
import './css/skeleton.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router basename="/">
          <div>
              <Route path="/" component={Header} />
              <Route exact path="/" component={Home} />
              <Route path="/book" component={Page} />
              <Route path="/finaltable" component={Page} />
              <Route path="/workshops" component={Page} />
              <Route path="/about" component={Page} />
              <Route path="/contact" component={Contact} />
              <Route path="/" component={Footer} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
