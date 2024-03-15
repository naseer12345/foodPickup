import { Button } from './ui/button';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
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
  import { useNavigate } from 'react-router-dom';
  import { SheetContext } from './map';
import { useContext } from 'react';

export default function AcceptFoodSheet(props){
 
    const navigateToDirectionPage = useNavigate();
   
    const searchParams = new URLSearchParams();
    searchParams.append('lat', props.obj.donorAddress.latitude);
    searchParams.append('lng', props.obj.donorAddress.longitude);
    const [isSheetOpen, setIsSheetOpen] = useContext(SheetContext)
    const toggleSheet = () => {
        setIsSheetOpen(!isSheetOpen); // Toggle sheet visibility
      };
    const clickedMarerObj =  props.obj
   return( 
   <Sheet open={isSheetOpen} >
        
        <SheetContent>
          <SheetHeader >
            <SheetTitle>{props.obj.foodName}</SheetTitle>
            <SheetDescription>
               It can feed upto {props.obj.feedsCount} people.

            </SheetDescription>
          </SheetHeader>
          <Button  onClick={()=>toggleSheet()}>Close</Button>  
          {/* drawer for direction starts from here  */}
          <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline"  >Accept donation</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>{props.obj.foodName}</DrawerTitle>
            <DrawerDescription> Donor Food Address lat: {props.obj.donorAddress.latitude}, lng: {props.obj.donorAddress.longitude}</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
             
            </div>
           
          </div>
          <DrawerFooter>
            <Button onClick={() => navigateToDirectionPage(`/direction?${searchParams.toString()}`)} >Pickup the food</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
        </SheetContent>
        
      </Sheet>
)
}
