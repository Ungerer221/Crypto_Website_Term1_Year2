// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/landing';
import TimeLine from './pages/timeline';
import Compare from './pages/compare';
import BasicNavBar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicFooter from './components/footer';
import Signup from './components/Signup';
import Portfolio from './pages/portfolio';
import Clock from './components/Clock';

function App() {
  return (
    <div className='App'>

      <BasicNavBar />
      
     

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/time' element={<TimeLine />} />
        <Route path='/compare' element={<Compare />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
      <Clock/>
      <Signup />
      <BasicFooter />

    </div>
  );
}

export default App;
