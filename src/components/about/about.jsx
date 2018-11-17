import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="about">
        <div className="row">
          <div className="three columns">
          </div>
          <div className="seven columns ">
            <img className="profile-pic" src="images/profilepic.jpeg" alt = ""/>
            <h2>About Me</h2>
            <p>I am an experienced Android developer and an <span>opensource contributor</span> interested in the newest technologies and trends. 
            I am creative and good at UX/UI and<br />love to singing in free time.
               
            </p>
            <p>I have in total over six years of active Android development experince includes games, apps and sdk's development. I have worked on numerous projects 
               used by hundreds of thousands of people.<br />
               I am eager to constantly learn new things. At the moment my focus on the new Java language features, RxJava, React Native, 
               architectural patterns on Android (MVVM, MVP etc.), Android sdk's and tools to make development easy and fast.</p>
            
            {/* <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Jonathan Doe</span><br />
                  <span>1600 Amphitheatre Parkway<br />
                    Mountain View, CA 94043 US
                  </span><br />
                  <span>(123)456-7890</span><br />
                  <span>anyone@website.com</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
            </div> end row */}
          </div> {/* end .main-col */}
        </div>
      </section>
      </React.Fragment>
    );
  }
}