import React, { Component } from 'react';
import Projects from '../utils/projects.json';
import { Container, Row } from '../components/Grid';
import CardDeck from '../components/CardDeck';
import Card from '../components/Card';
import Jumbotron from '../components/Jumbotron';

class Portfolio extends Component {
    state = { Projects };

    render() {
        return (
            <Container>
                <Jumbotron className="mt-3">
                    <h1 className="bigWordName m-0 text-center">Portfolio</h1> 
                    <h4 className="text-center">a collection of my work.</h4><br />
                </Jumbotron>
                <Row>
                    <CardDeck>
                        {this.state.Projects.filter(item => item.id <= 3)
                            .map(project => (
                                <Card 
                                    key={project.id}
                                    id={project.id}
                                    title={project.title}
                                    description={project.description}
                                    repoLink={project.repoLink}
                                    deployedLink={project.deployedLink}
                                    lastUpdated={project.lastUpdated}
                                    picturePath={project.picturePath}
                                />
                        ))}
                    </CardDeck>
                </Row>
                <Row>
                    <CardDeck>
                        {this.state.Projects.filter(item => item.id > 3 && item.id <= 6)
                            .map(project => (
                                <Card 
                                    key={project.id}
                                    id={project.id}
                                    title={project.title}
                                    description={project.description}
                                    repoLink={project.repoLink}
                                    deployedLink={project.deployedLink}
                                    lastUpdated={project.lastUpdated}
                                    picturePath={project.picturePath}
                                />
                        ))}
                    </CardDeck>
                </Row>
                <Row>
                    <CardDeck>
                        {this.state.Projects.filter(item => item.id > 6)
                            .map(project => (
                                <Card 
                                    key={project.id}
                                    id={project.id}
                                    title={project.title}
                                    description={project.description}
                                    repoLink={project.repoLink}
                                    deployedLink={project.deployedLink}
                                    lastUpdated={project.lastUpdated}
                                    picturePath={project.picturePath}
                                />
                        ))}
                    </CardDeck>
                </Row>
            </Container>
           ) 
    }
};

export default Portfolio;