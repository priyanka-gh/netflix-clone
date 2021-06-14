import axios from '../../util/axios';
import React,{useState,useEffect} from 'react'
import './row.css'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'


const Row = ({title, fetchUrl, isLargeRow = false}) => {

    const [movies, setMovies] = useState([]);
    const base_img_url = 'https://image.tmdb.org/t/p/original/';

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl]);

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(movie => (
                    ((isLargeRow && movie.poster_path) ||
                    (!isLargeRow && movie.backdrop_path)) && (
                        <img className={`row__poster ${isLargeRow && 'row__posterLarge'}`} key={movie.id} src={`${base_img_url}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`} alt={movie.name} />
                    ))
                )}
            </div>
        </div>
    )
}

export default Row
