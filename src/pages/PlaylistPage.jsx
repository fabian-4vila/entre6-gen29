import { useEffect } from "react"
import usePlaylist from "../hooks/usePlaylist"

const PlaylistPage = () => {

  const { getPlayList, playlist} = usePlaylist()  

  useEffect(() => {
    getPlayList()
  }, [])

  console.log(playlist)

  return (
    <article>
      {
        playlist.map(track => (
          <div key={track.id}>
            <h2>{track.title}</h2>
          </div>
        ))
      }
    </article>
  )
}

export default PlaylistPage