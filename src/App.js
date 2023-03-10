import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Career from './components/career/career_component';
import Portfolio from './components/portfolio/portfolio_component'; 
// import Blogs from './components/blogs/blogs';
import Footer from './components/footer/footer';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Portfolio />
        <Career />
        {/* <Blogs /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
