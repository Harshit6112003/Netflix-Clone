import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import logo from "../asset/logo.png";
import { FaPowerOff, FaSearch } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { onAuthStateChanged } from "firebase/auth";


export default function Navbar({ isScrolled }) {
  const links = [
    { name: "Home", link: "/" },
    { name: "TV Shows", link: "/tv" },
    { name: "Movies", link: "/movies" },
    { name: "My List", link: "/mylist" },
  ];
  const navigate = useNavigate();
   onAuthStateChanged(firebaseAuth, (currentuser) => {
      if (!currentuser) navigate("/login");
    });

  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);

  return (
    <Container>
      <nav className={`flex ${isScrolled ? "scrolled" : ""}`}>
        <div className="left flex a-center">
          <div className="brand flex a-center j-center">
            <img src={logo} alt="logo" />
          </div>
          <ul className="links flex">
            {links.map(({ name, link }) => (
              <li key={name}>
                <Link to={link}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="right flex a-center">
          <div className={`search ${showSearch ? "showsearch" : ""}`}>
            <button
              onFocus={() => setShowSearch(true)}
              onBlur={() => {
                if (!inputHover) setShowSearch(false);
              }}
            >
              <FaSearch />
            </button>
            <input
              type="text"
              placeholder="Search"
              onMouseEnter={() => setInputHover(true)}
              onMouseLeave={() => setInputHover(false)}
              onBlur={() => {
                setShowSearch(false);
                setInputHover(false);
              }}
            />
          </div>
          <button className="logoutbutton" onClick={() => {alert("You Really Want To Logout");signOut(firebaseAuth)}}><FaPowerOff /></button>
        </div>
      </nav>
    </Container>
  );
}

const Container = styled.div`
.scrolled {
  background-color: black;
}

nav {
  position: sticky;
  top: 0;
  height: 6.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between; 
  position: fixed;
  top: 0;
  z-index: 2;
  padding: 0 4rem;
  transition: 0.3s ease-in-out;
}

.left {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: flex-start; 
  flex: 1;
}

.right {
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: flex-end; 
  flex: 1;
}
.logoutbutton {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  color: white;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.3s ease-in-out;
}

.logoutbutton:hover {
  background-color: #d30909; 
}
.brand img {
  height: 4rem;
 
}

.links {
  list-style-type: none;
  display: flex;
  gap: 2rem;
}

.links li a {
  color: white;
  text-decoration: none;
}

.search {
  display: flex;
  gap: 0.4rem;
  align-items: center;
  justify-content: center;
  padding: 0.2rem;
  padding-left: 0.5rem;
}

.search button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.search button svg {
  color: white;
}

.search input {
  width: 0;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s ease-in-out;
  background-color: transparent;
  border: none;
  color: white;
}

.search input:focus {
  outline: none;
}

.showsearch {
  border: 1px solid white;
  background-color: rgba(0, 0, 0, 0.6);
}

.showsearch input {
  width: 10rem;
  opacity: 1;
  visibility: visible;
  padding: 0.3rem;
}
`;