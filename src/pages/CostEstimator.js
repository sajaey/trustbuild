import React from 'react';
import styled from 'styled-components';
import { Col, Row,Image, Figure,ListGroup} from 'react-bootstrap';
const PageWrapper = styled.div`
    
`;

export const CostEstimator = () => (
  <section className="container-fluid projects p-0">
  
  <Row className="about__hero">
  <Col lg="12">
    <img src={require('../assets/images/about_hero.png')} />
  </Col>
</Row>

<Row className='justify-content-center'>
    <Col lg="10" md="12" className='p-5'>
    <h1 className='ont-weight-bold'>Cost Estimator</h1>
    </Col>
    </Row>
  </section>
);
