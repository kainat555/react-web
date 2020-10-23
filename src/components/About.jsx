import React from 'react';
import about_img from '../images/about_img.png';
import '../App.css';
// import { NavLink } from 'react-router-dom';
import Common from './Common';

const About = () => {
  return (
      <div>
          <Common 
          name = 'Welcome to About Page'
          imgsrc = {about_img}
          btnName = 'Contact Now'
          visit = '/contact'
          />
      </div>
  );
};


export default About;