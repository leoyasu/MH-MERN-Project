import React from 'react';
import './styles/App.css';
import './styles/AppBarMUI.css';
import './styles/BottomAppBarMUI.css'
import Home from './components/home';
import AppBarMUI from './components/AppBarMUI';
import Profesionals from './components/Profesionals';
import Staff from './components/Staff';
import Contact_us from './components/Contact_us';
import About_us from './components/About_us';
import Appointment from './components/Appointment';
import {Routes, Route} from 'react-router-dom';
import BottomAppBarMUI from './components/BottomAppBarMUI';

// import BottomAppBarMUI from './components/BottomAppBarMUI';

function App() {
  return (
    <div className="App">
      <AppBarMUI/>
      <Routes>
        <Route path='*' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/profesionals' element={<Profesionals/>}/>
        <Route path='/Staff' element={<Staff/>}/>
        <Route path='/Contact_us' element ={<Contact_us/>}/>
        <Route path='/About_us' element ={<About_us/>}/>
        <Route path='/Appointment' element={<Appointment/>}/>
       
      </Routes>
      <BottomAppBarMUI/>
      
    </div>
  );
}

export default App;
