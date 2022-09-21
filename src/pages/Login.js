import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logoPic from '../assets/LEM.png';
import { NavLink } from 'react-router-dom';
import LoginImage from '../assets/dusit_residence_hero.jpg';
import '../styles/Login.css';

function Login() {

  const [inpval, setInpval] = useState({
    name:"",
    email:"",
    password:""
  });

  const [data, setData] = useState([]);
  // console.log(inpval);

  const getdata = (e) => { 
    // console.log(e.target.value);
    const {value, name} = e.target;
    // console.log(value, name);

    setInpval(()=>{
      return {
        ...inpval,
        [name]:value
      }
    })

  }


  const addData = (e) =>{
    e.preventDefault();

    // console.log(inpval);

    const getuserArr = localStorage.getItem("LEMProperties");
    console.log(getuserArr);

    // Validataion
    const { email, password} = inpval;

   if(email===""){
      alert("Email is required!");
    }else if(!email.includes("@")){
      alert("Please enter a valid email address!");
    }else if(password===""){
      alert("Password is required!");
    }else if(password.length < 5 ){
      alert("Password length must be greater than five!");
    }else{
      
      if(getuserArr && getuserArr.length){
        const userdata = JSON.parse(getuserArr);
        // console.log(userdata);
        const userlogin = userdata.filter((el, k)=>{
          return el.email === email && el.password === password
        });

        // console.log(userlogin);

        // Check Validataion
        if(userlogin.length === 0){
          alert("Invalid details!");
        }else{
          console.log("User Login successfully!");
        }
      }

    }
  }

  return (

    <div className="login">
      <div className="leftSide" style={{backgroundImage:`url(${LoginImage})`}}></div>
      <div className="rightSide">
        <h1>Sign In</h1>
        <Form>    
          <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
            <Form.Control type="email" onChange={getdata} name="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3 col-lg-4" controlId="formBasicPassword">
            <Form.Control type="password" onChange={getdata} name="password" placeholder="Password" />
          </Form.Group>
         
          <Button variant="primary" className="col-lg-6" onClick={addData} style={{background:"black",color:"white"}} type="submit">
            Submit
          </Button>
        </Form>
        <p ClassName="mt-3">Don't Have an Account <span><NavLink to="/signup">SignUp</NavLink></span></p>
      </div>
    </div>




  //   <div className="container mt-3">
  //   <section className="d-flex justify-content-between">
  //     <div className="leftSide mt-3 p-3" style={{width:"100%"}}>
  //       <h3 className="text-center col-lg-6">Sign IN</h3>
      //   <Form>    
      //     <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
      //       <Form.Control type="email" onChange={getdata} name="email" placeholder="Enter email" />
      //     </Form.Group>

      //     <Form.Group className="mb-3 col-lg-4" controlId="formBasicPassword">
      //       <Form.Control type="password" onChange={getdata} name="password" placeholder="Password" />
      //     </Form.Group>
         
      //     <Button variant="primary" className="col-lg-6" onClick={addData} style={{background:"black",color:"white"}} type="submit">
      //       Submit
      //     </Button>
      // </Form>
      // <p ClassName="mt-3">Don't Have an Account <span><NavLink to="/signup">SignUp</NavLink></span></p>

  //     </div>
  //     <div className="rightSide mt-5">
  //       <div className="sign_img mt-5">
  //         <img src={logoPic} style={{maxWidth:400}} alt="" />
  //       </div>
  //     </div>
  //   </section>
  // </div>


  )
}

export default Login

































// import React, { useRef, useState, useEffect } from 'react';

// const Login = () => {

  
//   const userRef = useRef(); //set focus on first input  
//   const errRef = useRef(); //set focus on error, error handling

//   const [user, setUser] = useState('');
//   const [pwd, setPwd] = useState('');
//   const [errMsg, setErrMsg] = useState('');
//   const [success, setSuccess] = useState(false);
  
//   // Set focus on input when component loads
//   useEffect(() => {
//     userRef.current.focus();
//   }, [])


//   useEffect(() => {
//     setErrMsg('');
//   }, [user, pwd])

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     console.log(user, pwd);

//     setUser('');
//     setPwd('');
//     setSuccess(true);
//   }
  
//   return (  
//     <>
//       { success ? (
//           <section>
//             <h1>You are logg In!</h1>
//             <br />
//             <p>
//               {/* <a href="#" onClick={foo}>Go to home</a> */}
//               <a href="#top">Go to home</a>
//             </p>
//           </section>
//       ) : (

//         <section>
//         <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
//         <h1>Sign In</h1>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="username">Username:</label>
//           <input 
//             type="text" 
//             id="username"
//             ref={userRef}
//             autocomplete="off"
//             onChange={(e) => setUser(e.target.value)}
//             value={user}
//             required 
//           />
  
//           <label htmlFor="password">Password:</label>
//           <input 
//             type="password" 
//             id="password"
//             onChange={(e) => setPwd(e.target.value)}
//             value={pwd}
//             required 
//           />
//           <button>Sign In</button>
  
//           <p>
//             Need an Account? <br/>
//             <span className="line">
//               <a href="#">Sign Up</a>
//             </span>
  
//           </p>
//         </form>
//       </section>


//       )};
  
//     </>
     
//     );
//   }
  

    
// export default Login;
