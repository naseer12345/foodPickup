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

import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import  React,{ useState, useEffect } from 'react';


import { DialogToAddFood } from './donateFoodDialog';
import AcceptFoodSheet from './acceptFoodSheet';
export const SheetContext = React.createContext()
const Map = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false); // State variable to control sheet visibility
  const [clickedMarker, setClickedMarker] = useState(null)

  const mapContainerStyle = {
    height: '95vh',
    width: '100vw',
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };
  function handleMarkerClick(obj){
      setClickedMarker(obj)
      toggleSheet()
  }
  // Get current location when component mounts
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.error('Error getting current position:', error);
      }
    );
  }, []);

  const center = {
    lat: 37.7749,
    lng: -120,
  };

  const toggleSheet = () => {
    setIsSheetOpen(!isSheetOpen); // Toggle sheet visibility
  };

 const arrOfData = [{
  id:1,
  foodName: ' burger',
  feedablePpk: 23,
  donatorName: 'pattrick',
  donationLocation: {lat: 51.6487273, lng: -0.2590708}
 }, 
 {
  id:2,

  foodName: ' sherger',
  feedablePpk: 23,
  donatorName: 'freka',
  donationLocation: {lat: 51.8487273, lng: -0.3590708}
 },
 {
  id:3,

  foodName: ' targer',
  feedablePpk: 23,
  donatorName: 'patrika ',
  donationLocation: {lat: 51.5487273, lng: -0.5590708}
 },
 {
  id:4,

  foodName: ' kebob',
  feedablePpk: 23,
  donatorName: 'moalika',
  donationLocation: {lat: 51.3487273, lng: -0.3590708}
 },
 {
  id:5,
  foodName: 'past , pesta , posta ',
  feedablePpk: 23,
  donatorName: 'fuck you',
  donationLocation: {lat: 51.1487273, lng: -0.1590708}
 },
]
const test = { 
  id:5,
  foodName: 'past , pesta , posta ',
  feedablePpk: 23,
  donatorName: 'fuck you',
  donationLocation: {lat: 51.1487273, lng: -0.1590708}
 }
// this code is for deleting data or markers
// const [data, setData] = useState(arrOfData);

//     const handleMarkerClick = (clickedData) => {
//         const newData = data.filter(item => item !== clickedData);
//         setData(newData);
//         console.log(data)
//     };
  return (
    <div style={{ display: 'flex', flexDirection:'column' , justifyContent: 'center'}}>

      <DialogToAddFood  />
      <LoadScript
        googleMapsApiKey="AIzaSyBm-UxwUQrC7ProtlcuSVtIN67fXm0NzU0"
        onLoad={handleLoad}
      >
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={13}
            center={currentPosition || center}
            options={{
              disableDefaultUI: true,
              styles: mapStyles.darkMode,
            }}
          >
      
      {
    arrOfData.map((foodObj) => {
        return (
            <MarkerF
                key={foodObj.id}
                position={foodObj.donationLocation}
                onClick={()=>handleMarkerClick(foodObj)} 
                label={foodObj.foodName}
            />
        );
    })
}

              
          
          </GoogleMap>
        ) : (
          <div>Map is loading...</div>
        )}
      </LoadScript>
      
      <SheetContext.Provider value={[isSheetOpen, setIsSheetOpen]}>
      {/* acceptfoodsheet component will not run as long as as clickedmarker is null */}
            {clickedMarker && (
                <AcceptFoodSheet  
                    foodName={clickedMarker.foodName} 
                    feedablePpl={clickedMarker.feedablePpk} 
                    obj={clickedMarker}
                />
            )}
        </SheetContext.Provider>
    
    </div>
  );
};


export default Map;
