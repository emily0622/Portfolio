import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
import myImg from "../../Assets/diff_avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              <br />A 
              <i>
                  <b 
                  className="purple"> professional learner &nbsp;
                  </b>
              </i>
              with an eager attitude to develop skills and solve large, complex, problems.
              <br />
              <br />
              I have experience with a wide range of software skills, including 
              <i>
                  <b 
                  className="purple"> full-stack development, machine learning, distributed systems, &nbsp;
                  </b>
              </i>
              as well as soft skills including leadership, communication, and finance.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Python, C, Java. </b>
              </i>
              <br />
              <br />
              My fields of interest are developing &nbsp;
              <i>
                <b className="purple"> fair machine learning technologies, natural language processing (NLP), </b>
                and, {" "}
                <b className="purple">
                  web development.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONNECT WITH ME</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me on
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/emily0622"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/emily-traynor-64ab391a3/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
