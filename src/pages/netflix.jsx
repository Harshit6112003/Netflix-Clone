import React ,{useEffect, useState }from 'react'
import Navbar from '../components/navbar';
import backgroundimage from '../asset/home.jpg';
import MovieLogo from '../asset/homeTitle.webp';
import { FaPlay } from 'react-icons/fa';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { fetchMovies, getGenres } from '../store';
import {useDispatch, useSelector}  from 'react-redux';
import Slider from '../pages/Slider'
export default function Netflix() {
  const [isScrolled, setIsScrolled] = useState(false);

window.onscroll =()=>{
  setIsScrolled(window.pageYOffset ===0 ? false:true);
  return() =>(window.onscroll =null);
};
const navigate =  useNavigate ();
const genresLoaded = useSelector((state)=>state.Netflix.genresLoaded);
const dispatch = useDispatch ();
const movies = useSelector((state)=> state.Netflix.movies);

useEffect(() => {
  dispatch(getGenres());
}, );

useEffect(() => {
  if (genresLoaded) 
    dispatch(fetchMovies({  type: "all" }));
  
}, );


  return (
    <Container>
   <Navbar isScrolled = {isScrolled} />
   <div className="hero">
    <img src={backgroundimage} alt="background" />
    <div className="container">
      <div className="logo">
        <img src={MovieLogo} alt="movielogo" />
      </div>
      <div className="buttons flex">
        <button className='flex j-center a-center' onClick={()=>navigate('/Player')}>
          <FaPlay />play
        </button>
        <button className='flex j-center a-center'>
          <AiOutlineInfoCircle />More Info
        </button>
      </div>
    </div>
   </div>
   < Slider movies ={movies} />
  
   </Container>
  );
};
const Container = styled.div`
background-color: #000000;
.hero{
  position: relative;
  .background{
    filter :brightness(60%);
  }
  img{
    height: 100vh;
    width: 100vw;
  }
  .container{
    position: absolute;
    bottom: 5rem;
    .logo{
      img{
        width: 100%;
        height: 100%;
        margin-left: 5rem;
      }
    }
    .buttons{
      margin :5rem;
      gap: 2rem;
      button{
        font-size:1.4rem;
         gap: 1rem;
         border-radius: 0.2rem;
         padding : 0.5rem;
         padding-left: 2rem;
         padding-right: 2.4rem;
         border: none;
         cursor:pointer;
         transition: 0.3 ease-in-out;
         &:hover{
          opacity: 0.8;
         }
         &:nth-of-type(2){
          background-color: rgba(109,109,110,0.7);
          color: white;
          svg{
            font-size: 1.8rem;
          }
         }
      }
    }
  }
}
`;
