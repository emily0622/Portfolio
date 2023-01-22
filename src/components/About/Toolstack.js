import React from "react";
import { Col, Row } from "react-bootstrap";
// import {
//   SiLinux,
//   SiVisualstudiocode,
// } from "react-icons/si";

import micro from "../../Assets/skills/micro.svg.png";
import jup from "../../Assets/skills/jup.png";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <span title="Linux">
        {/* <SiLinux /> */}
        </span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span title="Visual Studio Code">
        {/* <SiVisualstudiocode /> */}
        </span>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <span title="Microsoft">
        <img src={micro} width="100"/>
        </span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span title="Jupyter Notebook">
        <img src={jup} width="100"/>
        </span>
      </Col>
    </Row>
  );
}

export default Toolstack;
