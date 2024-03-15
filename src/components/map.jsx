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
          ,
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
    height: '95vh',
    width: '100vw',
  };
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import  React,{ useState, useEffect } from 'react';
import { DialogToAddFood } from './donateFoodDialog';
import AcceptFoodSheet from './acceptFoodSheet';
import axios from 'axios';
export const SheetContext = React.createContext()
 const DonationsContext = React.createContext()
const Map = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false); // State variable to control sheet visibility
  const [clickedMarker, setClickedMarker] = useState(null)
  const [donations, setDonations] = useState([]);

  const getDonations = async () => {
    try {
      const response = await axios.get('http://localhost:3000/getdonations');
      return response.data
      } catch (error) {
      console.error('Error:', error);
    }};
  
  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const data = await getDonations();
        setDonations(data);
      } catch (error) {
        console.error('Error fetching donations:', error);
      }
    };
    
    fetchDonations();
  }, []);

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
  const toggleSheet = () => {
    setIsSheetOpen(!isSheetOpen); 
  };
 
// this code is for deleting data or markers

    // const deleteMarker = (clickedData) => {
    //   console.log(donations)
    //   axios.delete(`http://localhost:3000/deletedonation/${clickedData._id}`)
    //   const newData = donations.filter(item => item !== clickedData);
    //     setDonations(newData);
    //     console.log(donations)
    // };
  return (
    <div  style={{ display: 'flex', flexDirection:'column' , justifyContent: 'center'}}>

      <DonationsContext.Provider value={{ donations , setDonations}} >
      <DialogToAddFood currentLocation={currentPosition} />
      </DonationsContext.Provider>
      <LoadScript
        googleMapsApiKey="AIzaSyBm-UxwUQrC7ProtlcuSVtIN67fXm0NzU0"
        onLoad={handleLoad}
      >
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={13}
            center={currentPosition}
            options={{
              disableDefaultUI: true,
              styles: mapStyles.darkMode,
              
            }}
          >
      <MarkerF
      
      position={ currentPosition}
      
      label={"Current location"}
    
    />
      {donations.map((foodObj) => {
  return (
    <MarkerF
      key={foodObj._id}
      position={{ lat: foodObj.donorAddress.latitude, lng: foodObj.donorAddress.longitude }}
      onClick={() => handleMarkerClick(foodObj)}
      label={foodObj.foodName}
      
      icon={{
        url: 'https://cdn.icon-icons.com/icons2/3356/PNG/512/symbol_emoj_food_fastfood_burger_hamburger_icon_210591.png',
  scaledSize: new window.google.maps.Size(32, 32), 
      }
        
      }
    />
  );
})}  
          </GoogleMap>
        ) : (
          <div>Map is loading...</div>
        )}
      </LoadScript>
      
      <SheetContext.Provider value={[isSheetOpen, setIsSheetOpen]}>
      {/* acceptfoodsheet component will not run as long as as clickedmarker is null */}
            {clickedMarker && (
                <AcceptFoodSheet 
                    obj={clickedMarker}

                />
            )}
        </SheetContext.Provider>
    
    </div>
  );
};

export default Map;
