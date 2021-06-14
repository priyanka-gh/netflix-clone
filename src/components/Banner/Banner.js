import axios from '../../util/axios';
import React, { useEffect, useState } from 'react'
import requests from '../../util/requests';
import './Banner.css'
function Banner() {
    const [movie,setMovie]=useState([])

    useEffect(()=>{
        const fetchData=async()=>{
            const request=await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
            return request;
        }
        fetchData();
    },[]);

    function truncate(str,n){
        return str?.length>n?str.substr(0,n-1)+"...":str;
    }
    return (
            <header className='banner' style={{
            backgroundSize: 'cover',
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
            backgroundPosition: 'center center'
            }}>
                <div className="banner__contents">
                    <h1>
                        {movie?.title||movie?.name||movie?.original_name}
                    </h1>

                    <div className="banner__buttons">
                        <button className="banner__button">Play</button>
                        <button className="banner__button">My List</button>
                    </div>

                    <h1 className="banner__description">{movie?.overview}
                    {truncate(movie?.overview,150)}
                    </h1>
                </div>

                <div className="banner--fadebottom"></div>
            </header>
    )
}

export default Banner
