import React from 'react';
import { Container,Row,Col,Image} from 'react-bootstrap';
import { Link,NavLink } from 'react-router-dom';
import homepage from '../../data/homepage';
import styled from 'styled-components';
const Hero = styled.section`
    
`;
export const Process = () => (
<section className="container-fluid pro">
<Row className='justify-content-center'>
<Col className='col-lg-8 welcometxt pt-5 pb-5'>
<h4>{homepage.process.subtitle}</h4>
<h2>{homepage.process.title}</h2>
  <Container fluid>
    <Row>
        {homepage.process.items.map((item,index) => (
          <Col lg="2" className='pb-3 pt-5 text-md-center' key={index}>
          <div><Image src={item.imagesrc}/></div>
          <h5 className='text-secondary pt-3'>{item.text}</h5>
          </Col>
        ))}
    </Row>
  </Container>
</Col>
</Row>
</section>
);
