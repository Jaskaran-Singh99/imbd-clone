import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {Link} from 'react-router-dom'
import '../styles/home.css'
import '../styles/card.css'
import { Card } from '../components/card.js';

export const Home = () => {
  const [popularMovies, setPopularMovies] = useState([])
  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=62d64696657178dbaeb82176e7e3e46a').then((res)=>{
      res.json().then(data=>setPopularMovies(data.results))
    })
  },[])
  return (
    <>
    <div className='poster'>
      <Carousel autoPlay={true}  showStatus={false} showThumbs={false}  >
        {
          popularMovies.map(movie=>(
            <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}` } key={movie.id} >
            <div className="posterImage" >
                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}  />
            </div>
            {
            <div className="posterImage__overlay">
                <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                <div className="posterImage__runtime">
                    {movie ? movie.release_date : ""}
                    <span className="posterImage__rating">
                        {movie ? movie.vote_average :""}
                        <i className="fas fa-star" />{" "}
                    </span>
                </div>
                <div className="posterImage__description">{movie ? movie.overview : ""}</div>
            </div> }
         </Link>
          ))
        }
      </Carousel>
    </div>
    
    <div className='card-container'>
    {
      popularMovies.map(movie=>{
      return <Card movie={movie}></Card>
      })   
    }
    </div>
    
    </>
   
  )
}
