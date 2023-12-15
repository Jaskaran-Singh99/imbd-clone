import React from 'react'
import { useState } from 'react'
import '../styles/card.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css";
import { CiStar } from "react-icons/ci";
import { TbStarFilled } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";
import { useEffect } from 'react'

export const Card = ({ movie }) => {

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])

    return (
        <>
            {
                loading ?
                    <div className='card'>
                        <SkeletonTheme baseColor='#111' highlightColor='#444' >
                            <Skeleton duration={2} height={440}></Skeleton>
                        </SkeletonTheme>
                    </div>
                    :
                    <div className='card'>
                        <div className='image-container'>
                            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className='card__img'></img>
                        </div>
                        <div className='text-content'>
                            <div className='review-container'>
                            <div className='review'>    
                                <TbStarFilled></TbStarFilled>
                                <span>{movie.vote_average.toFixed(1)}</span>
                            </div>
                            <div className='favorite'>
                                <CiStar></CiStar>
                            </div>
                            </div>
                            <div className='card__title'>
                                {movie.title.length > 21 ? <div>{movie.title.substring(0,21)}...</div> : movie.title }
                            </div>
                            <button className='watch-now-btn'><span><FaPlus></FaPlus></span>Watchlist</button>

                        </div>
                    </div>



            }
        </>
    )
}
