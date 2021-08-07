import React from 'react';
import { Container, Row, Col } from '../components/Grid';
import Jumbotron from '../components/Jumbotron';
import picture from '../assets/profile_picture.jpg';
import { skills } from '../profile';
import Skills from '../components/Skills/Skills';
import '../components/Skills/style.css';

const About = () => {
   return (
      <Container>
         <Jumbotron className="mt-3 mb-3">
            <h1 className="bigWordName m-0 text-right">Elcin Koyuncu</h1>
            <h2 className="bigWord m-0 text-right">Full Stack Developer</h2> 
         </Jumbotron>
         <Row>
            <Col size="md-4">   
               <img src={picture} className="img-thumbnail mt-3" alt="eunah-headshot" />
            </Col>
            <Col size="md-8">   
               <h2 className="mb-1 text-info">who am I?</h2>
               <p>Solution-driven Full Stack Web Developer with 8 years of analytical experience; proven management, 
sales and coaching skills. Recognized for innovation, being detail oriented, working under pressure 
and adapting new conditions. Excellent interpersonal communication skills and collaborator who 
works well on team-based projects as well as independently. Recognized for proven complex 
problem-solving abilities to contribute effectively as a part of a fast-paced, quality-driven team.</p>
               <h2 className="mb-1 text-info">skills</h2>
               <div id="Skills"> 
                <div className="row d-flex justify-content-center skills">
                    {skills.map((x) => 
                        <Skills key={x.name} faClass={x.faClass} svg={x.svg} label={x.name}/>
                    )}̀
                </div> 
            </div>
              
               <h2 className="mb-1 text-info">education</h2> 
               <h4 className="mb-0">UNIVERSITY OF MIAMI</h4>
               <span className="text-white ml-3">MARCH - AUGUST 2021</span><br/>
               <span className="text-white ml-3">FULL STACK WEB DEVELOPMENT CERTIFICATE</span>
               <h4 className="mb-0">CUKUROVA UNIVERSITY</h4>
               <small className="text-white ml-3">BS DEGREE IN PHYSICS</small><br/>
               <span className="text-white ml-3">2006</span>
            </Col>
         </Row>
      </Container>
   ) 
};

export default About;