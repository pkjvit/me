import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
            {/* <li><a className="smoothscroll" href="#blogs">Blogs</a></li> */}
          </ul> {/* end #nav */}
        </nav> {/* end #nav-wrap */}
        <div className="row banner">
          <div className="row">
            <img className="header-logo" src="images/dev.png" alt = ""/>
          </div>
          <div className="banner-text">
            <h4 className="header-subtext1">Android Developer</h4>
            <h4 className="header-text1">Pankaj Jangid</h4>
            {/* <h3>I'm a Manila based <span>graphic designer</span>, <span>illustrator</span> and <span>webdesigner</span> creating awesome and
              effective visual identities for companies of all sizes around the globe. Let's <a className="smoothscroll" href="#about">start scrolling</a>
              and learn more <a className="smoothscroll" href="#about">about me</a>.</h3> 
              <hr />*/}
            <hr />
            <ul className="social">
              <li><a href="https://www.facebook.com/pankajangid"><i className="fa fa-facebook" /></a></li>
              <li><a href="https://github.com/pkjvit"><i className="fa fa-github" /></a></li>
              {/* <li><a href="https://www.facebook.com/pankajangid"><i className="fa fa-medium" /></a></li> */}
              {/* <li><a href="#"><i className="fa fa-twitter" /></a></li> */}
              <li><a href="https://plus.google.com/+PankajJangid91"><i className="fa fa-google-plus" /></a></li>
              <li><a href="https://www.linkedin.com/in/pankajkumarjangid/"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://www.instagram.com/pankajjangid_/"><i className="fa fa-instagram" /></a></li>
              {/* <li><a href="https://dribbble.com/pankajjangid"><i className="fa fa-dribbble" /></a></li> */}
              {/* <li><a href="#"><i className="fa fa-skype" /></a></li> */}
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
        </p>
      </header>
      </React.Fragment>
    );
  }
}