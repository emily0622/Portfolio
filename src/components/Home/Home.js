import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from "../../Assets/about_me.png";
// import homeLogo from "../../Assets/download.png";
import Home2 from "./Home2";
// import About from "../About/About";
import Projects from "../Projects/Projects";

import Type from "./Type";
import Tilt from "react-parallax-tilt";
import laptopImg from "../../Assets/profile-pic.jpg";


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hey There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                My name is
                <strong className="main-name"> Emily Traynor</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <Tilt>
                <img src={laptopImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
      {/* <Home2 /> */}
      <Row>
      <Projects/>
      </Row>


      {/* <Row>
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
      </Row> */}
    </section>

  );
}

export default Home;
