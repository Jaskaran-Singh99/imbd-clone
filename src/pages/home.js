import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export const Home = () => {
  const [popularMovies, setPopularMovies] = useState('')
  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=62d64696657178dbaeb82176e7e3e46a').then((res)=>{
      res.json().then(data=>console.log(setPopularMovies(data.results)))
    })
  },[])
  return (
    <div>H</div>
  )
}
