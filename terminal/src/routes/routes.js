import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from "../pages/home";
import Money from "../pages/money";
import Result from "../pages/result";

const MyRoutes = ()=>{
    return(

    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/money" element={<Money/>} />
            <Route path="/result" element={<Result/>} />
            {/* <Route path="*" element={ <NotFound/>}  /> */}
        </Routes>
    </BrowserRouter>
    
    )
};

export default MyRoutes;