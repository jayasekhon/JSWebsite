import React, { Component, createRef } from "react";
import Typical from "react-typical";

// for old div
// <div className="mx-auto text-center language">
// for old name
// <Typical steps={[name]} wrapper="p" />

class Header extends Component {
  titles = [];


  constructor() {
    super();
    this.state = { checked: false };
  }

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles.map(x => [ x, 1500 ] ).flat();
      //can make x in [] x.toUpperCase()
    }

    const HeaderTitleTypeAnimation = React.memo( () => {
      return <Typical className="title-styles" steps={this.titles} loop={100} />
    }, (props, prevProp) => true);

    return (
      <header id="home" style={{ height: window.innerHeight - 140, display: 'block' }}>
        <div className="row aligner" style={{height: '100%'}}>
          <div className="col-md-12">
            <div>
              <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
              <br/>
              <h1 className="mb-0 col-8">
                Jaya Sekhon
                <span key={"linkedIn"} className="m-4">
                  <a href={"https://www.linkedin.com/in/jaya-sekhon"} target="_blank" rel="noopener noreferrer">
                    <i className={"fab fa-linkedin"}></i>
                  </a>
                </span>
              </h1>              
 
              <div className="title-container">
                <HeaderTitleTypeAnimation />
                
              </div>
              <div>
                <h1>
                    <button className="bouncy mx-auto language" onClick={() => document.getElementById('portfolio').scrollIntoView({behavior: 'smooth'})}>Projects</button>
                    <a> </a>
                    <button className="bouncy mx-auto language" onClick={() => document.getElementById('resume').scrollIntoView({behavior: 'smooth'})}>Experience</button>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      
    );
  }
}
export default Header;
