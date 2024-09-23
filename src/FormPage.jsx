import React, { useRef, useState } from 'react';

function FormPage({ setMovieTitle, setMusicName, setArtistName, setNickName, onFormSubmit }) {
    const [error, setError] = useState(false);
    const [errorText, setErrorText] =useState('');

    const refInput = {
        nickName : useRef(),
        movie : useRef(),
        music : useRef(),
        artist : useRef(),
    }

    const handleSubmit = (e) => {
        e.preventDefault;

        const nickName = refInput.nickName.current.value;
        const movie = refInput.movie.current.value;
        const music = refInput.music.current.value;
        const artist = refInput.artist.current.value;

        if ((nickName.trim() === '' || movie.trim() === '' || music.trim() === '' || artist.trim() === '')) {
            setError(true);
            setErrorText('Please Fill in all forms to get accurate result and an amazing fun fact')
        } else {
            setError(false);
            setErrorText('');
            setMovieTitle(movie);
            setMusicName(music);
            setArtistName(artist);
            setNickName(nickName);
    
            onFormSubmit();
        }

    }

  return (
    <>
        <div className="form-page">
            <h3>Input your name, favorite movie and music below for a fun fact about the movie and music</h3>
            <form>
                <label htmlFor="name">Nick Name</label>
                <input ref={refInput.nickName} type="text" placeholder='e.g - Legend.dev' />
            </form>
            <form>
                <label htmlFor="movie">Favorite Movie</label>
                <input ref={refInput.movie} type="text" placeholder='e.g - Superman' />
            </form>
            <form>
                <label htmlFor="music">Favorite Music</label>
                <input ref={refInput.music} type="text" placeholder='e.g - Umbrella' />
                <input ref={refInput.artist} type="text" placeholder='e.g - Rihanna' />
            </form>
            {error && <p>{errorText}</p>}
            <button onClick={handleSubmit}>🔥Show Me The Movie and Music🔥</button>
        </div>
    </>
  )
}

export default FormPage;