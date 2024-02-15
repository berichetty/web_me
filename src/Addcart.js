import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./resp.css"


function AddCart() {
    const [data, setData] = useState([])
    const [total, setTotal] = useState(0)
    
    useEffect(() => {
        fetch("https://e-commers-api.onrender.com/seconddata")
            .then((res) => {
                return res.json()
            })
            .then((resp) => {
                setData(resp)
                console.log(resp)
            })
    }, [])


    const dele = (g) => {
        fetch("https://e-commers-api.onrender.com/seconddata/" + g, {
            method: "DELETE"
        })
        window.location.reload()
    }

    useEffect(() => {
        fetch("https://e-commers-api.onrender.com/seconddata")
            .then((res) => {
                return res.json()
            })
            .then((resp) => {
                setData(resp)
                const total = resp.reduce((acc, item) => acc + parseFloat(item.price), 0)
                setTotal(total)
            })
    }, [])



    return (

        <div>
            <div style={{ marginTop: "10px" }}>
                <Link to="/App">
                    <button className="btn btn-danger">Back To Home</button>
                </Link>
            </div>


            <div className="add" style={{ marginTop: "20px" }}>
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">img</th>
                            <th scope="col">name</th>
                            <th scope="col">manufacturer</th>
                            <th scope="col">stock</th>
                            <th scope="col">price</th>
                            <th scope="col">Remove data</th>
                          

                        </tr>
                    </thead>

                    {data.map((ourdata) => (

                        <tbody>
                            <tr>
                                <th scope="row">{ourdata.id}</th>
                                <th scope="row"><img src={ourdata.img} alt="k" style={{ width: "110px", height: "60px", borderRadius: "8px" }} /></th>
                                <th scope="row">{ourdata.name}</th>
                                <th scope="row">{ourdata.manufacturer}</th>
                                <th scope="row">{ourdata.stock}</th>
                                <th scope="row"><i class="fa-solid fa-indian-rupee-sign"></i> {ourdata.price}</th>
                                <th scope="row"><p className="btn btn-danger" onClick={() => { dele(ourdata.id) }}>Remove</p></th>
                            </tr>
                        </tbody>
                    ))}
                </table>
             
                <div style={{ marginTop: "10px", marginLeft: "780px" }}>
                <i style={{marginLeft:"240px",marginBottom:"20px"}} class="fa-solid fa-arrow-down-long fa-xl"></i>
                    <h4 style={{ color: "green" }}>

                        Total AddCart Price: <i class="fa-solid fa-indian-rupee-sign"></i> {total} Cr
                    </h4>
                </div>
                


            </div>
        </div>
    )
}
export default AddCart;