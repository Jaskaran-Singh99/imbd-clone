import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { Card } from '../components/card'
import { IoIosArrowForward } from "react-icons/io";

export const MovieList = () => {
    let {type} = useParams()
    const [movie, setMovie]= useState([])

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : 'popular'}?api_key=62d64696657178dbaeb82176e7e3e46a`).then((res)=>{
            res.json().then(data=>setMovie(data.results))
         }) 
        
    }, [type])
    console.log(movie)
    console.log(type)
   
  return (
    <>
    <div className='heading'>
        <div className='sub-heading'>
          <span>{type.toUpperCase()} </span><IoIosArrowForward></IoIosArrowForward>
        </div>
        <p>Tv shows and movie just for you</p>
    </div>
    <div className='card-container'>
    {movie.map((movie)=>{
        return <Card movie={movie}></Card>
    })}
    </div>
    </>

    
  )
  }

