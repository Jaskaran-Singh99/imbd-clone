import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetail = () => {
    const {id} = useParams()
    const [movie, setMovie] = useState([])
    useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=62d64696657178dbaeb82176e7e3e46a`).then((res)=>{
        res.json().then((data)=>setMovie(data))
    })
    }, [id])
    // {movie.genres.map((movie)=>console.log(movie.name))}
  return (
    <>
    <header>
        <div className='image-container'>
            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}></img>
        </div>
        <div className='text-container'>
            <div className='genre'>
              
                {/* {movie.genres.map((movie)=>{
                    console.log(movie) 
                })} */}
            </div>
        </div>
    </header>
    </>
  )
}
