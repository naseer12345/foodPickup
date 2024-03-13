import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useNavigate } from 'react-router-dom';
//
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDz5EDS5pFFOWa-koP2LC7ZMh4uW-dNvAM",
//   authDomain: "foodpick-291fe.firebaseapp.com",
//   projectId: "foodpick-291fe",
//   storageBucket: "foodpick-291fe.appspot.com",
//   messagingSenderId: "488579769240",
//   appId: "1:488579769240:web:b50acfec938abbab51c1ed"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default function SignUpInPage() {
    const navigate = useNavigate();
    const testSignInStatus = true;

    useEffect(() => {
        if (testSignInStatus) {
            navigate('/find_donations');
        }
    }, [navigate, testSignInStatus]);

    return (
        <div className="w-[100vw] h-[100vh] bg-black flex justify-center items-center">
            <div className="flex gap-3 flex-col">
                <Input type="text" placeholder="Your Name" />
                <Button variant="outline">Signup or Signin with Google</Button>
                <Button variant="outline">Continue without Signup or signin</Button>
            </div>
        </div>
    );
}
