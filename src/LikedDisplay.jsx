import React, { useState, useEffect } from 'react';
import useFetch from './useFetch';
import MovieDisplay from './MovieDisplay';
import MusicDisplay from './MusicDisplay';


function LikedDisplay({ movieTitle, musicName, artistName, nickName, onFormSubmit }) {
  
  const apiKey = '856407e37c9776632d1deffc07ae5426'
  const MOVIE_URL = `http://www.omdbapi.com?apikey=4e09530&s=${encodeURIComponent(movieTitle)}`;
  const MUSIC_URL = `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${encodeURIComponent(musicName)}&artist=${encodeURIComponent(artistName)}&api_key=${apiKey}&format=json&limit=5`;

  const { data : movie, error : movieError, loading : movieLoading } = useFetch(MOVIE_URL);
  const { data : music, error : musicError, loading : musicLoading } = useFetch(MUSIC_URL);


  const movieNotFound = movie && movie.Response === 'False';
  const musicNotFound = music && (!music?.results?.trackmatches?.track[0] || music?.results?.trackmatches?.track[0].length === 0);

  if (movieLoading || musicLoading) return <p>Loading... <br /> Please be patient <br />Abeg 👀 </p>;
  const handleSubmit = () => {
    onFormSubmit();
  }

  return (
    <>
        <div className="liked-display">
            <h4>🔥 Results for {nickName} Below 🔥</h4>
            <h5>Your Movie</h5>
            {movieError && <p>Error fetching movie: {movieError}</p>}
            {movieNotFound ? <p>Movie not found. Try again!</p> : <MovieDisplay movie={movie?.Search?.[0]} />}
            {/* {movieNotFound && <p>chia, sorry o the movie was not found o 😢</p>}
            {movieError && <p>Error: {movieError}</p>}
            {movieLoading ? <p>Loading...</p> : <MovieDisplay movie={movie?.Search[0]} />} */}
            {!movieNotFound && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quidem nesciunt provident, eius ut nisi aut nihil modi dignissimos fuga dolor veniam facere tempora repudiandae itaque animi id cumque saepe! Molestias atque, illum consectetur deleniti perferendis reprehenderit dignissimos eos accusantium minima dolore recusandae, asperiores expedita sequi dolorem cum consequuntur illo neque maxime velit magnam fuga enim laboriosam. Praesentium ab perferendis officiis aliquid adipisci id nostrum at accusamus? Libero fuga praesentium exercitationem tempora autem nostrum sapiente excepturi ratione atque expedita, dignissimos recusandae, mollitia aliquam quisquam unde cumque accusantium delectus. Placeat reiciendis perspiciatis nesciunt magni modi? Incidunt nam sapiente molestiae consectetur tenetur!</p>}
            <h5>Your Music</h5>
            {musicError && <p>Error fetching music: {musicError}</p>}
            {musicNotFound ? <p>Music not found. Try again!</p> : <MusicDisplay music={music?.results?.trackmatches?.track[0]} image={music?.results?.trackmatches?.track[0]?.image?.find(img => img.size === 'large')?.['#text']} />}
            {/* {musicNotFound && <p>Boya this song is none existent 🤣 </p>}
            {musicError && <p>Error: {musicError}</p>}
            {musicLoading ? <p>Loading...</p> : <MusicDisplay music={music?.results?.trackmatches?.track[0]} image={music?.results?.trackmatches?.track[0]?.image?.find(img => img.size === 'large')?.['#text']} />} */}
            {!musicNotFound && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit autem facilis quo vitae laudantium natus nostrum quos fugit obcaecati libero? Repudiandae omnis magni asperiores quis placeat distinctio ipsum. Velit doloremque numquam autem doloribus ducimus, nulla obcaecati, odio repellat est quibusdam possimus magni itaque nemo iure quam incidunt sunt, ea dolorum?</p>}
            <button onClick={handleSubmit}>Go Back</button>
        </div>
    </>
  )
}

export default LikedDisplay;
























  // music api key = '856407e37c9776632d1deffc07ae5426
  // shared-Secret = '3501a68d63dad57b6673ff107e0c981b'