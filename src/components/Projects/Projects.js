import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import crowdfunding from "../../Assets/Projects/crowd.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Electrothon <strong className="purple">5.0 </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crowdfunding}
              isBlog={false}
              title="Decentralized Crowdfunding Platform"
              description="A decentralized crowdfunding platform using blockchain is a platform where projects and businesses can raise funds without the need for intermediaries. The platform operates on a decentralized network of computers that record and verify all transactions. 
              The platform uses smart contracts, which are self-executing contracts with the terms of the agreement directly written into code. Smart contracts are used to automate the fund allocation process and ensure that funds are only released when specific conditions are met, providing transparency and accountability to the crowdfunding process.
              "
              ghLink="https://github.com/sahuljr7/electrothon5.0"
              demoLink="https://crowdfunding-sahuljr7.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
