import { Container, Row, Col } from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import meter4 from "../assets/img/meter4.svg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 500 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1,
  },
};

export const Skills = () => {
  return (
    <section className="skills" id="skills">
      <Container>
        <div className="skills-bx">
          <Row>
            <Col xs={12}>
              <div className="section-title">
                <h2>Skills</h2>
              </div>
              <div className="skill-bx wow zoomIn">
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="owl-carousel owl-theme skill-slider"
                >
                  <div className="item d-flex row justify-content-center align-items-center">
                    <img src={meter1} alt="CarImage" />
                    <h5>Back-End Development</h5>
                  </div>
                  <div className="item d-flex row justify-content-center align-items-center">
                    <img src={meter2} alt="CarImage" />
                    <h5>Front-End Development</h5>
                  </div>
                  <div className="item d-flex row justify-content-center align-items-center">
                    <img src={meter3} alt="CarImage" />
                    <h5>Databases</h5>
                  </div>
                  <div className="item d-flex row justify-content-center align-items-center">
                    <img src={meter4} alt="CarImage" />
                    <h5>Web Servers and APIs</h5>
                  </div>
                </Carousel>
              </div>
            </Col>
          </Row>
          <Row className="skills-content">
            <Col xl={6}>
              <div className="progress">
                <span className="skill">
                  HTML5/CSS3 <i className="val">90%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  JavaScript <i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  PHP <i className="val">75%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
            </Col>
            <Col xl={6}>
              <div className="progress">
                <span className="skill">
                  React.js <i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  Laravel <i className="val">90%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  MYSQL <i className="val">100%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="55"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};
