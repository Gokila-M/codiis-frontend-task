import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useState } from "react";
import {  useNavigate} from "react-router-dom";
import styles from "./styles.module.css";

export default function Register() {
  let style={
    backgroundImage: "url('https://img.freepik.com/free-photo/maple-leaf-border-background-orange-watercolor-autumn-season_53876-128735.jpg?w=2000')",
    height:'835px',
    width:'100%',
   paddingTop:'10px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',  
}
  try {
  } catch (error) {
    console.log(error.message);
  }
  const navigate=useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    mobileno: "",
   
  });
  const [error, setError] = useState("");
  const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  }
};

  async function handle(e) {
    e.preventDefault();
    const url = "https://server-cs.herokuapp.com/api/customer/register";
    axios
      .post(url,{
        name: values.name,
        email: values.email,
        password: values.password,
        mobileno: values.mobileno,
       
      },config
      )
      
      .then((res) => {
        if (res.status === 400) {
          console.log("Something went wrong");
        } else {
          alert("Registerd Successfully");
          navigate("/login")
          console.log(res);
        }
      })
      .catch((error) => {
        setError(error.response.data)
        console.log(error);
      });
      // console.log(data);
  }
 

  return (
    <>
    {/* <div className={styles.signup_container}> */}
				<div style={style}>
						<div className={styles.left} >
            <h1 className={styles.studenth1}>Create Account</h1>
            <form>
							<input
            className={styles.inputw}
              type="text"
              placeholder="Enter Your Name"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            /><br></br>
							
							
             <input
            className={styles.inputw}
              type="email"
              placeholder="Enter Your Email"
              onChange={(e) =>
                setValues({ ...values, email: e.target.value })
              }
            /><br></br> 
            <input
            className={styles.inputw}
              type="password"
              placeholder="Enter Your Password"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            /><br></br>
             <input
            className={styles.inputw}
              type="number"
              placeholder="Enter Your MobileNumber"
              onChange={(e) =>
                setValues({ ...values, mobileno: e.target.value })
              }
            /><br></br>
             	{error && <div className={styles.error_msg}>{error}</div>}
  
               </form>

						
					{/* </div>       */}
		</div>
    <center>
							<button type="submit" className={styles.green_btn} onClick={handle}>
								Sign Up
							</button>
              </center>
              </div>
         </>
  );
}
