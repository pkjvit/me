import React, { Component } from 'react';
export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            {/* portfolio-wrapper */}
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" title>
                    <img alt src="images/portfolio/describe.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Describe</h5>
                        <p>Android Application</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02" title>
                    <img alt src="images/portfolio/classic_keyboard.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Classic Keyboard</h5>
                        <p>Android Application</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-03" title>
                    <img alt src="images/portfolio/classic_cuboid.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Classic Cuboid</h5>
                        <p>Android Puzzle Game</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-04" title>
                    <img alt src="images/portfolio/dev.PNG" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>My Apps</h5>
                        <p>Google Play Developer</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-05" title>
                    <img alt src="images/portfolio/multi_theme.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Android Multi-theme UI</h5>
                        <p>Github sample code</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-06" title>
                    <img alt src="images/portfolio/database_debugger.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Android Database Debugger</h5>
                        <p>Android SDK</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-07" title>
                    <img alt src="images/portfolio/cblite_console.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>CouchbaseLite Console</h5>
                        <p>Android SDK</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-08" title>
                    <img alt src="images/portfolio/pagination_view.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Pagination View</h5>
                        <p>Android SDK</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>  {/* item end */}
            </div> {/* portfolio-wrapper end */}
          </div> {/* twelve columns end */}
          {/* Modal Popup
	      --------------------------------------------------------------- */}
          <div id="modal-01" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-describe.jpg" alt />
            <div className="description-box">
              <h4>Describe</h4>
              <p>Looking for tough words?<br />
Don't want to open other apps to search meaning?<br />

Welcome to Describe - A Look Up Dictionary<br />
Ads free | Battery free ( 0% battery drain a day for searching around 50 words )</p>
              <span className="categories"><i className="fa fa-tag" />Android Application</span>
            </div>
            <div className="link-box">
              <a href="https://play.google.com/store/apps/details?id=com.pkj.wow.describe">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-01 End */}
          <div id="modal-02" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-classic_keyboard.png" alt />
            <div className="description-box">
              <h4>Classic Keyboard</h4>
              <p>Double tap or Long Press to define any word from any application.<br />
+No need of any dictionary application. <br />
Just... long press to see word mean of any word instantly ;-)<br />
Simple and Smart Keyboard design with Basic functionality.</p>
              <span className="categories"><i className="fa fa-tag" />Android Application</span>
            </div>
            <div className="link-box">
              <a href="https://play.google.com/store/apps/details?id=com.pkj.classic.keyboard">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-02 End */}
          <div id="modal-03" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-classic_cuboid.png" alt />
            <div className="description-box">
              <h4>Classic Cuboid</h4>
              <p>This is a brain puzzle game. On a given board with starting and finishing positions, 
                the aim is to put the cuboid to the finishing position vertically so that it can move to next level. 
                The strategy requires to finish the level in minimum number of steps.<br />
Cuboid Movement : Slide & Proximity.</p>
              <span className="categories"><i className="fa fa-tag" />Android Puzzle Game</span>
            </div>
            <div className="link-box">
              <a href="https://play.google.com/store/apps/details?id=com.puzzle.unblock.subway.candy.clash.classic.cuboid">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-03 End */}
          <div id="modal-04" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-dev.png" alt />
            <div className="description-box">
              <h4>My Apps</h4>
              <p>Play | Life | Easy<br />
                I love to create games and application for fun and easy life.

              </p>
              <span className="categories"><i className="fa fa-tag" />Google Play Developer</span>
            </div>
            <div className="link-box">
              <a href="https://play.google.com/store/apps/dev?id=8206532032331463397">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-04 End */}
          <div id="modal-05" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-multi_theme.jpg" alt />
            <div className="description-box">
              <h4>Android Multi-theme UI</h4>
              <p>Android multi theme UI implementation with day night mode and much more.</p>
              <span className="categories"><i className="fa fa-tag" />Github sample code</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/pkjvit/Android-Multi-Theme-UI">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-05 End */}
          <div id="modal-06" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-database_debugger.png" alt />
            <div className="description-box">
              <h4>Android Database Debugger</h4>
              <p>Android Data Debugger is a sdk tool which provides debug feature for Android Applications to view all databases and query on them using smart query templates.<br />
                 Supports SQLite database and all versions of CouchbaseLite database.</p>
              <span className="categories"><i className="fa fa-tag" />Android SDK</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/pkjvit/Android-Data-Debugger">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-06 End */}
          <div id="modal-07" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-cblite_console.png" alt />
            <div className="description-box">
              <h4>CouchbaseLite Console</h4>
              <p>A debugging tool for couchbase lite android applications to track their database and syncing. And show all the gathered information on a debug console.</p>
              <span className="categories"><i className="fa fa-tag" />Android SDK</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/pkjvit/couchbase-lite-android-console">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-07 End */}
          <div id="modal-08" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-pagination_view.png" alt />
            <div className="description-box">
              <h4>Pagination View</h4>
              <p>Pagination view for Android to show large amount of data just like Database paginator view.</p>
              <span className="categories"><i className="fa fa-tag" />Android SDK</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/pkjvit/PaginationView">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-01 End */}
        </div> {/* row End */}
      </section>
      </React.Fragment>
    );
  }
}
