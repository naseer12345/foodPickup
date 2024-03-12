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

// api : AIzaSyBm-UxwUQrC7ProtlcuSVtIN67fXm0NzU0
// thigs i need, i need something to show person name, food, destination. option to accept the food.
// i need a button that will make us upload food or donate food . donate with current location.
// once accepted, all the other food marks should disapear and only show destination to the accepted food place.
// or you can direct to new page with only map and and food pick location.
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import  React,{ useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from './ui/button';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"

const Map = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false); // State variable to control sheet visibility
  const navigateToDirectionPage = useNavigate();




  const mapContainerStyle = {
    height: '100vh',
    width: '100vw',
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

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

  

  return (
    <div>
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
              disableDefaultUI: false,
              styles: mapStyles.darkMode,
            }}
          >
      
            {currentPosition && (
              <MarkerF
                position={currentPosition}
                onClick={toggleSheet} // Call toggleSheet function when marker is clicked
              />
            )}
          </GoogleMap>
        ) : (
          <div>Map is loading...</div>
        )}
      </LoadScript>
      
      {/* Sheet component */}
      <Sheet open={isSheetOpen} >
        
        <SheetContent>
          <SheetHeader >
            <SheetTitle>Pasta Beef Bread</SheetTitle>
            <SheetDescription>
              enough food to feed 2 fat cows 

            </SheetDescription>
          </SheetHeader>
          <Button onClick={toggleSheet}>Close</Button>  
          {/* drawer for direction starts from here  */}
          <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" >Accept donation</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>food name</DrawerTitle>
            <DrawerDescription> potention food address</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
             
            </div>
           
          </div>
          <DrawerFooter>
            <Button onClick={() => navigateToDirectionPage('/direction')} >Pickup the food</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
        </SheetContent>
        
      </Sheet>

      
      
    </div>
  );
};

export default Map;
