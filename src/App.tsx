import React from 'react'
import Map from './components/map'
 
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"


const App = () => {
 
 

  return (
    <div>
        <Alert>
        
        <AlertTitle>Accept donation!
        </AlertTitle>
        <AlertDescription>
          Click on your favorite food's marker and accept the donation.
        </AlertDescription>
      </Alert>
<Map />
    </div>
    
  );
};

export default App;
