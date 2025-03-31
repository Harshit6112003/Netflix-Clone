import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import React, { useState } from 'react'
import styled from "styled-components";
import Backgroundimage from "../components/Backgroundimage";
import Header from "../components/header";
import {firebaseAuth} from "../utils/firebase-config.js";
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [formvalues, setformvalue] = useState(
    {
      email: "",
      password: "",
    }
  )
  const handlesignin = async()=>{
    try {
      const{email,password} = formvalues;
      await createUserWithEmailAndPassword(firebaseAuth,email,password);
    } catch (error) {
      console.log(error)
    }
  }
  onAuthStateChanged(firebaseAuth,(currentuser)=>{
    if(currentuser) navigate("/");
  })
  return (
    <Container showPassword={showPassword}>
      <Backgroundimage />
      <div className="content">
        <Header login />
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <h6>Ready to watch? enter your email to create or restart membership</h6>
          </div>
          <div className="form">
            <input type="email" placeholder='Email Address' name='email' value={formvalues.email} onChange={(e) => setformvalue({ ...formvalues, [e.target.name]: e.target.value })}/ >


            {
              showPassword && (
                <input type="password" placeholder='Password' name='password' value={formvalues.password} onChange={(e) => setformvalue({ ...formvalues, [e.target.name]: e.target.value })}/>
              )
            }
              {
              !showPassword && (
                <button onClick={() => setShowPassword(true)}>Get Started</button>
              )
              }
          </div>
          <button onClick = {handlesignin}>Sign Up</button>
        </div>
      </div>
    </Container>

  )
}
const Container = styled.div`
  position: relative;

  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
  }

  .body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;  
  }

  .text {
    gap: 1rem;
    text-align: center;
    font-size: 2rem;

    h1 {
      padding: 0.25rem;
    }
  }

  .form {
    display: grid;
    width: 60%;
    grid-template-columns:${({ showPassword }) => showPassword ? "1fr 1fr " : "2fr 1fr"};

    input {
      color: black;
      border: none;
      padding: 1.5rem;
      font-size: 1.2rem; 
      border: 1px solid black;

      &:focus {
        outline: none;
      }
    }

    button {
      padding: 0.5rem 1rem;
      background-color: #e50914;
      border: none;
      color: white;
      cursor: pointer;
      font-weight: bolder;
      font-size: 1.05rem;
    }
  }

  button {
    padding: 0.5rem 1rem;
    background-color: #e50914;
    border: none;
    color: white;
    border-radius: 0.2rem;
    cursor: pointer;
    font-weight: bolder;
    font-size: 1.05rem;
  }
`;
