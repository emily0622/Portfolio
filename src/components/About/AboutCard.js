import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";
import staricon from "../../Assets/icons/star.jpg";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, my name is <span className="purple">Emily Traynor. </span>
            <br/>
            <br/>
            I am a <span className="purple"> software engineer</span>, raised in <span className="purple"> Singapore</span>, and currently studying at the <span className="purple"> University of Toronto </span> in the <span className="purple"> Machine Intelligence </span>stream of <span className="purple">Engineering Science. </span>
            <br />
            <br />
            Apart from coding, some other activities that I enjoy are
          </p>
          <ul>
            <li className="about-activity">
              <img src={staricon} width="20"/> camping
            </li>
            <li className="about-activity">
            <img src={staricon} width="20"/> doing puzzles
            </li>
            <li className="about-activity">
            <img src={staricon} width="20"/> playing guitar
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
