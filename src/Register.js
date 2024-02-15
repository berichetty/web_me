import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



function Reg() {



  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [pswd, setPswd] = useState("")
  const [cpswd, setCpswd] = useState("")

  const navigate=useNavigate()


  const firebaseConfig = {
    apiKey: "AIzaSyA4U0Ih2TcJUWHsAo2IySYuL0BeD0qMcqo",
    authDomain: "ganesh-app-c566a.firebaseapp.com",
    projectId: "ganesh-app-c566a",
    storageBucket: "ganesh-app-c566a.appspot.com",
    messagingSenderId: "533126158425",
    appId: "1:533126158425:web:49fca895eb376cccfa7948", 
    measurementId: "G-819PNHRJ64"
  };

   const app= initializeApp(firebaseConfig);
   const auth = getAuth()

  const submitdata = (event) => {
    event.preventDefault()
    if (name.length <= 5) {
      alert("minimum 6 careters....")
    }
    if (pswd!=cpswd) {
      alert("password not maching.....")
    }
    let obj = {
      email: email,
      password: pswd
    }
    createUserWithEmailAndPassword(auth,obj.email,obj.password)

      .then(()=>{
        alert("regestation successfull")
        navigate("/login")
      })
      .catch((err)=>{
        alert("error", err)
      })


  }

  return (
    <div className="container" style={{ width: "500px" }}>

      <div className="card p-3">

        <form onSubmit={submitdata}>
          <div className="card-title"><h2>SignUp</h2></div>

          <div class="mb-3">
            <label class="form-label">Name</label>
            <input value={name} onChange={e => setName(e.target.value)} required type="text" class="form-control" id="exampleInputText" aria-describedby="emailHelp" />
          </div>

          <div class="mb-3">
            <label  class="form-label">Email address</label>
            <input value={email} onChange={e => setEmail(e.target.value)} required type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>

          <div class="mb-3">
            <label  class="form-label">Password</label>
            <input value={pswd} onChange={e => setPswd(e.target.value)} required type="password" class="form-control" id="exampleInputPassword1" />
          </div>

          <div class="mb-3">
            <label class="form-label"> re-Password</label>
            <input value={cpswd} onChange={e => setCpswd(e.target.value)} required type="password" class="form-control" id="exampleInputPassword1" />
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>

      </div>


      <p>If you have already account
        <Link to="/login">Login</Link>
      </p>

    </div>
  )

}
export default Reg;