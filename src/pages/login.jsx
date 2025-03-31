import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import styled from "styled-components";
import Backgroundimage from "../components/Backgroundimage";
import Header from "../components/header";
import { firebaseAuth } from "../utils/firebase-config.js";
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate();
  const [formvalues, setformvalue] = useState(
    {
      email: "",
      password: "",
    }
  );
  const handlelogIn = async () => {
    try {
      const { email, password } = formvalues;
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error)
    }
  }
  onAuthStateChanged(firebaseAuth, (currentuser) => {
    if (currentuser) navigate("/");
  })
  return (
    <Container >
      <Backgroundimage />
      <div className="content">
        <Header />
        <div className="form-container flex column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title">
              <h3>Login</h3>
            </div>
            <div className="container flex column">
          
                <input type="email" placeholder="Email Address" name='email' value={formvalues.email} onChange={(e) => setformvalue({ ...formvalues, [e.target.name]: e.target.value })} />


                
                 
               <input type="password" placeholder='Password' name='password' value={formvalues.password} onChange={(e) => setformvalue({ ...formvalues, [e.target.name]: e.target.value })} />
                  
              
               <button onClick ={handlelogIn}>Log In</button>
                  
                </div>
            </div>
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

  .form-container {
    gap: 2rem;
    height: 85vh;

    .form {
      padding: 2rem;
      background-color: #000000b0;
      width: 25vw;
      gap: 2rem;
      color: white;

      .container {
        gap: 2rem;

        input {
          padding: 0.5rem 1rem;
          width: 15rem;
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
      }
    }
  }
}


  
`;
