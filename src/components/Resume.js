import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Resume from "../assets/Resume.pdf";
import '../assets/style.css';

const AboutMe = () => {
  return (
    <MDBContainer className="resume mt-5">
      <MDBRow>
        <MDBCol md="12">
          <embed id="Resume" src={Resume} width="100%" height="1000px"/>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AboutMe;