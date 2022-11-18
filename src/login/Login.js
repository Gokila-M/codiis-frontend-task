import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { AuthContext } from "../App";
import styles from "../login/styles.module.css";

export default function Login() {
  let style={
    backgroundImage: "url('https://i.pinimg.com/originals/86/44/88/864488f84ba139aa5fdbae3980f0cd86.jpg')",
    height:'835px',
    
    
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',  
}

  try {
  } catch (error) {
    console.log(error.message);
  }
 
  let token=useContext(AuthContext);
// console.log(toke);
const navigate=useNavigate();
const [model,setModel]=useState(false);
const [error,setError]=useState("");

  const [values, setValues] = useState({

    email: "",
    password: ""
  });

  const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  }
};

  async function handle(e) {
    e.preventDefault();
    const url = "https://server-cs.herokuapp.com/api/login";
    axios
      .post(url, {
        email: values.email,
        password: values.password
      },config
      )
     
      .then((res) => {
        if (res.status === 400) {
          console.log("Something went wrong");
          
        } else {
        // setModel(true);
        alert('ok')
        //  console.log(token)
          // console.log(token)
          // navigate("/outpassalldata")
          // console.log(res.data);
          
          localStorage.setItem('x-auth-token',res.data);
          console.log(res.data);
          localStorage.getItem('x-auth-token');
          console.log(localStorage.getItem('x-auth-token'));
          navigate("/video");
          // console.log(token)
         
        }
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) 
          setError(error.response.data);
          // console.log(error)
        })
      // console.log(data);
  }
  // const style = {
  //   "margin-left": "0px",
  //   padding: "0px"
  // };

  

  return (
    <>
    
      <div  className={styles.login_container} style={style}>
				<div className={styles.login_form_container}>
					<div className={styles.left}>
						<form className={styles.form_container} method='post'>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
              onChange={(e) =>
                setValues({ ...values, email: e.target.value })
              }
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}             
						<button type="submit" className={styles.green_btn} onClick={handle}>
							Login
						</button>
          
						</form>
					</div>
					<div className={styles.right}>
						<h1>New User ?</h1>
						<Link to="/register">
							<button type="button" className={styles.white_btn} >
								Register
							</button>
						</Link>
					</div>
				  </div>
			    </div>
    
  
    </>
  );
}
