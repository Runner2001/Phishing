import React, { useState } from 'react';
import './Login.css';
import './AppHeader.css';
import './App.css';
import './RightSide.css';
import Login from './components/Login';
import AppHeader from './components/AppHeader';
import RightSide from './components/RightSide';
import Image from './Footer.png';

function App() {

  return (
    <div style={{}}>
      <div className='Container'>
        <div style={{ display: 'flex', width: 980, marginTop: 20 }}>
          <RightSide />
          <Login />
        </div>
      </div>
      <img src={Image} style={{ width: "100%" }} />
    </div>
  );
}

export default App;
