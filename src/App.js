import React from 'react';
import './App.css';

const marqueeStyle = {
  backgroundColor: 'black',
  color: 'red',
  fontSize: '100vh',
  lineHeight: '100vh',
};

function App() {
  return (
    <marquee scrollamount="100" style={marqueeStyle}>
      SOS
    </marquee>
  );
}

export default App;
