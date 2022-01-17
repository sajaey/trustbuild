import React from 'react';
import { Container,Row,Col,Image,Carousel} from 'react-bootstrap';
import homepage from '../../data/homepage';

export const Testimonials = () => (
  <section className="container-fluid pro bg-light">
  <Row className="row justify-content-center">
    <Col lg="8" className='pt-5 pb-5'>
    <h4>Testimonials</h4>
    <h2>Clients Feedback</h2>
    <Container fluid>
      <Row className='justify-content-center'>
        <Col className='col-lg-10 pt-5 pb-4 mt-4 border-top border-bottom'>
          <Carousel>
            {homepage.testimonials.items.map((item,index) => (
              <Carousel.Item key={index}>
                <p className="lead"><Image src={item.imagesrc} className='float-left pr-4'/>
                {item.text}</p>
              </Carousel.Item>
            ))} 
          </Carousel>
        </Col>
      </Row>
    </Container>
</Col>
</Row>
</section>
);
