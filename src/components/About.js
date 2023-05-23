import { Container, Row, Col } from "react-bootstrap";
import aboutImg from "../assets/img/MotivRed.svg";
import { ChevronRight } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";

export const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <div className="about-bx">
          <div className="section-title">
            <h2>About</h2>
          </div>
          <Row className="formation justify-content-around">
            <Col xl={4}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                  >
                    <img src={aboutImg} alt="Header Img" />
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={12} xl={8}>
              <h3>Full Stack Developer </h3>
              <p className="parag fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Row>
                <Col xs={12} xl={6}>
                  <ul>
                    <li>
                      <ChevronRight className="chevron" size={16} />
                      <strong>Birthday:</strong> <span>28 Oct 1996</span>
                    </li>
                    <li>
                      <ChevronRight className="chevron" size={16} />
                      <strong>Website:</strong> <span>www.motivred.com</span>
                    </li>
                    <li>
                      <ChevronRight className="chevron" size={16} />
                      <strong>Phone:</strong> <span>+212 635 3420 07</span>
                    </li>
                    <li>
                      <ChevronRight className="chevron" size={16} />
                      <strong>City:</strong> <span>Tetouan, MOROCCO</span>
                    </li>
                  </ul>
                </Col>
                <Col xs={12} xl={6}>
                  <ul>
                    <li>
                      <ChevronRight className="chevron" size={16} />
                      <strong>Age:</strong> <span>27</span>
                    </li>
                    <li>
                      <ChevronRight className="chevron" size={16} />
                      <strong>Degree:</strong> <span> Bachelor's Degree</span>
                    </li>
                    <li>
                      <ChevronRight className="chevron" size={16} />
                      <strong>Email:</strong>
                      <span>reduno96@gmail.com</span>
                    </li>
                    <li>
                      <ChevronRight className="chevron" size={16} />
                      <strong>Freelance:</strong> <span>Available</span>
                    </li>
                  </ul>
                </Col>
              </Row>

              <p>
                Officiis eligendi itaque labore et dolorum mollitia officiis
                optio vero. Quisquam sunt adipisci omnis et ut. Nulla
                accusantium dolor incidunt officia tempore. Et eius omnis.
                Cupiditate ut dicta maxime officiis quidem quia. Sed et
                consectetur qui quia repellendus itaque neque. Aliquid amet
                quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis
                culpa magni laudantium dolores.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};
