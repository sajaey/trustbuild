import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import routes from '../data/routes';
import styled from 'styled-components';

const Header = styled.header`
    
    `;

export const Masthead = () => (
  <Header className='container-xxl'>
    <Navbar expand='lg' className='navbar-expand-lg navbar-light pt-3 pb-3'>
        <Navbar.Brand href='/'><img className='img-fluid' src={require('../assets/images/trust-logo.png')} alt='Trust Build Tech'/></Navbar.Brand>
        <Navbar.Toggle aria-controls='navbar-toggler' />
        <Navbar.Collapse className='justify-content-end'>
          <Nav activeKey="/" className='ml-auto navbar-light'>    
            {routes.map((i,index) => (
              <Nav.Item key={i.label}>
                <Nav.Link href={i.path} eventKey={`link-${index}`}>{i.label}</Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  </Header>
);
