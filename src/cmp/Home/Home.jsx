import React from 'react';
import "./Home.css";
import Header from './Header/Header';
import Banner from './Banner/Banner';
import MovieList from './MovieList/MovieList';
import requestURL from "../../requests/Requests";

const Home = () => {
  return (
    <>
        <div className='home'>
            <Header />
            <Banner />
            <MovieList title="Netflix Originals" isLargeImage fetchURL={requestURL.fetchNetflixOriginals} />
            <MovieList title="Trending Now" fetchURL={requestURL.fetchTrending} />
            <MovieList title="Top Rated" fetchURL={requestURL.fetchTopRated} />
            <MovieList title="Action Movies" fetchURL={requestURL.fetchActionMovies} />
            <MovieList title="Comedy Movies" fetchURL={requestURL.fetchComedyMovies} />
            <MovieList title="Horror Movies" fetchURL={requestURL.fetchHorrorMovies} />
            <MovieList title="Romantic Movies" fetchURL={requestURL.fetchRomanceMovies} />
            <MovieList title="Documentaries" fetchURL={requestURL.fetchDocumentaries} />
        </div>
    </>
  )
}

export default Home;