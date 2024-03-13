import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useNavigate } from 'react-router-dom';
import {signInWithPopup} from "firebase/auth"
import {auth , provider} from './firebase'


export default function SignUpInPage() {
    const navigate = useNavigate();
    // const testSignInStatus = false;

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


    // useEffect(() => {
    //     if (testSignInStatus) {
    //         navigate('/find_donations');
    //     }
    // }, [navigate, testSignInStatus]);

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
