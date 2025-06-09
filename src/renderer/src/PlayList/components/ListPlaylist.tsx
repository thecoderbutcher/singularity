import { Playlist } from '@prisma/client'
import { usePlaylists } from '@renderer/context/PlaylistContext/PlaylistHook'
import { useEffect } from 'react'
import { useCallback } from 'react'

function ListPlaylist(): React.JSX.Element {
  const { state, dispatch } = usePlaylists()

  const loadPlaylists = useCallback(async (): Promise<void> => {
    const data = await window.electron.ipcRenderer.invoke('playlist:getAll')
    dispatch({ type: 'SET_PLAYLISTS', payload: data })
  }, [dispatch])

  useEffect(() => {
    loadPlaylists()
  }, [loadPlaylists])

  const selectPlaylist = (playlist: Playlist): void => {
    dispatch({ type: 'SELECT_PLAYLIST', payload: playlist })
    console.log(playlist)
    console.log(state.playlistSelected)
  }

  return (
    <div className="flex flex-col justify-start items-center gap-2 lg:gap-4 pt-2 px-2 lg:px-4 w-full flex-1">
      {state.playlists.map((playlist) => (
        <button
          key={playlist.id}
          className={`w-full flex justify-center items-center  text-xs lg:text-base border border-secondary/20 rounded-md py-2 hover:bg-secondary-dark hover:text-primary hover:scale-105 transition-all duration-200 cursor-pointer ${playlist.id === state.playlistSelected?.id ? 'bg-secondary-dark text-primary' : 'bg-primary-dark/50 text-secondary'}`}
          onClick={() => selectPlaylist(playlist)}
        >
          {playlist.name}
        </button>
      ))}
    </div>
  )
}

export default ListPlaylist
