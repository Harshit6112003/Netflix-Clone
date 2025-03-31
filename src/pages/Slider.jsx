import React from 'react'
import Cardslider from '../components/Cardslider'

export default function Slider({movies}) {
    const getMoviesFromRange = (from,to) =>{
        return movies.slice(from,to)
    }
  return (
<div>
    < Cardslider title = "Trending Now" data = {getMoviesFromRange(0,10)} />
    < Cardslider title = "New Releases" data = {getMoviesFromRange(10,20)} />
    < Cardslider title = "Blockbuster Movies" data = {getMoviesFromRange(20,30)} />
    < Cardslider title = "Popular Movies" data = {getMoviesFromRange(30,40)} />
    < Cardslider title = "Action Movies" data = {getMoviesFromRange(40,50)} />
    < Cardslider title = "Epics" data = {getMoviesFromRange(50,60)} />
</div>
  )
}


