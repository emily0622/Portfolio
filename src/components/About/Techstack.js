import React from "react";
import { Col, Row } from "react-bootstrap";
// import { renderIntoDocument } from "react-dom/test-utils";
import { CgCPlusPlus } from "react-icons/cg";
import tf from "../../Assets/skills/tf.png";
import c from "../../Assets/skills/c.png";
import java from "../../Assets/skills/java.png";
import matlab from "../../Assets/skills/matlab.png";
import numpy from "../../Assets/skills/numpy.png";
import pandas from "../../Assets/skills/pandas.png";
import sql from "../../Assets/skills/sql.png";
import mockito from "../../Assets/skills/mockito.png";
import python from "../../Assets/skills/python.png";
import git from "../../Assets/skills/git.png";


import {
  DiReact,
  DiNodejs,
  DiMongodb,
  // DiPython,
  // DiGit,
} from "react-icons/di";
import {
  SiPytorch,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <span title="Python">
        <DiPython />
        </span>
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <span title="Python">
        <img src={python} width="100"/>
        </span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span title="Numpy">
        <img src={numpy} width="100"/>
        </span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span title="Pandas">
        <img src={pandas} width="100"/>
        </span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span title="SQL">
        <img src={sql} width="100"/>
        </span>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <span title="Git">
        <DiGit />
        </span>
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <span title="Git">
        <img src={git} width="100"/>
        </span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span title="C">
        <img src={c} width="100"/>
        </span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span title="Java">
        <img src={java} width="100"/>
        </span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span title="Mockito">
        <img src={mockito} width="100"/>
        </span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span title="Matlab">
        <img src={matlab} width="100"/>
        </span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span title="TensorFlow">
        <img src={tf} width="100"/>
        </span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span title="PyTorch">
        <SiPytorch />
        </span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span title="Mongodb">
        <DiMongodb />
        </span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span title="NodeJs">
        <DiNodejs />
        </span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span title="React">
        <DiReact />
        </span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span title="C++">
        <CgCPlusPlus />
        </span>
      </Col>
    </Row>
  );
}

export default Techstack;
