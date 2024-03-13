import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyDz5EDS5pFFOWa-koP2LC7ZMh4uW-dNvAM",
    authDomain: "foodpick-291fe.firebaseapp.com",
    projectId: "foodpick-291fe",
    storageBucket: "foodpick-291fe.appspot.com",
    messagingSenderId: "488579769240",
    appId: "1:488579769240:web:b50acfec938abbab51c1ed"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)
  const provider = new GoogleAuthProvider();

  
export {auth, provider};