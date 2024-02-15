
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { signOut, getAuth } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import User from "./user";

import axios from "axios";

import Pagination from "./pagination";
import "./resp.css"


function App() {
    const [data, setData] = useState([])
    const [value, setValue] = useState("")
    const [count, setCount] = useState(0)

    const navigate = useNavigate()
    let currentUser = User()

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


    const submitData = (event) => {
        event.preventDefault()

        signOut(auth)

            .then(() => {
                alert("regestation successfull")
                navigate("/login")
            })
            .catch((err) => {
                alert("error", err)
            })


    }

    useEffect(() => {
        fetch("https://e-commers-api.onrender.com/project")
            .then((res) => {
                return res.json()
            })
            .then((resp) => {
                setData(resp)
            })
    }, [])




    const search = async (event) => {
        event.preventDefault()
        return await axios.get(`https://e-commers-api.onrender.com/project?q=${value}`)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }





    const [sort, setSort] = useState("")
    const sorting = async (e) => {
        let value = e.target.value
        setSort(value)
        return await axios.get(`https://e-commers-api.onrender.com/project?_sort=${value}&_order=asc`)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    // add to cart

    const adddata = (id) => {
        fetch("https://e-commers-api.onrender.com/project/" + id)
            .then((res) => {
                return res.json()
            })
            .then((resp) => {
                console.log(resp)
                fetch("https://e-commers-api.onrender.com/seconddata", {
                    method: "POST",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify(resp)
                }).then(() => {
                    alert("Added in cart....")
                })

            })
    }
    //  count:

    useEffect(() => {
        fetch("https://e-commers-api.onrender.com/seconddata")
            .then((res) => {
                return res.json()
            })
            .then((resp) => {
                setCount(resp)

            })
    })


    // pagination...

    const [page, setPage] = useState(1)
    const [reco, setReco] = useState(6)

    let lkj = page * reco
    let asd = lkj - reco

    let myData = data.slice(asd, lkj)


    const updatepage = (n) => {
        setPage(n)
    }

    const next = () => {   
        setPage(page +1)
    }

    const prev = () => {
        if (page <= 1) {
            return false
        }
        setPage(page - 1)
    }


    const Deta = (id) => {
        navigate("/Details/" + id)
    }






    return (
        <div>



            <div className="gk" style={{ backgroundColor: "lightblue", boxShadow: "lightblue 4px 5px 5px 4px" }}>
                <form >
                    <img id="img" src="https://www.caranddriver.com/_assets/design-tokens/caranddriver/static/images/logos/logo.68b8e69.svg?primary=navLogoColor" style={{ width: "100px", height: "80px", marginLeft: "10px" }} />
                    <input value={value} onChange={(e) => setValue(e.target.value)} style={{ marginLeft: "40px", width: "600px", height: "45px", borderRadius: "50px" }} type="text" placeholder="Search for more mustang cars" />
                    <span style={{ marginLeft: "10px" }} className="btn btn-success" onClick={search} >search</span>
                    <Link to="/Addcart">

                        <span>
                            <i style={{ marginLeft: "40px" }} class="fa-solid fa-bell fa-2xl"></i>

                            <span id="val" style={{ position: "absolute", right: "353px", top: "14px", borderRadius: "60px" }} className="badge text-bg-danger">{count.length}</span>

                        </span>

                    </Link>
                    <Link to="/login">
                        <a style={{ marginLeft: "40px" }} className="btn btn-danger" >LOGOUT</a>
                    </Link>


                    <span style={{ fontSize: "16px", marginLeft: "18px", border: "2px solid black", borderRadius: "50px", padding: "5px" }}> <i class="fa-solid fa-user fa-lg"></i> {currentUser?.email}</span>


                </form>
            </div>


            <div style={{ display: "flex", gap: "60px" }}>

                <div id="lk">
                    <form onSubmit={submitData} style={{ backgroundColor: "lightblue", width: "330px", padding: "10px", marginTop: "40px", marginLeft: "30px", borderRadius: "10px" }}>


                        <div className="mb-3" style={{ width: "300px" }}>
                            <select id="disabledSelect" class="form-select">
                                <option>Disabled select</option>
                            </select>
                        </div>

                        <div className="mb-3" style={{ width: "300px" }}>
                            <select id="disabledSelect" class="form-select">
                                <option>Disabled select</option>
                            </select>
                        </div>

                        <div className="mb-3" style={{ width: "300px" }}>
                            <select id="disabledSelect" class="form-select">
                                <option>Disabled select</option>
                            </select>
                        </div>

                        <div className="mb-3" style={{ width: "300px" }}>
                            <select id="disabledSelect" class="form-select">
                                <option>Disabled select</option>
                            </select>
                        </div>

                        <div className="mb-3" style={{ width: "300px" }}>
                            <select id="disabledSelect" class="form-select">
                                <option>Disabled select</option>
                            </select>
                        </div>


                    </form>

                    <form style={{ marginTop: "30px", width: "330px", height: "60px", backgroundColor: "lightblue", padding: "10px", marginLeft: "30px", borderRadius: "10px" }}>
                        <div className="mb-3" sty le={{ width: "300px" }}>
                            <select value={sort} onChange={sorting} id="disabledSelect" class="form-select">
                                <option>--sort--</option>
                                <option>name</option>
                                <option>manufacturer</option>
                                <option>stock</option>
                                <option>price</option>
                            </select>
                        </div>
                    </form>



                </div>


                <div className="as" style={{ display: "grid", gridTemplateColumns: "auto auto auto", gridGap: "20px", marginTop: "20px" }}>
                    {myData.map((ourdata) => (
                        <div>
                            <div className="card" style={{ width: "250px", height: "330px", textAlign: "center", boxShadow: "lightblue 4px 5px 5px 4px" }} >
                                <img src={ourdata.img} style={{ width: "220px", height: "130px", borderRadius: "8px", marginLeft: "14px", marginTop: "20px" }} />
                                <h4>{ourdata.name}</h4>
                                <h5>{ourdata.manufacturer}</h5>
                                <h5> <i class="fa-solid fa-indian-rupee-sign"></i> {ourdata.price}</h5>
                                <p onClick={() => { adddata(ourdata.id) }} className="btn btn-success">ADD CART</p>
                                <p className="btn btn-danger" onClick={() => { Deta(ourdata.id) }} >Details</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <Pagination  total={data.length} recor={reco} update={updatepage} next={next} prev={prev} />




            <div className="zx" style={{ display: "flex", marginTop: "50px", justifyContent: "space-evenly", backgroundColor: "lightblue", paddingTop: "30px" }}>


                <div>
                    <h5>LOGO</h5>
                    <p>SUB LINE</p>
                </div>

                <div>
                    <h5>Pages</h5>
                    <p>About us</p>
                    <p>Our Expertise</p>
                    <p>Testimonials</p>
                    <p>Car & sparparts</p>
                    <p>Buy</p>
                </div>

                <div>
                    <h5>Legal and Help</h5>
                    <p>FAQs</p>
                    <p>Terms of use</p>
                    <p>Privacy policy</p>
                </div>

                <div>
                    <h5>Contact us</h5>
                    <p> <i class="fa-solid fa-location-dot"></i> Address</p>
                    <p> <i class="fa-solid fa-mobile"></i> Phone Number</p>
                    <p> <i class="fa-solid fa-envelope"></i>  Mail id</p>
                </div>

                <div>
                    <h5>Social Link</h5>
                    <br />
                    <div style={{ display: "flex", gap: "15px" }}>
                        <i class="fa-brands fa-facebook fa-xl"></i>
                        <i class="fa-brands fa-twitter fa-xl"></i>
                        <i class="fa-brands fa-instagram fa-xl"></i>
                        <i class="fa-brands fa-youtube fa-xl"></i>
                    </div>
                </div>
            </div>



        </div>
    )
}
export default App;