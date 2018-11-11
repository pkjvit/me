import React, { Component } from 'react';
export default class Career extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="resume">
        {/* Education
      ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Rajasthan Technical University, Kota(India)</h3>
                <p className="info">B.Tech in Computer Science <span>•</span> <em className="date">June 2012</em></p>
                <p>
                  I did B.Tech in computer science from VIT, Jaipur and Apart from studies I was expert in practicals and organize events.
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Education */}
        {/* Work
      ----------------------------------------------- */}
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Decurtis Copertaions</h3>
                <p className="info">Software Engineer <span>•</span> <em className="date">June 2017 - Present</em></p>
                <p>
                  My role is to R&D on communication through hardwares and I achieve success in sync between multiple devices through WiFi-Hotspot and WiFi-Direct P2P communication.
                  MRZ card reader, BLE. Apart from this I have created two tools, one for debug sync issues which accelerate work and unblock team from syncing environment issues and 
                  Second tool is used to debug data most of the time we have data issues but it takes a lot of time of multiple teams to track and find the root cause, this tool is used 
                  to explore database (couchbase-lite and sqlite) and query on the database to find out specific data. Both the tools are opensource and easy to inject in any android project.
                  <br />
                  Apart from this I am working on application for cruise to manage activities, customers and provide them best checkin, onboard/ashore facilities.
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>A3Logics</h3>
                <p className="info">Software Engineer <span>•</span> <em className="date">April 2015 - June 2017</em></p>
                <p>
                  Worked on muliple projects one is on child-parent control app : this restrict childs to play with phone for a limited time and fully controlled by parent 
                  also it interupt quiz after a specific time related to child studies, parent can track app usages, the chellenge is to create whole app work offline with great UX/UI 
                  for that I have to redesign database and provide best UX to the same. other is like booking any service like cab, plumber, electrician etc.
                  It is like uber we can track service provider and can check his profile.
                  <br />
                  Apart from this I have created a script which is used to reduce the size of application by 40-50% by compressing image resources of the app. 
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Work */}
        {/* Skills
      ----------------------------------------------- */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>I am creative, innovative that helps in achieve great UX/UI and I am good at management, love to perfection(fast and highly scalable) and according to me process is the key to achieve best.
              Apart from this I am lazy, believe in work with fun and the most problem solver. 
            </p>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand android" /><em>Android</em></li>
                <li><span className="bar-expand java" /><em>Java</em></li>
                <li><span className="bar-expand c-plus-plus" /><em>C++</em></li>
                <li><span className="bar-expand react-js" /><em>React JS</em></li>
                <li><span className="bar-expand photoshop" /><em>Photoshop</em></li>
                {/* <li><span className="bar-expand css" /><em>CSS</em></li>
                <li><span className="bar-expand html5" /><em>HTML5</em></li>
                <li><span className="bar-expand jquery" /><em>jQuery</em></li> */}
              </ul>
            </div>{/* end skill-bars */}
          </div> {/* main-col end */}
        </div> {/* End skills */}
      </section>
      </React.Fragment>
    );
  }
}