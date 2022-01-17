import React from 'react';
import {Container,Row,Col,Form} from 'react-bootstrap';
import contact from '../data/contact';

export const Contact = () => (
  <section className="container-fluid contact p-0">
  <Row className='justify-content-center'>
    <Col lg="12" md="12">
     <Row>
       <Col lg="6" className='contact__left'>
        <div className='pt-5 pb-5'>
          <h1 className="font-weight-bold">{contact.page.title}</h1>
          <p className="contact__left-phone">{contact.page.phone}</p>
          <p className="contact__left-email">{contact.page.email}</p>
          <p className="pt-4 text-secondary">{contact.page.address}</p>
        </div>
       </Col>
       <Col lg="6" className='bg-white p-5 contact__right'>
       <h2 className="font-weight-bold text-secondary">{contact.page.contactform.title}</h2>
       <Form className='pt-5 pb-3'>
       {contact.page.contactform.items.map((item,index) => (
        <Form.Group className="p-2" controlId="exampleForm.ControlInput1" key={index}>
          <Form.Control type={item.type} placeholder={item.placeholder} required />
        </Form.Group>
       ))}
        {contact.page.contactform.preference.items.map((item,index) => (
          <Form.Check inline label={item.preftype} type='checkbox' key={index}/>
        ))}
       </Form>
      </Col>
     </Row>
    </Col>
  </Row>
  </section>
);
