import React from "react";
import Login from "./Login"; 
const PrivateRoute = (props)=>{
    
   
     if(window.localStorage.getItem("username") && window.localStorage.getItem("password")){
        return(
            <>
              {props.children}
            </>
        )
     }else{
        return(
            <Login />
        )
     }
   
}
export default PrivateRoute;
