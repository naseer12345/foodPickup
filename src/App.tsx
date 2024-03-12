import React from 'react';
import Map from './components/map';
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import Direction from './components/direction';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Notice the change here

const App = () => {
  return (
    <div>
      {/* <Alert>
        <AlertTitle>Accept donation!</AlertTitle>
        <AlertDescription>
          Click on your favorite food's marker and accept the donation.
        </AlertDescription>
      </Alert> */}
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
