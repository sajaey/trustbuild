import React from 'react';
import styled from 'styled-components';
import { Col, Row,Image, Figure,ListGroup} from 'react-bootstrap';
import about from '../data/about';
const PageWrapper = styled.div`
    
`;

export const About = () => (
  <PageWrapper>
  <section className="container-fluid about p-0">

<Row className="">
  <Col lg="12">
    <img src={require('../assets/images/about_hero.png')} />
  </Col>
</Row>

<Row className='justify-content-center about__us'>
<Col lg="10" className='pt-5 pb-5'>
  <Row className='pb-3'>
    <Col lg="8">
        <h1 className="font-weight-bold">{about.page.title}</h1>
          <h3 className="pt-2 pb-4 font-weight-bold text-secondary">{about.page.subtitle}</h3>
          <p  dangerouslySetInnerHTML={ { __html: about.page.abouttext} }></p>        
          <Row className='about__us__blocks'>
          {about.page.blocks.map((item,index) => (
            <Col lg="3" className='text-center' key={index}>
            {item.text}
            <strong className="text-secondary">{item.bold}</strong>
            </Col>
          ))}
          </Row>
    </Col>
    <Col lg="4">
        <Image src={about.page.ceoimage}></Image>
      </Col>
  </Row>
  </Col>
  </Row>

  <Row className='about__services'>
      <Col lg="12" className='pt-5 pb-4'>
        <Row className='justify-content-center'>
          <Col lg="10">
           <h2 className="text-secondary font-weight-bold">{about.page.services.title}</h2>
          <Row>
          {about.page.services.items.map((item,index) => (
          <Col lg="3" className='pt-4' key={index}>
              <Figure className='figure'>
                <Image src={item.imagesrc} className="figure-img img-fluid rounded" alt={item.title}/>
                <Figure.Caption className='figure-caption text-left pt-3 pb-3 font-weight-bold'>Residential<br/>Construction</Figure.Caption>
              </Figure>
            </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Col>
    </Row>

<Row className='about__mission mt-5'>
  <Col lg="3" className='about__mission__left pt-5 pb-5'></Col>
  <Col lg="9" className='about__mission__right pt-5 pb-5 bg-light'>
    {about.page.mission.items.map((item,index) => (
    <div key={index}>
      <h2 className="font-weight-bold text-secondary">{item.title}</h2>
      <p className="border-bottom pt-2 pb-5">{item.subtitle}</p>
    </div>
    ))}
  </Col>
</Row>

    <Row>
    <Col lg="12" className='pt-3 pb-3'>
    <Row className='pb-3 justify-content-center'>
    <Col lg="10">
    <h1 className="text-secondary font-weight-bold pt-5 pb-5">{about.page.partners.title}</h1>
    <Row>
      {about.page.partners.items.map((item,index) => (
        <Col lg="3" className='text-center' key={index}>
          <Figure className='figure'>
            <Image src={item.imagesrc} className='figure-img img-fluid rounded' alt={item.title}/>
            <Figure.Caption className='figure-caption text-center pt-3 pb-3 font-weight-bold'>{item.title}</Figure.Caption>
          </Figure>
        </Col>
      ))}
    </Row>
      </Col>
    </Row>
  </Col>
  </Row>

  <Row>
    <Col lg="12" className='pt-3 pb-3'>
    <Row className='pb-3 justify-content-center'>
    <Col lg="10">
    <h1 className="font-weight-bold text-secondary pb-3">{about.page.whyus.title}</h1>
    <Row>
    <ListGroup >
      {about.page.whyus.items.map((item,index) => (
      <ListGroup.Item key={index} className='border-0'>{item.text}</ListGroup.Item>
      ))}
</ListGroup>
    </Row>
      </Col>
    </Row>
  </Col>
  </Row>
</section>
  </PageWrapper>
);
