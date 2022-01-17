import React from 'react';
import { HeroBanner } from '../components/home/HeroBanner';
import { Marketing } from '../components/home/Marketing';
import { Projects } from '../components/home/Projects';
import { Properties } from '../components/home/Properties';
import { Testimonials } from '../components/home/Testimonials';
import { Process } from '../components/home/Process';
import styled from 'styled-components';
const HomWrapper = styled.div`
    
`;

export const Home = () => (
  <HomWrapper>
    <HeroBanner/>
    <Marketing/>
    <Properties/>
    <Projects/>
    <Process/>
    <Testimonials/>
  </HomWrapper>
);
