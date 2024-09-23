import { useState } from 'react';
import './App.css';
import FormPage from './FormPage';
import LikedDisplay from './LikedDisplay';

function App() {
  const [ movieTitle, setMovieTitle ] = useState('');
  const [ musicName, setMusicName ] = useState('');
  const [ artistName, setArtistName ] = useState('');
  const [ nickName, setNickName ] = useState('');
  const [ formSubmitted, setFormSubmitted ] = useState(false);

  const handleSubmit = () => {
    setFormSubmitted(!formSubmitted);
  }

  return (
    <>
      <div className='container'>
        {!formSubmitted ? (
            <FormPage 
              setMovieTitle={setMovieTitle}
              setMusicName={setMusicName}
              setArtistName={setArtistName}
              setNickName={setNickName}
              onFormSubmit={handleSubmit}
            />
          ) : (
            <LikedDisplay 
              movieTitle={movieTitle}
              musicName={musicName}
              artistName={artistName}
              nickName={nickName}
              onFormSubmit={handleSubmit}
            />
          )
        }
      </div>
    </>
  )
}

export default App
