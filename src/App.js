import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter,BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Login from "./login/Login.js";
import Register from "./register/Register.js";
// import Deposit from "./updateDeposit/Deposite.js";
//import Withdrawal from "./withdrawal.js";
import Nav from "./nav.js";
import Home from "./Home";
// import Alldata from "./alldata";
// import Withdraw from "./withdraw/Withdraw.js";
 import Upload from "./video.js";
export const AuthContext=React.createContext();

export default function App() {
  let style={
    backgroundImage: "url('https://media.istockphoto.com/photos/person-holds-a-smartphone-with-mobile-banking-icons-projection-picture-id1304484797?b=1&k=20&m=1304484797&s=170667a&w=0&h=Z8RFNCQoyUz1lXq9eZK55DuwA8TPRcPcIAJDR7HDjpk=')",
    height:'800px',
    width:'100%',
   paddingTop:'30px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    //backgroundImage:"url('')"  
}
  return (
    <>
    
    <Nav/>
     <HashRouter> 
      
        <Routes>
        <Route exact path="/home" element={<Home/>}></Route>
          <Route exact path="/register" element={<Register/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          {/* <Route exact path="/deposite" element={<Deposit/>}></Route>
           <Route exact path="/withdrawal" element={<Withdraw/>}></Route>
          <Route exact path="/alldata" element={<Alldata/>}></Route> 
          <Route exact path="/main" element={<Main/>}></Route>  */}
          <Route exact path="/video" element={<Upload/>}></Route> 
          
        
          
     </Routes>
     
     </HashRouter>
     
    </>
  )
  }