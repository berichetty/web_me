import App from "./App";
import Login from "./login";
import Reg from "./Register";
import AddCart from "./Addcart";
import Details from "./Details";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";


function Data(){
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Reg/>}/>
                    <Route path="/App" element={<App/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/Addcart" element={<AddCart/>}/>
                    <Route path="/Details/:empid" element={<Details/>}/> 
                </Routes>
            </Router>

        </div>
    )
}
export default Data;