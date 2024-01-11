import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Product from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import ContactUs from './components/pages/ContactUs';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Product} />
          <Route path='/contactus' component={ContactUs} />
          <Route path='/sign-up' component={SignUp} />
          
        </Switch>
      </Router>
    </>
  );
}

export default App;