import React from 'react';
import {Col,Row,ListGroup} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import footer from '../data/footer';
import routes from '../data/routes';

export const Footer = () => (
  <footer className='container-fluid'>
    <Row className='justify-content-center'>
      <Col lg={10}>
          <Row className='pb-3'>
            <Col lg={3} className='text-nd-center text-lg-left'>
                      <img src={require('../assets/images/trust-logo.png')}/>
                      <p className="pt-4" dangerouslySetInnerHTML={ { __html: footer.address.address} }></p>
      <p><a href={`mailto:${footer.address.email}`}>{footer.address.email}</a><br/>
      <a href={footer.address.website} title="TrustBuild Tech">{footer.address.website}</a></p>
              </Col>
              <Col lg={3} className='text-nd-center text-lg-left'>
              <h5 className="pb-4">{footer.links.label}</h5>
              <ListGroup flush="true">
              {routes.map((item,index) => (
                <ListGroup.Item key={index} action  href={item.path} className='pl-0 bg-transparent border-0 pt-1 pb-1'>{item.label}</ListGroup.Item>
              ))}
            </ListGroup>
                </Col>
                <Col lg={3} className='text-nd-center text-lg-left'>
                <h5 className="pb-4">{footer.social.label}</h5>
                <p>{footer.social.text}</p>
                <ListGroup horizontal="true" className='social'>
                    {footer.social.links.map((item,index) => (
                        <ListGroup.Item key={index} action className='social__list bg-transparent border-0' href={item.link}><FontAwesomeIcon icon={item.icon}/></ListGroup.Item>
                    ))}
                </ListGroup>
                  </Col>
                  <Col lg={3} className='text-nd-center text-lg-left'>
                  <h5 className="pb-4">LOCATION</h5>
                  <img src={require('../assets/images/map.png')}/>
                    </Col>
          </Row>
          <Row className='copyright pt-4 border-top border-secondary'>
          <div className="col-lg-6 col-12 text-center text-md-center text-lg-left">
      <p>{footer.copyright.text}</p>
      </div>
      <div className="col-lg-6 col-12 text-lg-right text-center">
	      <ul className="nav justify-content-end">
          {footer.copyright.links.map((item,index) => (
          <li className="pr-5" key={index}><a href={item.link}>{item.label}</a></li>
          ))}
        </ul>
        </div>
          </Row>
      </Col>
    </Row>

</footer>
);
