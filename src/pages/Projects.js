import React from 'react';
import {Container,Row,Col,Figure} from 'react-bootstrap';
import projects from '../data/projects';

export const Projects = () => (
  <section className="container-fluid projects p-0">

<Row className="about__hero">
  <Col lg="12">
    <img src={require('../assets/images/about_hero.png')} />
  </Col>
</Row>
  <Row className='justify-content-center'>
    <Col lg="10" md="12" className='p-5'>
      <h1 className='ont-weight-bold'>{projects.projects.title}</h1>
      <h3 className="pt-2 pb-4 font-weight-bold text-secondary">{projects.projects.subtitle}</h3>
      <Row>
      {projects.projects.items.map((item,index) => (
        <Col lg="4" md="6" key={index}>
          <Figure className='figure'>
            <Figure.Image alt="171x180" src={item.imagesrc} className='figure-img img-fluid'/>
            <Figure.Caption className='figure-caption text-center pt-3 pb-3'>
            {item.title}
            </Figure.Caption>
          </Figure>
        </Col>
      ))}
      </Row>
    </Col>
  </Row>
  </section>
);
