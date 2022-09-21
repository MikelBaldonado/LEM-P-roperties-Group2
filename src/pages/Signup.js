import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import logoPic from '../assets/LEM.png';
import {NavLink} from 'react-router-dom';
import SignupImage from '../assets/torresur_hero2.jpg';
import '../styles/Signup.css';


function Signup() {

  const [inpval, setInpval] = useState({
    name:"", 
    email:"",
    password:""
  });

  const [data, setData] = useState([]);
  console.log(inpval);

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

    // Validation
    const {name, email, password} = inpval;

    if(name===""){
      alert("Name is required!");
    }else if(email===""){
      alert("Email is required!");
    }else if(!email.includes("@")){
      alert("Please enter a valid email address!");
    }else if(password===""){
      alert("Password is required!");
    }else if(password.length < 5 ){
      alert("Password length must be greater than five!");
    }else{
      // console.log("Data added successfully!");
      
      alert("Successfully Registered!");
      localStorage.setItem("LEMProperties",JSON.stringify([...data, inpval]));

    }
  }

  return (

    <div className="signup">
      <div className="leftSide" style={{backgroundImage:`url(${SignupImage})`}}>
      </div>
      <div className="rightSide">
        <h1>Sign Up</h1>
        <Form>
          <Form.Group className="mb-3 col-lg-4" controlId="formBasicName">
            <Form.Control type="text" onChange={getdata} name="name" placeholder="Enter Your Name" />
          </Form.Group>

          <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
            <Form.Control type="email" onChange={getdata} name="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3 col-lg-4" controlId="formBasicPassword">
            <Form.Control type="password" onChange={getdata} name="password" placeholder="Password" />
          </Form.Group>
        
          <Button variant="primary" className="col-lg-6" onClick={addData} style={{background:"#10202b",color:"white"}} type="submit">
            Register
          </Button>
        </Form>
        <p ClassName="mt-3">Already Have an Account <span><NavLink to="/login">SignIn</NavLink></span></p>
        
      </div>
    </div>

  )
}

export default Signup

















    // <div className="container mt-3">
    //   <section className="d-flex justify-content-between">
    //     <div className="leftSide mt-3 p-3" style={{width:"100%"}}>
    //       <h3 className="text-center col-lg-6">Sign Up</h3>
    //       <Form>
    //         <Form.Group className="mb-3 col-lg-4" controlId="formBasicName">
    //           <Form.Control type="text" onChange={getdata} name="name" placeholder="Enter Your Name" />
    //         </Form.Group>

    //         <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
    //           <Form.Control type="email" onChange={getdata} name="email" placeholder="Enter email" />
    //         </Form.Group>

    //         <Form.Group className="mb-3 col-lg-4" controlId="formBasicPassword">
    //           <Form.Control type="password" onChange={getdata} name="password" placeholder="Password" />
    //         </Form.Group>
           
    //         <Button variant="primary" className="col-lg-6" onClick={addData} style={{background:"#10202b",color:"white"}} type="submit">
    //           Register
    //         </Button>
    //     </Form>
    //     {/* <p ClassName="mt-3">Already Have an Account <span>SignIn</span></p> */}
    //     <p ClassName="mt-3">Already Have an Account <span><NavLink>SignIn</NavLink></span></p>

    //     </div>
    //     <div className="rightSide mt-5">
    //       <div className="sign_img mt-5">
    //         <img src={logoPic} style={{maxWidth:400}} alt="" />
    //       </div>
    //     </div>
    //   </section>
    // </div>
    