import React from 'react';
import { Container,Row,Col} from 'react-bootstrap';
import { Link,NavLink } from 'react-router-dom';
import homepage from '../../data/homepage';
import styled from 'styled-components';
const Hero = styled.section`
    
`;

export const HeroBanner = () => (
<Hero className='container-xxl herobanner'>
    <Row className='justify-content-end'>
        <Col lg="11">
            <Row className="align-items-center">
                <Col lg="6">
                    <h1 className="align-middle">{homepage.herobanner.title}</h1>
                    <p  dangerouslySetInnerHTML={ { __html: homepage.herobanner.subtitle} }></p>
                    <NavLink to="/contact" className="btn btn-primary btn-lg mt-3 pt-3 pr-5 pb-3 pl-5 rounded-0">{homepage.herobanner.cta}</NavLink>
                </Col>
                <Col lg="6" className='banner'></Col>
            </Row>
        </Col>
    </Row>
</Hero>
);
