import React from 'react'

const ArtistInfo = ({ artist }) => {
  return (
    <div>
      <header>
        <img src={artist?.images[0].url} alt="" />
      </header>
      <article>
        <h2>{artist?.name}</h2>
      </article>
      <ul>
        <li><span>Followers: </span><span>{artist?.followers.total}</span></li>
        <li><span>Populatity: </span><span>{artist?.popularity}</span></li>
        <li><span>Genres: </span>
          <ul>
            {
                artist?.genres.map(genre => (
                    <li key={genre}>{genre}</li>
                ))
            }
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default ArtistInfo
