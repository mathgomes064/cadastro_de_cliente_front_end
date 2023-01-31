import {Routes, Route, Navigate} from "react-router-dom"
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import Register from "../pages/register";

function RoutesMain (){
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="*" element={<Navigate to={"/"} replace/>}/>
        </Routes>
    )
}

export default RoutesMain;