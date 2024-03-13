import React from 'react';
import Map from './components/map';

import Direction from './components/direction';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Notice the change here

const App = () => {
  
  return (
    <div>
      <Router>
        <Routes> 
        <Route path='/' element={<Map />} />
          <Route path='/direction' element={<Direction />} /> {/* Adjusted Route syntax */}
        </Routes>
      </Router>
      
    </div>
  );
};

export default App;
