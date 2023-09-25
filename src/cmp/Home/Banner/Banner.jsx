import React, { useEffect, useState } from 'react';
import {
  apiAxios,
  photoURL
} from "../../../requests/baseUrl";
import requestUrl from "../../../requests/Requests";

const Banner = () => {

  const [movie,setMovie] = useState([]);

  useEffect(()=>{
    const fetchData = async()=>{
      await apiAxios.get(requestUrl?.fetchNetflixOriginals)
      .then(({data})=>{
        setMovie(data?.results[Math.floor(Math.random() * data?.results?.length-1)]);
      })
      .catch((error)=>{
        console.error(error);
      });
    }

    fetchData()
  },[]);

  return (
    <div className='banner' style={{
        backgroundImage:`url(${photoURL}${movie?.backdrop_path})`,
        backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`,
        backgroundSize:'cover'
        }}>
        <div className='banner_content'>
            <h1>
              {
                movie?.name || movie?.original_name || movie?.title
              }
            </h1>
            <div className='buttons'>
                <button style={{marginRight:"10px"}}>Play</button>
                <button>My List</button>
            </div>
            <p>
                {
                  movie?.overview
                }
            </p>
        </div>

        <div className='banner_opacity'></div>
    </div>
  )
}

export default Banner;