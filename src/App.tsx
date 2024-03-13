import React from 'react';
import Map from './components/map';

import Direction from './components/direction';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Notice the change here
import SignUpInPage from './components/signinupPage';

const App = () => {
  
  return (
    <div>
      <Router>
        <Routes> 
        <Route path='/' element={<SignUpInPage />} />
        <Route path='/find_donations' element={<Map />} />
          <Route path='/direction' element={<Direction />} />  
         </Routes>
      </Router> 
    </div>
  );
};

export default App;
