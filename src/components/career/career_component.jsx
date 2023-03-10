import React, { Component } from 'react';
import careerData from './work_data.json';
import educationData from './education_data.json';

console.log(careerData);
console.log(educationData);

class Work extends Component {
  render() {
    console.log(this.props.work);
    return (
        <React.Fragment>
          <div className="timeline-block">
            <div className="timeline-ico">
              <img alt src={this.props.work.company_logo_url} />
            </div>
            <div className="timeline-header">
              <h3>{this.props.work.degination}</h3>
              <p>{this.props.work.start_date} - {this.props.work.end_date}</p>
            </div>
            <div className="timeline-content">
              <h4>{this.props.work.company_name}</h4>
              <p>{this.props.work.summery}</p>
            </div>
          </div> {/* /timeline-block */}
        </React.Fragment>
    );
  }
}

class Education extends Component {
  render() {
    console.log(this.props.education);
    return (
        <React.Fragment>
          <div className="timeline-block">
            <div className="timeline-ico">
              <img alt src="images/career/ic_education.png" />
            </div>
            <div className="timeline-header">
              <h3>{this.props.education.degree}</h3>
              <p>{this.props.education.start_date} - {this.props.education.end_date}</p>
            </div>
            <div className="timeline-content">
              <h4>{this.props.education.university_name}
              </h4>
              <p>{this.props.education.subject}<br/>
              {this.props.education.clg_name}</p>
            </div>
          </div> {/* /timeline-block */}
        </React.Fragment>
    );
  }
}

export default class Career extends Component {
  render() {
    let workListBlock = '';
    if(careerData.length > 0) {
      workListBlock = careerData.map( obj => {
        return (
          <Work key={obj.id} work={obj} />
        )
      })
    }

    let educationListBlock = '';
    if(educationData.length > 0) {
      educationListBlock = educationData.map( obj => {
        return (
          <Education key={obj.id} education={obj} />
        )
      })
    }

    return (
      <React.Fragment>
      <section id="resume">

        {/* Work - experience ------ */}
        <div class="row resume-timeline">
          <div class="col-twelve resume-header">
            <h3>Resume</h3>
            <h1>More of my credentials.</h1>
            <br />
            <h2>Work Experience</h2>
          </div>
          <div className="col-twelve">
            <div className="timeline-wrap">
              {workListBlock}
            </div> {/* /timeline-wrap */}   			
          </div> {/* /col-twelve */}
        </div>

        {/* Education ----- */}
        <div class="row resume-timeline">
          <div class="col-twelve resume-header">
            <h2>Education</h2>
          </div>
          <div className="col-twelve">
            <div className="timeline-wrap">
              {educationListBlock}
            </div> {/* /timeline-wrap */}   			
          </div> {/* /col-twelve */}
        </div>
        
        {/* Skills
      ----------------------------------------------- */}
      <br />
        <div className="row skill">
          <div className="timeline-header">
            <h1><span>Skills</span></h1>
          </div>
          <div className="timeline-content">
            <p>I am creative, innovative that helps in achieve great UX/UI and I am good at management, love to perfection(fast and highly scalable) and according to me process is the key to achieve best.
              Apart from this I am lazy, believe in work with fun and the most problem solver. 
            </p>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand android" /><em>Android</em></li>
                <li><span className="bar-expand java" /><em>Kotlin | Java</em></li>
                <li><span className="bar-expand c-plus-plus" /><em>DSA | C++</em></li>
                {/* <li><span className="bar-expand couchbase" /><em>Couchbase</em></li> */}
                <li><span className="bar-expand react-js" /><em>Flutter | React JS</em></li>
                <li><span className="bar-expand photoshop" /><em>Figma | Photoshop</em></li>
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