import React from 'react';
import { Container } from '../components/Grid';
import Jumbotron from '../components/Jumbotron';

const Home = () => {
	return (
		<Container>
      <Jumbotron style={{paddingTop: "23vh"}}>
        <h1 className="bigWordName m-0">Elcin Koyuncu</h1>
        <h1 className="bigWord m-0 text-info">Full Stack Developer</h1> 
        <h4>welcome to my page.</h4>
      </Jumbotron>
		</Container>
	);
};

export default Home;