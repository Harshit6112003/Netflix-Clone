import { useState } from 'react'
import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import video from '../asset/video.mp4';
import {IoPlayCircleSharp} from 'react-icons/io5';
import {RiThumbUpFill,RiThumbDownFill } from 'react-icons/ri';
import {BsCheck } from 'react-icons/bs';
import {AiOutlinePlus } from 'react-icons/ai';
import {BiChevronDown} from 'react-icons/bi';
export default function Card({ moviesData, isliked = false }) {
  const [ishovered, setishovered] = useState(false);
  const navigate = useNavigate();
  return (

    <Container
      onMouseEnter={() => setishovered(true)}
      onMouseLeave={() => setishovered(false)}>
      <img src={`https://image.tmdb.org/t/p/w500${moviesData.image}`} alt="movie" />
      {ishovered && (
        <div className="hover">
          <div className="image-vide-container">
            <img src={`https://image.tmdb.org/t/p/w500${moviesData.image}`} alt="movie" 
            onClick={()=>navigate("/player")}
            />
           <video src={video} autoPlay loop controls onClick={()=>navigate("/player")}/>
          </div>
          <div className="info-container flex column">
            <h3 className='name' onClick={()=>navigate("/player")}>{moviesData.name}</h3>
            <div className="icons flex j-between">
              <div className="controls flex">
                <IoPlayCircleSharp title='play' onClick={()=>navigate("/player")}/ >
                  <RiThumbUpFill title='like'  />
                  <RiThumbDownFill title='dislike' />
                  {
                    isliked ?(
                      <BsCheck title='removed from list' />)
                       :(
                      <AiOutlinePlus title='add to list' />)
                    
                  }
              </div>
              <div className="info">
                <BiChevronDown title='more info' />
              </div>
            </div>
            <div className="genres flex">
              <ul className='flex'>
                {moviesData.genres.map((genre)=>{
                  <li key={genre}>
                    {genre}
                  </li>
                  
                })}
              </ul>
            </div>
          </div>
        </div>

      )
      }
    </Container>

  )
}
const Container = styled.div`
max-width: 230px;
width: 230px;
height: 100%;
cursor: pointer;
position : relative;
img {
  border-radius: 0.2rem;
  width: 100%;
  height: 100%;
  z-index: 10;
}
.hover {
  z-index: 90;
  height: max-content;
  width:20rem;
  position : absolute;
  top: -18vh;
  left: 0;
  border-radius: 0.3rem;
  box-shadow: rgba(0,0,0,0.75) 0px 3px 10px;
  background-color: #181818;
  transition: 0.3s ease-in-out;
  .image-video-container{
    position: relative;
    height: 140px;
    img {
      width: 100%;
      height: 140%;
      object-fit: cover;
      border-radius: 0.3rem;
      top: 0;
      z-index: 4;
      position :absolute;
    }
    video{
    
      width: 100%;
      height: 140px;
      object-fit: cover;
      border-radius: 0.3rem;
      top: 0;
      z-index: 5;
      position: absolute;
    }

  }

}
`;

