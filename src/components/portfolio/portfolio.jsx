import React, { Component } from 'react';
import portfolioData from './portfolio.json';

console.log(portfolioData);

class Project extends Component {
  render(){
    console.log(this.props.project);
    return (
      <React.Fragment>
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href={"#modal-"+this.props.project.id} >
                <img alt src={this.props.project.thumb_url} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{this.props.project.name}</h5>
                    <p>{this.props.project.type}</p>
                  </div>
                </div>
                <div className="link-icon"><i className="icon-plus" /></div>
              </a>
            </div>
          </div> {/* item end */}
          <div id={"modal-"+this.props.project.id} className="popup-modal mfp-hide">
            <img className="scale-with-grid" src={this.props.project.banner_url} alt />
            <div className="description-box">
              <h4>{this.props.project.name}</h4>
              <p>{this.props.project.description.split('\n').map((item, key) => {
                return <span key={key}>{item}<br/></span>
              })}</p>
              <span className="categories"><i className="fa fa-tag" />{this.props.project.type}</span>
            </div>
            <div className="link-box">
              <a href={this.props.project.link_url}>Details</a>
              <a href="#" className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-01 End */}
      </React.Fragment>
    )
  }
}

export default class Portfolio extends Component {
  render() {
    let usersListBlock = '';
 
  if(portfolioData.length > 0) {
    usersListBlock = portfolioData.map( obj => {
      return (
        <Project project={obj} />
        // <Project key={obj.id} id={obj.id} imgPath={obj.avatar_url} name={obj.name} />
 			)
 	  })
   }
 
  //  return(
 	// <div className="row container">
 	// 	{usersListBlock}
 	// </div>
  //  )
    return (
      <React.Fragment>
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            {/* portfolio-wrapper */}
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {usersListBlock}
            </div> {/* portfolio-wrapper end */}
          </div> {/* twelve columns end */}
        </div> {/* row End */}
      </section>
      </React.Fragment>
    );
  }
}
