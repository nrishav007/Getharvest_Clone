import { Routes,Route } from "react-router-dom";
import { Login } from "../Pages/Login/Login";
import { Signup } from "../Pages/Signup/Signup";
import {Home} from "../Pages/Home/Home";
const AllRoutes=()=>{

    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
        </Routes>
    )
}
export {AllRoutes}