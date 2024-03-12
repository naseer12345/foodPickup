import React from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer  } from '@react-google-maps/api';
import { useState } from 'react';
const mapStyles = {
    darkMode: [
      {
        elementType: 'geometry',
        stylers: [
          {
            color: '#242f3e',
          },
        ],
      },
      {
        elementType: 'labels.text.stroke',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        elementType: 'labels.text.fill',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [
          {
            color: '#38414e',
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#212a37',
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#9ca5b3',
          },
        ],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [
          {
            color: '#746855',
          },
        ],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#1f2835',
          },
        ],
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#f3d19c',
          },
        ],
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [
          {
            color: '#2f3948',
          },
        ],
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#d59563',
          },
        ],
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
          {
            color: '#17263c',
          },
        ],
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#515c6d',
          },
        ],
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [
          {
            color: '#17263c',
          },
        ],
      },
    ],
  }
  const mapContainerStyle = {
    height: '100vh',
    width: '100vw',
  };

export default function Direction( ){
const [directions, setDirections] = useState(null);


  const directionsOptions = {
    destination: {lat: 51.648388, lng: -0.2612529},
    origin: {lat: 51.6129827, lng: -0.3106275},
    travelMode: 'TRANSIT', // Specify the travel mode (DRIVING, WALKING, BICYCLING, TRANSIT)
  };

  const onLoadDirections = (directionsResult) => {
    setDirections(directionsResult);
  };


  return <div>
    <LoadScript
        googleMapsApiKey="AIzaSyBm-UxwUQrC7ProtlcuSVtIN67fXm0NzU0"
      >
        
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={15}
            center={51.6129827}
            options={{
              disableDefaultUI: false,
              styles: mapStyles.darkMode,
            }}
          >
             {directions && <DirectionsRenderer directions={directions} />}
        <DirectionsService
          options={directionsOptions}
          callback={onLoadDirections}
        />
            {origin}
          </GoogleMap>
      
       
      </LoadScript>


  </div>


}