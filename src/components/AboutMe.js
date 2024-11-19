import React from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';

const AboutMe = () => {
    return (
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={6} className="text-center">
              <h1>About Me</h1>
              <p>James is the greatest developer of all time</p>
              <Image
                fluid
                src="https://www.csit.carleton.ca/fetchImage.php?ImgType=photos&ImgFile=jbrunet.jpg"
                alt="James"
              />
            </Col>
          </Row>
        </Container>
    )
}

export default AboutMe;