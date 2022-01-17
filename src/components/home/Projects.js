import React from 'react';
import { Container,Row,Col,Image} from 'react-bootstrap';
import { Link,NavLink } from 'react-router-dom';
import homepage from '../../data/homepage';
import styled from 'styled-components';
const Hero = styled.section`
    
`;

export const Projects = () => (
  <section className="container-fluid pro bg-light">
  <Row className='justify-content-center'>
    <Col lg="8" className='welcometxt pt-5 pb-5'>
    <h4>Our Projects</h4>
    <h2>Latest Projects</h2>
    <Container fluid>
      <Row>
      {homepage.projects.items.map((item,index) => (
    <Col lg="4" className='pb-3 pr-5 pt-5 text-lg-center' key={index}>
    <div><Image src={item.imagesrc} className='imgborder'/></div>
    <div className="services pt-2 pb-2 pr-4 mt-3">
    <h5 className="text-secondary pt-3">{item.title}</h5>
    <p>{item.text}</p>
    </div>
    </Col>
    ))}
       </Row>
    </Container>
    </Col>
  </Row>
</section>
);