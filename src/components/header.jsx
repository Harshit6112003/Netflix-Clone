import React from 'react';
import styled from 'styled-components';
import logo from '../asset/logo.png';
import { useNavigate } from 'react-router-dom'
export default function Header(props) {
    const navigate = useNavigate();
    return (
        
        <Container className="flex a-center j-between">
            <div className="logo"><img src={logo} alt="logo" /></div>
            <button onClick={()=> navigate(props.login ? "/login":"/signup")}>
                {props.login ? "Log In" : "Sign In"}
                </button>

        </Container>
    )
};
const Container = styled.div`
padding:3rem;
.logo{
   img{
   height:5rem;
   }
}
button{
padding:0.5rem 1rem;
background-color:#e50914;
border:none;
color:white;
border-radius:0.2rem;
cursor: pointer;
font-weight:bolder;
font-size:1.05rem;
}

`;