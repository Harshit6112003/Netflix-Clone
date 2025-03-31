import React from 'react'
import Card from './Card'

export default function Cardslider({data,title}) {
  return( <div>
    {
        data.map((movie,index)=>{
            return <Card moviesData={movie} index={index} key ={movie.id} />
        })
    }
  
  </div>
  )
}


