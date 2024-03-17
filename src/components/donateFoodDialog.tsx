import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {  useState } from "react"
import axios from 'axios';
export function DialogToAddFood(props) {
  const [foodName, setFoodName] = useState("");
  const [feedablePpl, setFeedablePple] = useState("");
  const currentLocation = props.currentLocation
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // @ts-ignore
      const response = await axios.post('https://us-central1-foodpick-291fe.cloudfunctions.net/api/postdonation', {
        "foodName": `${foodName}`,
        "feedsCount": `${feedablePpl}`,
        "donorAddress": {
          "latitude": currentLocation.lat,
          "longitude": currentLocation.lng
        }
      });
    
      alert("Your food has been added to your current location")
    } catch (error) {
      console.error('Error:', error);
    }
    
  };

  return (
    <Dialog >
    <DialogTrigger asChild>
      <Button variant="outline">Click Me Donate Food</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Donate</DialogTitle>
        <DialogDescription>
          Donate food, Feed a family, Feed a soul.
        </DialogDescription>
      </DialogHeader>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="foodname" className="text-right">
              Food Name
            </Label>
            <Input id="foodname" className="col-span-3" onChange={(e)=>{setFoodName(e.target.value)}} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="amountofpeople" className="text-right">
              Amount of people it can feed?
            </Label>
            <Input id="amoutofpeople" type="number" className="col-span-3" onChange={(e)=>{setFeedablePple(e.target.value)}} />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={()=>{
      const foodNameInput = document.getElementById("foodname");
      const amountOfPeopleInput = document.getElementById("amoutofpeople");

      if (foodNameInput) {
        // @ts-ignore
        foodNameInput.value = "";
      }
      if (amountOfPeopleInput) {
        // @ts-ignore
        amountOfPeopleInput.value = "";
      }
    }} >Add food</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
  )
}
