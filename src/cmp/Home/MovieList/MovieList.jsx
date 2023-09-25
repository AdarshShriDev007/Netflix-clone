import React, { useEffect, useState } from 'react';
import {
  apiAxios,
  photoURL
} from '../../../requests/baseUrl';

const MovieList = ({title,isLargeImage,fetchURL}) => {

  const [movies,setMovies] = useState([]);

  useEffect(()=>{
    const fetchData = async ()=>{
      await apiAxios.get(fetchURL)
      .then(({data})=>{
        setMovies(data.results);
      })
      .catch((error)=>{
        console.error(error);
      })
    }

    fetchData();
  },[fetchURL]);

  return (
    <div className='movieList'>
        <h2 className={!isLargeImage ? "smallTitle" : ""}>{title}</h2>
        <div className='posters'>
          {
            movies && movies.map((movie)=>{
              return <img 
                title={`${movie?.name || movie?.original_title || movie?.title}`} 
                key={movie?.id} className={`poster ${isLargeImage && "largePoster"}`} 
                src={`${photoURL}${isLargeImage ? movie?.poster_path : movie?.backdrop_path}`} 
                alt={`${movie?.name || movie?.original_title || movie?.title}`}
              />
            })
          }
            
        </div>
    </div>
  )
}

export default MovieList;