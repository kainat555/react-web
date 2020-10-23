import React from 'react';
import { Switch , Route, Redirect } from 'react-router-dom';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Navbar from './components/Navbar';
import Footer from './components/Footer';




const App = () => {
  return (
    <div>
      <Navbar/>
      <Switch>
<Route exact path='/' component={Home} />
<Route exact path='/about' component={About} />
<Route exact path='/services' component={Services} />
<Route exact path='/contact' component={Contact} />
<Redirect to='/'/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
