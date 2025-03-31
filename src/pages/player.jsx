import React from 'react'
import styled from 'styled-components'
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import video from '../asset/video.mp4';

export default function Player() {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="player">
        <div className="back">
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>
        <video src={video} autoPlay loop controls />
      </div>
    </Container>
  )
}

const Container = styled.div`
  .player {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black; 
    
    .back {
      position: absolute;
      top: 20px;
      left: 20px;
      z-index: 1;
      svg {
        font-size: 3rem;
        cursor: pointer;
        color: white;
      }
    }

    video {
      width: 80%;
      height: auto;
      object-fit: cover;
    }
  }
`;
