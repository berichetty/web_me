import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
   
   const firebaseConfig = {
    apiKey: "AIzaSyA4U0Ih2TcJUWHsAo2IySYuL0BeD0qMcqo", 
    authDomain: "ganesh-app-c566a.firebaseapp.com",
    projectId: "ganesh-app-c566a",
    storageBucket: "ganesh-app-c566a.appspot.com",
    messagingSenderId: "533126158425",
    appId: "1:533126158425:web:49fca895eb376cccfa7948",
    measurementId: "G-819PNHRJ64"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()

function User(){
    const[user,setUser]=useState()
    useEffect(()=>{
      let a=  onAuthStateChanged(auth,user=>setUser(user))
      return a
    },[])
    return user
}
export default User;