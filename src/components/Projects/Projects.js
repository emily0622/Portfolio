import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import engstores from "../../Assets/Projects/engstores.png";
import emotion from "../../Assets/Projects/emotion.png";
import whiskers from "../../Assets/Projects/whiskers.png";
import debias from "../../Assets/Projects/debiasing.png";
import malaria from "../../Assets/Projects/malaria.jpg";
import EPAI from "../../Assets/Projects/EPAI.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Some of my Recent <strong className="purple">Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={debias}
              // isBlog={false}
              title="Debiasing Gender Bias"
              description="It has been observed that word embeddings amplify biases found in the datasets they were trained on, which in turn reflect gender biases in society. We show that the word embedding model, word2vec, exhibit gender stereotypes to a disturbing extent. We use three methods to debias and measure our custom Word2Vec model"
              ghLink="https://github.com/JasmineZhangxyz/genderDebiasing"
              demoLink="https://docs.google.com/document/d/1UXyZs3DRz14lMiaPQ0Pd49-KVGI71IR-kj6tEMZS2xc/edit?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={engstores}
              isBlog={false}
              title="Engineering Store"
              description="Integrated Shopify lite for a popular e-commerce business available here. Used Shopify Admin API, Django, Gunicorn, PostgreSQL, and various libraries. Utilized Python data processing skills to transfer store data to Shopify, and migrated the website from DigitalOcean to Plesk."
              ghLink="https://github.com/engineeringstores/stores-2021"
              demoLink="https://stores.skule.ca/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={whiskers}
              isBlog={false}
              title="Whisker Plots"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/emily0622/Web-Design/tree/main/google-whiskers"
              demoLink="http://whiskers-plots.herokuapp.com/dashboard"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EPAI}
              isBlog={false}
              title="EPAI"
              description="Am a founding member of the club EPAI (Ethical Principles in AI). EPAI organizes workshops and provides opportunities for students to work on technical or research-based projects."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://ethical-principles-in-ai.github.io/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={malaria}
              isBlog={false}
              title="ML to Detect Malaria"
              description="Developed a image processing machine learning model to detect if malaria is present in an image fed in from a standard microscope, to expedite the detection process. Results include graphical indications on the confidence interval of the specific image and statics on the ML model as a whole, to prevent false negatives."
              ghLink="https://github.com/nshdesai/micromalaria"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
