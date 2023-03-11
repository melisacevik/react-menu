import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Header from './Header';
import Sidebar from './Sidebar';
import Salads from './Salads';
import {BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import Soups from './Soups';
import Sushis from './Sushis';
import Desserts from './Desserts';
import RigthSidebar from './RigthSidebar';
import Contact from './Contact';
import About from './About';
import Home from './Home';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
  

  
  <Router> 
  <Home />
    <Header />
    <Sidebar />
    <Routes> 
      <Route path='/Soups' element={<Soups/>}> </Route>
      <Route path='/Salads' element={<Salads/>}> </Route>
      <Route path='/Sushis' element={<Sushis/>}> </Route>
      <Route path='/Desserts' element={<Desserts/>}> </Route>
      <Route path='/Contact' element={<Contact/>}> </Route>
      <Route path='/About' element={<About/>}> </Route>
      
    </Routes>
    <RigthSidebar />
    
  </Router>
  
  
  </React.StrictMode>
);
