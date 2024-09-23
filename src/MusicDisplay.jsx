import React from 'react'

function MusicDisplay({ music, image }) {
  return (
    <div className="music">
      <div>
          <p>{music.listeners}</p>
      </div>

      <div>
          <img
            src={image !== 'N/A' || '' ? image : 'https://via.placeholder.com/400'}
            alt={music.name}
          />
      </div>

      <div>
          <span>{music.artist}</span>
          <h3>{music.name}</h3>
      </div>
    </div>
  )
}

export default MusicDisplay;