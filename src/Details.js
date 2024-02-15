import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"



function Details(){
   
 let  {empid}=useParams()

const [det,setDet]=useState()

    useEffect(() => {
        fetch("https://e-commers-api.onrender.com/project/"+empid)
            .then((res) => {
                return res.json()
            })
            .then((resp) => {
                console.log(resp)
                setDet(resp)
            })
    }, [])

    return(
    
        <div>
            <Link to="/App">
                 <p style={{marginTop:"10px"}} className="btn btn-danger">Back To Home </p>
            </Link>
            
            <h1>Details For The Prodect</h1>
               {det &&
               <div>
               <img src={det.img} style={{ width: "200px", height: "150px"}} />
               <h5>{det.name}</h5> 
               <h5>prodect price:  <i class="fa-solid fa-indian-rupee-sign"></i>  {det.price}</h5>
               <br/>
               <h5>{det.details}</h5>
               <h5>{det.p}</h5>
               </div>
               }
        </div>
    )
}
export default Details;