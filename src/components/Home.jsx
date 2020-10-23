import React from 'react';
import web from '../images/web.jpg';
import '../App.css';
// import { NavLink } from 'react-router-dom';
import Common from './Common';


const Home = () => {
    return (
        <div>
            <Common 
            name = 'Grow your business with'
            imgsrc = {web}
            btnName = 'Get Started'
            visit = '/services'
            />
        </div>
    );
};


export default Home;