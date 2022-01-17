import React from 'react';
import { Container,Row,Col,Image} from 'react-bootstrap';
import { Link,NavLink } from 'react-router-dom';
import homepage from '../../data/homepage';
import styled from 'styled-components';
const Hero = styled.section`
`;

export const Marketing = () => (
    <section  className="container-fluid marketing">
    <Row className='justify-content-center'>
      <Col lg="10" className='welcometxt pt-5 pb-5'>
      <h4>{homepage.marketing.title}</h4>
      <h2>{homepage.marketing.subtitle}</h2>
      <Container fluid className='features'>
        <Row>
        {homepage.marketing.items.map((item,index) => (
                <Col lg="4" className='pt-2 pb-2 pr-4 mt-3' key={index}>
                    <div><Image src={item.imagesrc}/></div>
                    <div className="services pt-2 pb-2 pr-4 mt-3">
                    <h5>{item.title}</h5>
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
