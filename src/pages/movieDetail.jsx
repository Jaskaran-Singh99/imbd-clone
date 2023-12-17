import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {FaPlus} from 'react-icons/fa6'
import '../styles/movieDetail.css'

export const MovieDetail = () => {
    const {id} = useParams()
    const [movie, setMovie] = useState([])
    useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=62d64696657178dbaeb82176e7e3e46a`).then((res)=>{
        res.json().then((data)=>setMovie(data))
    })
    }, [id])
   
  return (
    <>
    <header>
    <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className='background-image'></img>
        <div className='container'>
            <div className='header-image'>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}></img>
            </div>
           <div className='text-container'>
           <div className='genres'>
                {movie.genres ? movie.genres.map((genre)=>{
                    return <span className='genre' key={genre.id}>{genre.name} | </span>
                }) : ''}
            </div>
            <div className='movie-title'>
                {movie.title}
            </div>
            <div className='movie-desc'>
                {movie.overview}
            </div>
            <Link className='watch-now' to={`${movie.homepage}`}>Watch Now</Link>
           </div>
        </div>
    </header>
    </>
  )
}
