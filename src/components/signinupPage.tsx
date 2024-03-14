import React, { useEffect , useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useNavigate } from 'react-router-dom';
import {signInWithPopup} from "firebase/auth"
import { app, auth, provider } from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// laksdjflajf
// limit the the budget on google maps api 
export default function SignUpInPage() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    const handleclick = () => {
        signInWithPopup(auth, provider)
          .then((data) => {
            // signed up so navigate to ... 
            navigate('/find_donations');
          })
          .catch((error) => {
            console.error("Error during sign in: ", error);
          });
      };

      useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            if (user) {
                
                console.log("User is signed in. UID:", user.uid);
                navigate('/find_donations');
            } else {
                console.log("user is not signed in")
            }
        });

        return () => unsubscribe();
    }, [navigate]);
    // const userUID = user?.uid;
    // console.log(userUid)

    return (
        <div className="w-[100vw] h-[100vh] bg-black flex justify-center items-center">
            <div className="flex gap-3 flex-col">
                <Input type="text" placeholder="Your Name" />
                <Button variant="outline" onClick={()=>handleclick()}>Signup or Signin with Google</Button>
                <Button variant="outline">Continue without Signup or signin</Button>
            </div>
        </div>
    );
}
