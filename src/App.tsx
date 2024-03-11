import { GoogleMap, LoadScript, MarkerF, Polygon  } from '@react-google-maps/api';
import { useState } from 'react';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const mapContainerStyle = {
    height: '400px',
    width: '800px',
  };

  function MarkerObj(lat, long, food) {
    this.lat = lat;
    this.long = long;
    this.food = food;

    this.listFood = function() {
        console.log(this.food);
    }

    this.test = function() {
        console.log("added to dom");
    }
}
    
  const handleLoad = () => {
    setIsLoaded(true);
  };
  const coordinates = [
    { lat: 37.7749, lng: -122.4194 },
    { lat: 37.7749, lng: -122.4184 },
    { lat: 37.7759, lng: -122.4184 },
    { lat: 37.7759, lng: -122.4194 },
  ];

  const center = {
    lat: 37.7749,
    lng: -120,
  };

  const position = {
    lat: 37.7749,
    lng: -120,
  };
  const position2 = new MarkerObj(37.7750,-120, "pasta") 
  const position3 = {
    lat: 37.7751,
    lng: -120,
  };


  return (
    <LoadScript
    version='alplha'
      googleMapsApiKey="AIzaSyBm-UxwUQrC7ProtlcuSVtIN67fXm0NzU0"
      onLoad={handleLoad}
    >
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
           
          zoom={13}
          center={center}
        >
          <Polygon paths={[coordinates]} />
          <MarkerF  position={position} onClick={() => console.log('Marker clicked!')} />
          <MarkerF  position={position2.lat,position2.log} onClick={() => console.log('Marker clicked!')} />

          <MarkerF  position={position3} onClick={() => console.log('Marker clicked!')} />

        </GoogleMap>
      ) : (
        <div>Loading...</div>
      )}
    </LoadScript>
  );
};

export default App;