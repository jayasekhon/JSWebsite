import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

// if want to add in project tags again:       
//<div className="foto" onClick={() => detailsModalShow(projects)}> 
// underneath <span className="portfolio-item d-block">
// and { " "} just outside iframe closing tag

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;
      var projects = this.props.resumeProjects.map(function (projects) {
        return (
          <div >
            <span className="project-date">{projects.startDate}</span>
            <img className="project-title-settings mt-3" src=
              "images/portfolio/BirdGang/BGFlightLogo.png"
              alt="BirdGang logo"
              width="550"
              height="300"
              ></img>
            <br />
            <br />
          <div
            className="col-sm-12 col-3"
            key={projects.title}
            style={{ cursor: "pointer" }}
          >

            <img src=
              "images/portfolio/BirdGang/allbosses.png"
              alt="BirdGang minibosses"
              width="250"
              align="right"></img>
            
            <h2 className="project-text">
                BirdGang was created as part of the Unviersity of Bristol Computer Science MEng Games Project. It was awarded a first class mark, and judged as “outstanding” by the panel, entering “truly professional territory".

                <br/><br/>
                I was selected to be Team Manager of the project from its inception. Given the scope of the project, a successful outcome required detailed planning and a common vision within the team. At the start, I ensured we spent time discussing our initial ideas, and implemented the Scrum model of Agile development to ensure user feedback analysis and team progress was communicated clearly during weekly Sprint Review and Retrospective sessions. This ensured we maintained consistent progress and met each deadline to a high standard. It also made certain all team members felt heard, respected, and free to voice their opinions without judgement. When inevitable disagreements arose, I led discussions and formed actionable points, establishing a culture of constructive criticism and candid feedback within the group. I also ensured we took a User-Centred Design approach, keeping the needs of end users at the forefront throughout. I discuss our project development strategies in more detail in the video seen below @ 5:20


                <br/><br/>
                In the game, players enter the world as BirdGang recruits and are tasked with finding bad AI people and ruining their day.  Players will face four miniboss rounds in the games duration. In each, they must work together to defeat them, using waypoints and help messages to communicate with one another. Each of the two-minute rounds are introduced by a cinematic cutscene and an audio overlay from the gang boss. AI bird flocks also populate the sky and target any players who remain still for too long. The game makes use of advanced AI systems, intuitive flight control scheme grounded in a physics engine, and includes over 52 unique models built in-house.
                <br/><br/>
                Click below to play the game (recommended browser is Chrome, game will not run on Safari):
                <br/><br/>
                <br/><br/>
                <a className="bouncy mx-auto language" target="_blank" href='https://jayasekhon.github.io/BirdGang/'>Play Now</a>
                </h2>
  
            <span className="portfolio-item d-block">

                <div>
                  <iframe
                    width="682"
                    height="400"
                    src="https://www.youtube.com/embed/aOmKyhrso0Q"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                    title="video"
                  />
                </div>
            </span>

          </div>
          </div>
          
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{projects}</div>
          </div>
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>
      </section>
    );
  }
}

export default Projects;
