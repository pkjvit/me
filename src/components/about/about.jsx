import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="about">
        <div className="bg" />
        <div className="row">
          <div className="three columns">
          </div>
          <div className="seven columns ">
            <img className="profile-pic" src="images/profilepic.jpeg" alt = ""/>
            <h2>About Me</h2>
            <p>I am an experienced Android developer and an <span>opensource contributor</span> interested in the newest technologies and trends. 
            I am creative and good at UX/UI and love to singing in free time.
               
            </p>
            <p>I have in total over seven years of active Android development experince includes games, apps and sdk's development. I have worked on numerous projects 
               used by hundreds of thousands of people.<br />
               I am eager to constantly learn new things. At the moment my focus on the new Java language features, RxJava, React Native, 
               architectural patterns on Android (MVVM, MVP etc.), Android sdk's and tools to make development easy and fast.</p>
            
          </div> {/* end .main-col */}
        </div>
      </section>
      </React.Fragment>
    );
  }
}
