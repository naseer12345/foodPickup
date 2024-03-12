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
import { useState, useEffect } from "react"
import axios from 'axios';


export function DialogToAddFood() {
  const [foodName, setFoodName] = useState("");
  const [feedablePpl, setFeedablePple] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/donatefood', {
        foodName,
        feedablePpl
      });
      // Handle response
      console.log('Response:', response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Dialog>
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
            <Label htmlFor="name" className="text-right">
              Food Name
            </Label>
            <Input id="name" className="col-span-3" onChange={(e)=>{setFoodName(e.target.value)}} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Amount of people it can feed?
            </Label>
            <Input id="username" className="col-span-3" onChange={(e)=>{setFeedablePple(e.target.value)}} />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" >Add food</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
  )
}
