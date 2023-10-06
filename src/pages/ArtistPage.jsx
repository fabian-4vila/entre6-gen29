
import { Link, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useEffect } from 'react'
import ArtistInfo from '../components/ArtistPage/ArtistInfo'
import ArtistAlbum from '../components/ArtistPage/ArtistAlbum'
 

const ArtistPage = () => {

  const { id } = useParams()

  const [ artist, getArtist ] = useFetch()
  
  useEffect(() => {
    getArtist(`/api/artists/${id}`)
  }, [id])

  console.log(artist)

  return (
    <div>
      <Link to='/'>Atras</Link>  
      <ArtistInfo 
        artist={artist}
      /> 
      <ArtistAlbum 
        albums={artist?.albums}
      /> 
    </div>
  )
}

export default ArtistPage