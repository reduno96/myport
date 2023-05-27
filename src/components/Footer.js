import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import navIcon5 from "../assets/img/nav-icon5.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-center">
          <MailchimpForm />
          <Col className="row justify-content-center" size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  className="linkedin"
                  href="https://www.linkedin.com/in/redouane-elmorabet/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={navIcon1} alt="" />
                </a>
                <a
                  className="github"
                  href="https://github.com/reduno96"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={navIcon4} alt="" />
                </a>
                <a
                  className="facebook"
                  href="https://www.facebook.com/redouane.morabet"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={navIcon2}
                    alt="https://www.instagram.com/redouane_el_morabet/"
                    target="_blank"
                  />
                </a>
                <a
                  className="instagram"
                  href="https://www.instagram.com/redouane_el_morabet/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={navIcon3} alt="" />
                </a>
                <a
                  className="twitter"
                  href="https://twitter.com/home"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={navIcon5} alt="" />
                </a>
              </div>
            </span>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
