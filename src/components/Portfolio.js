import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
// import "animate.css";
import TrackVisibility from "react-on-screen";

export const Portfolio = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "React.js & Bootstrap",
      imgUrl: projImg1,
      tabAttrs: "https://reduno96.github.io/Third-Tempalte/",
    },
    {
      title: "Dashboard",
      description: "Html & Css3 & JavaScript",
      imgUrl: projImg2,
      tabAttrs: "https://reduno96.github.io/Template-Five/",
    },
    {
      title: "Business Startup",
      description: "Html & Css3 & JavaScript",
      imgUrl: projImg3,
      tabAttrs: "https://reduno96.github.io/Third-Tempalte/",
    },
    {
      title: "Business Startup",
      description: "JavaScript & Boostrap",
      imgUrl: projImg4,
      tabAttrs: "https://reduno96.github.io/Template-Four/",
    },
    {
      title: "Some Application Jacascript",
      description: "API & Javascript",
      imgUrl: projImg5,
      tabAttrs: "https://reduno96.github.io/Javascript-Project/",
    },
    {
      title: "Website Template",
      description: "Boostrap & HTML5",
      imgUrl: projImg6,
      tabAttrs: "https://reduno96.github.io/Bondi/",
    },
    {
      title: "Website Template",
      description: "HTML5 & CSS3",
      imgUrl: projImg7,
      tabAttrs: "https://reduno96.github.io/First-Template/",
    },
    {
      title: "Website Template",
      description: "HTML5 & CSS3",
      imgUrl: projImg8,
      tabAttrs: "https://reduno96.github.io/Second-Template/",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <div className="resume-bx">
          <div className="section-title">
            <h2>Portfolio</h2>
          </div>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav
                        variant="pills"
                        className="nav-pills mb-5 justify-content-center align-items-center"
                        id="pills-tab"
                      >
                        <Nav.Item>
                          <Nav.Link eventKey="first">Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Certification</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content
                        id="slideInUp"
                        className={
                          isVisible
                            ? "animate__animated animate__slideInUp"
                            : ""
                        }
                      >
                        <Tab.Pane eventKey="first">
                          <Row>
                            {projects.map((project, index) => {
                              return <ProjectCard key={index} {...project} />;
                            })}
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="section">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cumque quam, quod neque provident velit, rem
                            explicabo excepturi id illo molestiae blanditiis,
                            eligendi dicta officiis asperiores delectus quasi
                            inventore debitis quo.
                          </p>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};
