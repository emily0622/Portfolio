import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from "../../Assets/about_me.png";
// import homeLogo from "../../Assets/download.png";
import Home2 from "./Home2";

import Type from "./Type";
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
              <img src={laptopImg} className="img-fluid" alt="avatar" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>

  );
}

export default Home;
